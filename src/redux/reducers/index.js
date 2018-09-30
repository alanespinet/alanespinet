import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import quickContactReducer from './quickContactReducer';
import portfoliosReducer from './portfoliosReducer';


export default combineReducers({
  projects: projectsReducer,
  quickContact: quickContactReducer,
  portfolios: portfoliosReducer
});
