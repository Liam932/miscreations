import { initMonsters, getSelectedMonsters } from '../monster/monster-redux';
import { SCHEMA, SELECTION, MUTATION_RATE, POPULATION_SIZE, calculateFitness, initPopulation, nextGeneration } from './evolve-adapter';

//Constants
export const ID = 'EVOLVE';
export const SET_POPULATION = `${ID}/SET_POPULATION`;


//Reducer
export const INITIAL_STATE = {
    selection: SELECTION,
    schema: SCHEMA,
    mutationRate: MUTATION_RATE,
    populationSize: POPULATION_SIZE,
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

export const getSchema = state => state.evolve.schema;
export const getMutationRate = state => state.evolve.mutationRate;
export const getSelection = state => state.evolve.selection;
export const getPopulationSize = state => state.evolve.populationSize;
export const getPopulation = state => state.evolve.population;
export const findIdInPopulation = (state, props) => state.evolve.population.find(p => p.id === props.genome.id);
export const getFitnessOfIndividual = (state, props) => {
    const individual = findIdInPopulation(state, props);
    return individual ? individual.fitness : null;
}

//Actions

export const setPopulation = population => ({
    type: SET_POPULATION,
    payload: population
})

export const initPop = () => (dispatch, getState) => {
    const state = getState();
    const population = initPopulation({ size: getPopulationSize(state) });
    dispatch(setPopulation(population))
    dispatch(initMonsters(population))
}

export const recalculateFitness = () => (dispatch, getState) => {
    const state = getState();
    const recalculated = calculateFitness({selectedIndividuals: getSelectedMonsters(state), population: getPopulation(state)});
    dispatch(setPopulation(recalculated))
}

export const nextGen = () => (dispatch, getState) => {
    const state = getState();
    const population = getPopulation(state);
    return nextGeneration({population}).then(result => {
        dispatch(setPopulation(result))
        dispatch(initMonsters(result))
    });
}
