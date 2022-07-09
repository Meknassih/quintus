import { Container } from '@mui/material';
import { useEffect, useReducer } from 'react';
import GameOverModal from './GameOverModal';
import WordleRow from './WordleRow';

const solutionWord = "stead";
function Wordle() {
  const initialState = {
    values: Array(6).fill("").map(() => Array(5).fill("")),
    activeCell: [0, 0],
    editableRow: 0,
    isGridFull: false,
    hasWon: false,
    attempts: 1
  };
  function reducer(state, action) {
    switch (action.type) {
      case "setValue":
        // If uppercase letter or lowercase letter
        if (
          (
            !(action.payload.keyCode >= 65 && action.payload.keyCode <= 90) &&
            !(action.payload.keyCode >= 97 && action.payload.keyCode <= 122)
          ) ||
          state.isGridFull ||
          state.hasWon ||
          state.editableRow < 0 ||
          state.activeCell[0] < 0 ||
          state.activeCell[1] < 0
        ) return state;

        const newState = { ...state };
        const newValues = [...state.values];

        // Set new matrix of values
        newValues[state.activeCell[0]][state.activeCell[1]] = action.payload.key;
        newState.values = newValues;

        // Cell movement logic
        if (isSolutionFound(state.editableRow, solutionWord, newValues)) {
          newState.activeCell = [-1, -1];
          newState.editableRow = -1;
          newState.hasWon = true;
        }
        // Advance in the row
        else if (!isRowFull(state.activeCell[0], newValues)) newState.activeCell = [state.activeCell[0], (state.activeCell[1] + 1) % 5];
        // Advance to next row
        else if (state.activeCell[0] < 5) {
          newState.attempts++;
          newState.editableRow++;
          newState.activeCell = [state.activeCell[0] + 1, 0];
        }
        // Grid is full
        else {
          newState.activeCell = [-1, -1];
          newState.isGridFull = true;
        };

        return newState;
      case "setActiveCell":
        return { ...state, activeCell: action.payload };
      default:
        throw new Error("Dispatched unknown action type: " + action.type);
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  function onClick(rowIndex, letterIndex) {
    // console.log(`Want to set active letter (${rowIndex},${letterIndex})`);
    if (rowIndex !== state.editableRow) return;
    // console.log(`Set active letter (${rowIndex},${letterIndex})`);
    // @ts-ignore
    dispatch({
      type: "setActiveCell",
      payload: [rowIndex, letterIndex]
    });
  }

  function getSelectionForRow(rowIndex) {
    return state.activeCell[0] === rowIndex ? state.activeCell[1] : null;
  }

  function isRowFull(rowIndex, valuesMatrix) {
    for (let value of valuesMatrix[rowIndex]) {
      if (value === "") return false;
    }
    return true;
  }

  function isSolutionFound(editableRow, solutionWord, valuesMatrix) {
    for (let i = 0; i < solutionWord.length; i++)
      if (valuesMatrix[editableRow][i] !== solutionWord[i]) return false;
    return true;
  }

  const rows = [];
  for (let i = 0; i < 6; i++) {
    rows.push(<WordleRow
      key={i}
      values={state.values[i]}
      solutionWord={solutionWord}
      selected={getSelectionForRow(i)}
      editable={state.editableRow === i}
      onClick={(letterIndex) => onClick(i, letterIndex)}
    />);
  }

  useEffect(() => {
    function handleKeyUp(keyEvent) {
      // console.log(`pressed`, keyEvent.key, keyEvent.keyCode);
      // @ts-ignore
      dispatch({
        type: "setValue",
        payload: keyEvent
      });
    };
    document.addEventListener("keyup", handleKeyUp);
    console.log("added event listener");
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <Container maxWidth="md">
      {rows}
      <GameOverModal
        attempts={state.attempts}
        duration={2345}
        hasWon={state.hasWon}
        open={state.isGridFull || state.editableRow === -1}
        solution={solutionWord}
      />
    </Container>
  );
}

export default Wordle;