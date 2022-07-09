import { Grid } from "@mui/material";
import WordleLetter from "./WordleLetter";

function HelpLetterExample({ value, status }) {
  function explanation() {
    switch (status) {
      case "none":
        return "is not in the word.";
      case "present":
        return "is in the word but at an incorrect position.";
      case "position":
        return "is in the word at the correct position.";
    }
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        padding: "1rem"
      }}
    >
      <Grid item xs={"auto"}>
        <WordleLetter
          active={false}
          editable={false}
          status={status}
          onClick={() => { }}
          value={value}
        />
      </Grid>
      <Grid item xs={6} sm={8}>
        {`${value.toUpperCase()} ${explanation()}`}
      </Grid>
    </Grid>
  );
}

export default HelpLetterExample;