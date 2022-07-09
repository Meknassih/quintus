import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import GameOverModal from './GameOverModal';
import WordleRow from './WordleRow';

function Wordle() {
  const [values, setValues] = useState(Array(6).fill("").map(() => Array(5).fill("")));
  const [activeLetter, setActiveLetter] = useState([0, 0]);
  const [activeRow, setActiveRow] = useState(0);
  const [inputLetter, setInputLetter] = useState(null);
  const [isGridFull, setIsGridFull] = useState(false)
  const [hasWon, setHasWon] = useState(false);
  const [attempts, setAttempts] = useState(1)
  const solutionWord = "stead"

  function onClick(rowIndex, letterIndex) {
    // console.log(`Want to set active letter (${rowIndex},${letterIndex})`);
    if (rowIndex !== activeRow) return;
    // console.log(`Set active letter (${rowIndex},${letterIndex})`);
    setActiveLetter([rowIndex, letterIndex])
  }

  function getSelectionForRow(rowIndex) {
    return activeLetter[0] === rowIndex ? activeLetter[1] : null;
  }

  function handleKeyUp(keyEvent) {
    // console.log(`pressed`, keyEvent.key, keyEvent.keyCode);
    // If uppercase letter or lowercase letter
    if ((keyEvent.keyCode >= 65 && keyEvent.keyCode <= 90) || (keyEvent.keyCode >= 97 && keyEvent.keyCode <= 122))
      setInputLetter(keyEvent);
  }

  function isRowFull(rowIndex) {
    for (let value of values[rowIndex]) {
      if (value === "") return false;
    }
    return true;
  }

  function isSolutionFound() {
    for (let i = 0; i < solutionWord.length; i++)
      if (values[activeRow][i] !== solutionWord[i]) return false;
    return true;
  }

  const rows = [];
  for (let i = 0; i < 6; i++) {
    rows.push(<WordleRow
      key={i}
      values={values[i]}
      solutionWord={solutionWord}
      selected={getSelectionForRow(i)}
      editable={activeRow === i}
      onClick={(letterIndex) => onClick(i, letterIndex)}
    />);
  }

  // Order 0
  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    // console.log("added event listener");
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, []);

  // Order 1
  useEffect(() => {
    if (!inputLetter || activeLetter[0] === -1 || activeLetter[1] === -1) return;
    setValues(oldValues => {
      const newValues = [...oldValues];
      newValues[activeLetter[0]][activeLetter[1]] = inputLetter.key;
      return newValues;
    });
  }, [inputLetter]);

  // Order 2
  useEffect(() => {
    if (isSolutionFound()) setActiveLetter([-1, -1]);
    // Advance in the row
    else if (!isRowFull(activeLetter[0])) setActiveLetter(oldActiveLetter => [oldActiveLetter[0], (oldActiveLetter[1] + 1) % 5]);
    // Advance to next row
    else if (activeLetter[0] < 5) {
      setAttempts(oldAttempts => oldAttempts + 1)
      setActiveRow(activeLetter[0] + 1);
      setActiveLetter(oldActiveLetter => [oldActiveLetter[0] + 1, 0]);
    }
    // Grid is full
    else setActiveLetter([-1, -1]);
  }, [values]);

  // Order 3
  useEffect(() => {
    if (isSolutionFound()) {
      setActiveRow(-1);
      setHasWon(true);
    }
    else if (activeLetter[0] === -1 || activeLetter[1] === -1) setIsGridFull(true);
    else setIsGridFull(false);
  }, [activeLetter])

  return (
    <Container maxWidth="md">
      {rows}
      <GameOverModal
        attempts={attempts}
        duration={2345}
        hasWon={hasWon}
        open={isGridFull || activeRow === -1}
        solution={solutionWord}
      />
    </Container>
  );
}

export default Wordle;