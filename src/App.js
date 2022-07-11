import Title from './components/Title';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Wordle from './components/Wordle';
import Footer from './components/Footer';
import { useQuery } from 'react-query';
import CryptoJS from 'crypto-js';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const todaysWord = useQuery(['todayWord'], () => {
    return new Promise((resolve, reject) => {
      fetch("/.netlify/functions/getTodaysWord")
        .then(result => result.json())
        .then(result => {
          const key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_KEY);
          const iv = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_IV);
          const word = CryptoJS.AES.decrypt(result, key, { iv }).toString(CryptoJS.enc.Utf8);
          resolve(word);
        });
    });
  });

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
