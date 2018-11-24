import { createMonsterData } from './monster-data';

//Constants
export const INIT_MONSTERS = 'MONSTER/INIT_MONSTERS';

//Actions
export const initMonsters = () => ({
    type: INIT_MONSTERS,
    payload: {
        monsters: createMonsterData(15)
    }
});

//Reducer
export const INITIAL_STATE = {
    list: []
}


export const monsterReducer = (state = INITIAL_STATE, {type, payload} = {}) => {
    switch(type) {
        case(INIT_MONSTERS):
            return {
                ...state,
                list: payload.monsters
            };
        default:
            return state;
    }
}

//Selectors

export const getMonsters = state => state.monster.list;
