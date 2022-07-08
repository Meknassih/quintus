import { Container } from '@mui/material';
import WordleLetter from './WordleLetter';

function WordleRow({ values, selected, onClick }) {
  const letters = [];
  for (let i = 0; i < 5; i++) {
    letters.push(<WordleLetter
      key={i}
      value={values[i]}
      active={selected === i}
      onClick={() => onClick(i)}
    />);

  }
  return (
    <Container maxWidth="md" sx={{
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "center",
      marginY: ".2rem"
    }}>
      {letters}
    </Container>
  );
}

export default WordleRow;