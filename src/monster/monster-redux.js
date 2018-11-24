import { createMonsterData } from './monster-data';

//Constants
export const INIT_MONSTERS = 'MONSTER/INIT_MONSTERS';
export const SELECT_MONSTER = 'MONSTER/SELECT';

//Actions
export const initMonsters = () => ({
    type: INIT_MONSTERS,
    payload: {
        monsters: createMonsterData(15)
    }
});

export const selectMonster = id => ({
    type: SELECT_MONSTER,
    payload: { id }
})

//Reducer
export const INITIAL_STATE = {
    monsters: {},
    selected: []
}

export const monsterReducer = (state = INITIAL_STATE, {type, payload} = {}) => {
    switch(type) {
        case(INIT_MONSTERS):
            return {
                ...INITIAL_STATE,
                monsters: payload.monsters.reduce((acc, item) => ({[item.id]: item, ...acc}), {}),
            };
        case(SELECT_MONSTER):
            if(state.selected.includes(payload.id)) return state;
            return {
                ...state,
                selected: [...state.selected, payload.id]
            };
        default:
            return state;
    }
}

//Selectors

export const getMonsters = state => Object.values(state.monster.monsters);
export const isMonsterSelected = (state, props) => state.monster.selected.includes(props.genome.id);
