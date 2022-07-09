import { Paper, Typography } from "@mui/material";

function Statistics({ title, keyValuePairs }) {
  const rows = Object.entries(keyValuePairs).map(([key, value], i) => (
    <Typography
      variant="body2"
      sx={{
        display: "flex",
        justifyContent: "space-between"
      }}
      key={key + i}
    >
      <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
      <span>{value}</span>
    </Typography>
  ));
  return (
    <Paper
      elevation={2}
      sx={{
        paddingX: "1rem",
        paddingY: ".3rem"
      }}
    >
      <Typography variant="h5">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </Typography>
      {rows}
    </Paper>
  );
}

export default Statistics;