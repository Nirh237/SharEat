import Api from '../../server/api';
import history from '../routers/AppRouter';


export const error = (msg) => ({
  type: 'ERROR',
  msg
});

export const login = ({Email,Password,ID,Role} = {}) => ({
  type: 'LOGIN',
  Email,
  Password,
  ID,
  Role
});

export const startLogin = (email,pass) => {
  return (dispatch) => {

    return Api.post("/Login",{email,pass}).then((Response) => {

      const user = JSON.parse(Response.data.d);

      if(user != null) {
        localStorage.setItem("user",user.ID);
          dispatch(login(user));
      }
      else {
        dispatch(error('Error email or password.'));
      }
    }).catch((error) => {
      console.log(error);
    })
};
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem("user");
    return dispatch(logout());
  };
};
