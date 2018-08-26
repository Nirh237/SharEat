

const StartWeekReducer = (state = null, action) => {
    switch (action.type) {

      case 'SET_startWeek': return action.startWeek;

      default:
        return state;
    }
  };

  export default StartWeekReducer;