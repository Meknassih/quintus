import { Dialog, DialogTitle, Grid, Typography } from "@mui/material";
import Statistics from "./Statistics";
import TimeToNextGame from "./TimeToNextGame";

function GameOverModal({ hasWon, open, attempts, duration, solution }) {
  function handleClose() {
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{hasWon ? "You found it !" : "Better luck next time"}</DialogTitle>
      <Grid
        container
        spacing={2} 
        sx={{
          padding: "1rem" 
        }}
      >
        <Grid item xs={12} sx={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Typography variant="h3" component="p" color="success.main">
            {solution.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Statistics
            title="time"
            keyValuePairs={{
              today: duration,
              average: duration / 2
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Statistics
            title="attempts"
            keyValuePairs={{
              today: attempts,
              average: attempts / 2
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Statistics
            title="streak"
            keyValuePairs={{
              current: attempts,
              longest: attempts / 2,
              shortest: attempts / 2,
              average: attempts / 2
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Statistics
            title="totals"
            keyValuePairs={{
              played: attempts,
              winrate: attempts / 2,
              won: attempts / 2,
              lost: attempts / 2
            }}
          />
        </Grid>
        <Grid item xs={12} >
          <Typography
            variant="body1"
            sx={{
              paddingX: "1rem",
              paddingY: ".3rem"
            }}
          >
            {hasWon ? "Cool, you found today’s word ! " : "You didn’t find today’s word, but that’s okay ! "}
            Come back tomorrow for another puzzle.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "end"
          }}
        >
          <TimeToNextGame />
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default GameOverModal;