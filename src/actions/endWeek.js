import Api from '../../server/api';
import { parse } from 'url';



//SET_endWeek
  export const setEndWeek = (endWeek) => ({
    type: 'SET_endWeek',
    endWeek
  });

  export const stratSetEndWeek = () => {
    return (dispatch) => {

    //fetching WeeklyOrder from database and parse them to array  //, { responseType: 'json' }
    return Api.post("/GetEndOfWeek",{ responseType: 'text' }).then((Response) => {

        const endWeek= (Response.data.d);


        if(endWeek != null) {
        //   localStorage.setItem("user",user.ID);
            dispatch(setEndWeek(endWeek));
        }

      }).catch((error) => {
        console.log(error);
      });



    };
  };