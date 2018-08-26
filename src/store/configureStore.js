import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import WeekleyOrderReducer from '../reducers/weeklyOrder';
import StartWeekReducer from '../reducers/startWeek';
import EndWeekReducer from '../reducers/endWeek';
import OrderReceivedReducer from '../reducers/orderReceived';
import WorkersCountReducer from '../reducers/workersCount';
import CategoryNameReducer from '../reducers/categoryName';
import ProductsReducer from '../reducers/productsByCategory';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      weeklyOrder: WeekleyOrderReducer,
      startWeek: StartWeekReducer,
      endWeek: EndWeekReducer,
      orderReceived: OrderReceivedReducer,
      workersCount: WorkersCountReducer,
      categories: CategoryNameReducer,
      products: ProductsReducer



    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
