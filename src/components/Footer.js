import { Link, Paper, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "end",
        gap: ".3rem",
        width: "100vw",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingY: "1rem",
        position: "fixed",
        bottom: 0,
        left: 0
      }}>
      <Link
        href="https://github.com/Meknassih/quintus"
        underline="hover"
        target="_blank"
        rel="noopener"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: ".3rem"
        }}>
        <GitHubIcon fontSize="small" />
        <Typography
          align="center"
          fontSize={16}
        >
          Meknassih/quintus
        </Typography>
      </Link>
      <Typography
        color="text.disabled"
        fontSize={16}
      >
        (AGPL-3.0) | Words from
      </Typography>
      <Link
        href="https://github.com/tabatkins/wordle-list"
        underline="hover"
        target="_blank"
        rel="noopener"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: ".3rem"
        }}>
        <GitHubIcon fontSize="small" />
        <Typography
          align="center"
          fontSize={16}
        >
          Tabatkins/wordle-list
        </Typography>
      </Link>
      <Typography
        color="text.disabled"
        fontSize={16}
      >
        (MIT)
      </Typography>
    </Paper>);
}

export default Footer;