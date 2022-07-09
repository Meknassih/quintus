import { Container } from '@mui/material';
import WordleLetter from './WordleLetter';

function WordleRow({ values, solutionWord, selected, editable, onClick }) {
  const letters = [];
  for (let i = 0; i < 5; i++) {
    letters.push(<WordleLetter
      key={i}
      value={values[i]}
      active={selected === i}
      editable={editable}
      status={letterStatus(i)}
      onClick={() => onClick(i)}
    />);
  }

  function isRowFull(rowIndex) {
    for (let value of values) {
      if (value === "") return false;
    }
    return true;
  }

  /*
  open to edition = null
  correct position = "position"
  present in word = "present"
  not present in word = "none"
   */
  function letterStatus(letterIndex) {
    if (!isRowFull()) return null;
    else if (solutionWord[letterIndex] === values[letterIndex]) return "position";
    else if (solutionWord.includes(values[letterIndex])) return "present";
    else return "none";
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