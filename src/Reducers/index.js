import { combineReducers } from 'redux'
import stats from './stats'
import sequenceState from './box'

const vis = combineReducers({
    stats,
    sequenceState
});


export default vis
