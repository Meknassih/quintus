import { Grid } from '@mui/material';
import { useEffect, useReducer } from 'react';
import "react-simple-keyboard/build/css/index.css";
import GameOverModal from './GameOverModal';
import VirtualKeyboard from './VirtualKeyboard';
import WordleRow from './WordleRow';
import { reducer, initialState } from '../stores/wordleStore';

function Wordle({ solutionWord }) {

  const [state, dispatch] = useReducer(reducer, initialState, (initState) => ({ ...initState, solutionWord }));

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

  function simulateKeyboardEvent(key) {
    const keyboardEvent = new KeyboardEvent("keyup", { key, keyCode: key.charCodeAt(0) });
    document.dispatchEvent(keyboardEvent);
  }

  const rows = [];
  for (let i = 0; i < 6; i++) {
    rows.push(<WordleRow
      key={i}
      values={state.values[i]}
      solutionWord={state.solutionWord}
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
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <>
      <Grid>
        <Grid item>
          {rows}
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="start">
        <Grid item xs={12} md={8}>
          <VirtualKeyboard
            onKeyPress={key => simulateKeyboardEvent(key)}
          />
        </Grid>
      </Grid>
      <GameOverModal
        attempts={state.attempts}
        duration={2345}
        hasWon={state.hasWon}
        open={state.isGridFull || state.editableRow === -1}
        solution={state.solutionWord}
        enableStorage={true}
      />
    </>
  );
}

export default Wordle;