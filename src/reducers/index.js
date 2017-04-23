import { combineReducers } from 'redux';
import LoopsReducer from './reducer_loops';
import LoopType from './reducer_loop_type'

const rootReducer = combineReducers({
  loopData: LoopsReducer,
  loopType: LoopType
});

export default rootReducer;
