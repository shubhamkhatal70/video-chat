import { combineReducers } from 'redux';
import dashboardReducer from './reducers/dashboardReducer';
import callReducer from './reducers/callReducer';

export default combineReducers({
  dashboard: dashboardReducer,
  call: callReducer
});
