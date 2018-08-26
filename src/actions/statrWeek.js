import Api from '../../server/api';
import { parse } from 'url';



//SET_StratWeek
  export const setStratWeek = (startWeek) => ({
    type: 'SET_startWeek',
    startWeek
  });

  export const stratSetStratWeek = () => {
    return (dispatch) => {

    //fetching WeeklyOrder from database and parse them to array  //, { responseType: 'json' }
    return Api.post("/GetStartofWeek",{ responseType: 'text' }).then((Response) => {


        const startWeek= (Response.data.d);


        if(startWeek != null) {
        //   localStorage.setItem("user",user.ID);
            dispatch(setStratWeek(startWeek));
        }

      }).catch((error) => {
        console.log(error);
      });



    };
  };