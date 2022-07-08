import { Container } from '@mui/material';
import { useState } from 'react';
import WordleRow from './WordleRow';

function Wordle() {
  const [values, setValues] = useState(Array(6).fill("").map(() => Array(5).fill("")));
  const [activeLetter, setActiveLetter] = useState([0, 0]);

  function onClick(rowIndex, letterIndex) {
    // console.log(`Clicked letter (${rowIndex},${letterIndex})`);
    setActiveLetter([rowIndex, letterIndex])
  }

  function getSelectionForRow(rowIndex) {
    return activeLetter[0] === rowIndex ? activeLetter[1] : null;
  }

  const rows = [];
  for (let i = 0; i < 6; i++) {
    rows.push(<WordleRow
      key={i}
      values={values}
      selected={getSelectionForRow(i)}
      onClick={(letterIndex) => onClick(i, letterIndex)}
    />);
  }

  return (
    <Container maxWidth="md">
      {rows}
    </Container>
  );
}

export default Wordle;