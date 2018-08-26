import Api from '../../server/api';
import { parse } from 'url';



//SET_OrderReceived
  export const setWorkersCount = (workersCount) => ({
    type: 'SET_workersCount',
    workersCount
  });

  export const stratSetWorkersCount = () => {
    return (dispatch) => {

    //fetching WeeklyOrder from database and parse them to array  //, { responseType: 'json' }
    return Api.post("/GetWorkersCount",{ responseType: 'text' }).then((Response) => {

        const workersCount= (Response.data.d);


        if(workersCount != null) {
        //   localStorage.setItem("user",user.ID);
            dispatch(setWorkersCount(workersCount));
        }

      }).catch((error) => {
        console.log(error);
      });



    };
  };