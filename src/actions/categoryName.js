import Api from '../../server/api';
import { parse } from 'url';


export const error = (msg) => ({
    type: 'ERROR',
    msg
  });
//SET_WeeklyOrder
  export const setCategory = (categories) => ({
    type: 'SET_ categories',
    categories
  });

  export const startSetCategoty = () => {
    return (dispatch) => {

    //fetching WeeklyOrder from database and parse them to array
    return Api.post("/Category", { responseType: 'json' }).then((Response) => {


        const categoriesArray = [];
        const categories = JSON.parse(Response.data.d);
        categories.forEach(child => {
            categoriesArray.push({
            ...child
          });
        });


        if(categories != null) {
        //   localStorage.setItem("user",user.ID);
            dispatch(setCategory(categoriesArray));
        }
        else {
          dispatch(error('Cant resolveWeekly Order'));
        }
      }).catch((error) => {
        console.log(error);
      });



    };
  };