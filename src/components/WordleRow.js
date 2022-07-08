import { Container } from '@mui/material';
import WordleLetter from './WordleLetter';

function WordleRow() {
  return (
    <Container maxWidth="md" sx={{
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "center",
      marginY: ".2rem"
    }}>
      <WordleLetter />
      <WordleLetter />
      <WordleLetter />
      <WordleLetter />
      <WordleLetter />
    </Container>
  );
}

export default WordleRow;