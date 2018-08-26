

const EndWeekReducer = (state = null, action) => {
    switch (action.type) {

      case 'SET_endWeek': return action.endWeek;

      default:
        return state;
    }
  };

  export default EndWeekReducer;