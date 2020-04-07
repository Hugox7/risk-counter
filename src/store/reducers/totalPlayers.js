import { combineReducers } from 'redux';
import * as playersTypes from '../types/totalPlayers';

const playersNamesInitState = {
    players: [],
}

const playersNames = (state = playersNamesInitState, action) => {
    switch (action.type) {
        case  playersTypes.PLAYERSNAMES:
            return {
                players: [...state.players, action.data]
            };
        case playersTypes.DELETEPLAYER:
            return {
                players: [...state.players.filter(elem => elem.id !== action.id)]
            };
        default:
            return state;
    }
}

export default combineReducers({
    playersNames,
})