import { combineReducers } from 'redux';
import LoopsReducer from './reducer_loops';
import LoopType from './reducer_loop_type';
import LoopStyle from './reducer_style';

const rootReducer = combineReducers({
  loopData: LoopsReducer,
  loopType: LoopType,
  loopStyle: LoopStyle
});

export default rootReducer;
