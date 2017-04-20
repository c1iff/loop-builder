import { combineReducers } from 'redux';
import LoopsReducer from './reducer_loops';

const rootReducer = combineReducers({
  loopData: LoopsReducer
});

export default rootReducer;
