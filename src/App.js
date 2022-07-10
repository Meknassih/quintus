import Title from './components/Title';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Wordle from './components/Wordle';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        height: "100vh",
        minWidth: "100vw"
      }}>
        <Title />
      <Container>
        <Wordle />
      </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
