import Title from './components/Title';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Wordle from './components/Wordle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Title />
        <Wordle />
      </Container>
    </ThemeProvider>
    /* TODO: add credit: Words from https://github.com/tabatkins/wordle-list */
  );
}

export default App;
