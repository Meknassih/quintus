import { Container } from '@mui/material';
import { useState } from 'react';
import WordleRow from './WordleRow';

function Wordle() {
  const [values, setValues] = useState([]);
  function onClick() {

  }
  function getSelectionForRow(rowIndex) {

  }
  const rows = [];
  for (let i = 0; i < 6; i++) {
    rows.push(<WordleRow
      key={i}
      values={values}
      selected={getSelectionForRow(0)}
      onClick={onClick}
    />);
  }

  return (
    <Container maxWidth="md">
      {rows}
    </Container>
  );
}

export default Wordle;