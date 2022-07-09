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
  );
}

export default App;
