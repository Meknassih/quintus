import { Box, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import moment from "moment";

function TimeToNextGame() {
  const timeToNext = new Date(Date.now() + 500000);

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "end",
      alignContent: "center"
    }}
      color="text.secondary"
    >
      <AccessTimeIcon />
      <Typography
        variant="button"
        component="span"
        fontSize={16}
        sx={{
          paddingTop: "2px",
          marginLeft: ".3rem"
        }}
      >
        Next Quintus {moment(timeToNext).fromNow()}
      </Typography>
    </Box>
  );
}

export default TimeToNextGame;