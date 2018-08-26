import Api from '../../server/api';
import { parse } from 'url';


export const error = (msg) => ({
    type: 'ERROR',
    msg
  });
//SET_WeeklyOrder
  export const setProduct= (products) => ({
    type: 'SET_products',
    products
  });

  export const startSetCategoty = () => {
    return (dispatch) => {

    //fetching WeeklyOrder from database and parse them to array
    return Api.post("/ProductsByCategory", { responseType: 'json' }).then((Response) => {


        const productsArray = [];
        const products = JSON.parse(Response.data.d);
        products.forEach(child => {
            productsArray.push({
            ...child
          });
        });


        if(products != null) {
        //   localStorage.setItem("user",user.ID);
            dispatch(setProduct(productsArray));
        }
        else {
          dispatch(error('Cant resolveWeekly Order'));
        }
      }).catch((error) => {
        console.log(error);
      });



    };
  };