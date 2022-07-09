import Title from './components/Title';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Wordle from './components/Wordle';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Title />
      <Container>
        <Wordle />
      </Container>
      <Footer />
    </ThemeProvider>
    /* TODO: add credit: Words from https://github.com/tabatkins/wordle-list */
  );
}

export default App;
