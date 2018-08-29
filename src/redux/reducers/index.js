import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import quickContactReducer from './quickContactReducer';


export default combineReducers({
  projects: projectsReducer,
  quickContact: quickContactReducer
});
