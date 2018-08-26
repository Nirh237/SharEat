const OrderReceivedReducer = (state = null, action) => {
    switch (action.type) {

      case 'SET_orderReceived': return action.orderReceived;

      default:
        return state;
    }
  };

  export default OrderReceivedReducer;