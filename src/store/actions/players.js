import * as playersTypes from '../types/totalPlayers';

export const setPlayersNames = (data) => ({
    type: playersTypes.PLAYERSNAMES,
    data,
});

export const deletePlayer = (id) => ({
    type: playersTypes.DELETEPLAYER,
    id,
});