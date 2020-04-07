import { combineReducers } from 'redux';
import players from './totalPlayers';

const mainReducer = combineReducers({
    players,
})

export default mainReducer;