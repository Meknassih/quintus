import { Paper, Typography } from "@mui/material";

function Title() {
  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: "primary.dark",
        width: "100vw",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginBottom: "2rem"
      }}>
      <Typography
        variant="h3"
        color="text.primary"
        sx={{
          paddingX: "3rem",
          paddingY: ".3rem"
        }}
      >
        Quintus
      </Typography>
    </Paper>
  );
}

export default Title;