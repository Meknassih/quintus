import { Container } from '@mui/material';
import WordleRow from './WordleRow';

function Wordle() {
  return (
    <Container maxWidth="md">
      <WordleRow />
      <WordleRow />
      <WordleRow />
      <WordleRow />
      <WordleRow />
      <WordleRow />
    </Container>
  );
}

export default Wordle;