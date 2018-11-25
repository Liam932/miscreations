import { combineReducers } from 'redux';
import { monsterReducer } from './monster/monster-redux';
import { evolveReducer } from './evolve/evolve-redux';

const rootReducer = combineReducers({monster: monsterReducer, evolve: evolveReducer})

export default rootReducer;
