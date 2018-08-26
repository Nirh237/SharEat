import Api from '../../server/api';
import { parse } from 'url';



//SET_OrderReceived
  export const setOrderReceived = (orderReceived) => ({
    type: 'SET_orderReceived',
    orderReceived
  });

  export const stratSetOrderReceived = () => {
    return (dispatch) => {

    //fetching WeeklyOrder from database and parse them to array  //, { responseType: 'json' }
    return Api.post("/GetOrderReceived",{ responseType: 'text' }).then((Response) => {

        const orderReceived= (Response.data.d);


        if(orderReceived != null) {
        //   localStorage.setItem("user",user.ID);
            dispatch(setOrderReceived(orderReceived));
        }

      }).catch((error) => {
        console.log(error);
      });



    };
  };