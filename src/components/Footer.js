import { Box, Grid, Link, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const theme = useTheme();
  const mdOrLess = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Paper
      elevation={4}
      sx={{
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingY: "1rem",
        marginTop: "8px"
      }}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            display: "flex",
            justifyContent: mdOrLess ? "center" : "end",
            gap: ".3rem"
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
                component="span"
              >
                Meknassih/quintus
              </Typography>
            </Link>
            <Typography
              color="text.disabled"
              fontSize={16}
              component="span"
              sx={{ flexShrink: 0 }}
            >
              (AGPL-3.0)
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            display: "flex",
            justifyContent: mdOrLess ? "center" : "start",
            gap: ".3rem"
          }}>
            <Typography
              color="text.disabled"
              fontSize={16}
              sx={{ flexShrink: 0 }}
            >
              Words from
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
                component="span"
              >
                Tabatkins/wordle-list
              </Typography>
            </Link>
            <Typography
              color="text.disabled"
              fontSize={16}
              component="span"
            >
              (MIT)
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>);
}

export default Footer;