const DAY_IN_MS = 8.64e+7;

export const initialState = {
  attempts: {
    sum: 0
  },
  time: {
    sum: 0
  },
  streak: {
    current: 0,
    longest: 0,
    shortest: 1,
    lastWonAt: null,
  },
  totals: {
    played: 0,
    won: 0,
    lost: 0
  }
};

function timeDiff(lastWonAt) {
  if (!lastWonAt) return 0;
  return (new Date()).valueOf() - (new Date(lastWonAt)).valueOf();
}
function isStreakLost(lastWonAt) {
  return timeDiff(lastWonAt) > DAY_IN_MS;
}

function getStreak(lastWonAt, oldStreak) {
  return !isStreakLost(lastWonAt) ? oldStreak + 1 : 1;
}

function getLongestStreak(lastWonAt, oldStreak, oldLongestStreak) {
  return getStreak(lastWonAt, oldStreak) > oldLongestStreak ? getStreak(lastWonAt, oldStreak) : oldLongestStreak;
}

function getShortestStreak(lastWonAt, oldStreak, oldShortestStreak) {
  if (oldShortestStreak == null) return getStreak(lastWonAt, oldStreak);
  if (!isStreakLost(lastWonAt)) return oldShortestStreak;
  return (getStreak(lastWonAt, oldStreak) < oldShortestStreak) ? getStreak(lastWonAt, oldStreak) : oldShortestStreak;
}

export function reducer(state, action) {
  switch (action.type) {
    case "addGameResult":
      return {
        attempts: {
          sum: state.attempts.sum + action.payload.attempts
        },
        time: {
          sum: state.time.sum + action.payload.time
        },
        streak: {
          current: getStreak(state.streak.lastWonAt, state.streak.current),
          longest: getLongestStreak(state.streak.lastWonAt, state.streak.current, state.streak.longest),
          shortest: getShortestStreak(state.streak.lastWonAt, state.streak.current, state.streak.shostest),
          lastWonAt: new Date()
        },
        totals: {
          played: state.totals.played + 1,
          won: action.payload.hasWon ? state.totals.won + 1 : state.totals.won,
          lost: action.payload.hasWon ? state.totals.lost : state.totals.lost + 1
        }
      };
    default:
      throw new Error("Dispatched unknown action type: " + action.type);
  }
}