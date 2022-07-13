import Title from './components/Title';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Wordle from './components/Wordle';
import Footer from './components/Footer';
import { useQuery } from 'react-query';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoadingSpinner from './components/LoadingSpinner';
import { getTodaysWord } from './services/wordService';

function App() {
  const todaysWord = useQuery(['todaysWord'], getTodaysWord);

  function renderGame() {
    switch (todaysWord.status) {
      case "success":
        return (<Wordle solutionWord={todaysWord.data} />);
      case "loading":
        return (<LoadingSpinner />);
      case "error":
      default:
        return (<p>An error occurred during loading</p>);
    }
  }
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
        <Container sx={{
          textAlign: "center"
        }}>
          {renderGame()}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
