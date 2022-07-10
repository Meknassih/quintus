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

export const initialState = {
  values: Array(6).fill("").map(() => Array(5).fill("")),
  activeCell: [0, 0],
  editableRow: 0,
  isGridFull: false,
  hasWon: false,
  attempts: 1,
  solutionWord: "stead"
};

export function reducer(state, action) {
  switch (action.type) {
    case "setValue":
      // Check if valid key and game state allows playing
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
      newValues[state.activeCell[0]][state.activeCell[1]] = action.payload.key.toLowerCase();
      newState.values = newValues;

      // Cell movement logic
      if (isSolutionFound(state.editableRow, state.solutionWord, newValues)) {
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