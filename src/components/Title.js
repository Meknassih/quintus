import { Container, IconButton, Paper, Typography } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelpModal from "./HelpModal";
import { useState } from "react";

function Title() {
  const [helpOpen, setHelpOpen] = useState(false)

  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: "primary.dark",
        width: "100vw",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingY: ".3rem"
      }}>
      <Container sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Typography
        variant="h3"
          color="text.primary"
      >
        Quintus
      </Typography>
        <IconButton
          aria-label="help"
          onClick={() => setHelpOpen(!helpOpen)}
          sx={{ flexGrow: 0 }}
        >
          <HelpOutlineIcon />
        </IconButton>
      </Container>
      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </Paper>
  );
}

export default Title;