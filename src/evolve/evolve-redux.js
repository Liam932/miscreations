import { createInitialPopulation, calculateFitnessOfIndividual } from 'evolvejs/dist/population';
import { createEvolutionPipeline } from 'evolvejs/dist/pipeline';
import uuid from 'uuid/v4';
import { initMonsters, getSelectedMonsters } from '../monster/monster-redux';

//Constants
export const ID = 'EVOLVE';
export const SET_POPULATION = `${ID}/SET_POPULATION`;


//Reducer
export const INITIAL_STATE = {
    selection: [{ type: "tournament" }, { type: "tournament" }],
    schema: {
        sides: {
            min: 3,
            max: 10,
            type: "int"
        }
    },
    mutationRate: 0.05,
    populationSize: 15,
    population: []
};

export const evolveReducer = (state = INITIAL_STATE, { type, payload } = {}) => {
    switch (type) {
        case SET_POPULATION:
            return {
                ...state,
                population: payload
            }
        default:
            return state;
    }
}

//Selectors

export const getSchema = state => state.evolve.schema
export const getMutationRate = state => state.evolve.mutationRate
export const getSelection = state => state.evolve.selection
export const getPopulationSize = state => state.evolve.populationSize
export const getPopulation = state => state.evolve.population

//Actions

const combination = (ind1, ind2) => ({ sides: Math.round((ind1.sides + ind2.sides) / 2) });

const problemFn = (...individuals) => ind => {
    const averageSides = (individuals.reduce((acc, i) => acc + i.sides, 0)) / individuals.length;
    const fitness = 1 / (Math.abs(averageSides - ind.sides) || 1);
    return fitness
}

export const setPopulation = population => ({
    type: SET_POPULATION,
    payload: population
})

export const initPop = () => (dispatch, getState) => {
    const state = getState();
    const schema =  getSchema(state);
    const size = getPopulationSize(state);
    const population = createInitialPopulation({size, schema }).map(p => ({ ...p, id: uuid() }))
    dispatch(setPopulation(population))
    dispatch(initMonsters(population))
}

export const recalculateFitness = () => (dispatch, getState) => {
    const state = getState();
    const problem = problemFn(...getSelectedMonsters(state));
    const population = getPopulation(state);
    const updated = population.map(calculateFitnessOfIndividual(problem));
    dispatch(setPopulation(updated))
}


export const nextGen = () => (dispatch, getState) => {
    const state = getState();
    const schema =  getSchema(state);
    const mutationRate =  getMutationRate(state);
    const selection =  getSelection(state);
    const pipeline = createEvolutionPipeline({selection, mutationRate, schema, combination})
    const population = getPopulation(state);
    const size = getPopulationSize(state);
    return Promise.all(new Array(size).fill().map(() => pipeline({population}))).then(result => {
        const nextPop = result.map(p => ({ ...p, id: uuid() }));
        dispatch(setPopulation(nextPop))
        dispatch(initMonsters(nextPop))
    });
}
