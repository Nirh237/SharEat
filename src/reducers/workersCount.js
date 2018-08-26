const WorkersCountReducer = (state = null, action) => {
    switch (action.type) {

      case 'SET_workersCount': return action.workersCount;

      default:
        return state;
    }
  };

  export default WorkersCountReducer;