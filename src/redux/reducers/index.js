import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import quickContactReducer from './quickContactReducer';
import portfoliosReducer from './portfoliosReducer';
import skillsReducer from './skillsReducer';


export default combineReducers({
  projects: projectsReducer,
  quickContact: quickContactReducer,
  portfolios: portfoliosReducer,
  skills: skillsReducer
});
