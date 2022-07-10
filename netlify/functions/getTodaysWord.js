exports.handler = async function (event, context) {
  if (!process.env.MONGO_URL) return {
    statusCode: 503,
    body: JSON.stringify({ message: "Invalid database URL" })
  };
  if (!process.env.MONGO_DB) return {
    statusCode: 503,
    body: JSON.stringify({ message: "Invalid database name" })
  };

  const { MongoClient } = require("mongodb");
  // Create a new MongoClient
  const client = new MongoClient(process.env.MONGO_URL);
  const db = client.db(process.env.MONGO_DB);
  let todayWord;

  try {
    // Establish and verify connection
    const totalWords = await db.collection("words").countDocuments();
    const todayIndex = Math.floor((new Date()).valueOf() / 8.64e7) % totalWords;
    const todayWordCursor = await db.collection("words").find().skip(todayIndex).limit(1);
    const result = await todayWordCursor.toArray();
    if (result.length < 1) throw new Error("0 documents found");
    todayWord = result[0].value;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Could not get today’s word", error })
    };
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todayWord),
  };
};