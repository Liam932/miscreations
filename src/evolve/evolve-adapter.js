import { createInitialPopulation, calculateFitnessOfIndividual } from 'evolvejs/dist/population';
import { createEvolutionPipeline } from 'evolvejs/dist/pipeline';

export const SELECTION = [{ type: "tournament" }, { type: "tournament" }];

export const SCHEMA = {
    sides: {
        min: 3,
        max: 5,
        type: "int"
    },
    bodyRed: {
        min: 0,
        max: 255,
        type: "int"
    },
    bodyGreen: {
        min: 0,
        max: 255,
        type: "int"
    },
    bodyBlue: {
        min: 0,
        max: 255,
        type: "int"
    },
    bodySize: {
        min: 30,
        max: 100,
        type: "int"
    },
    eyeRed: {
        min: 0,
        max: 255,
        type: "int"
    },
    eyeGreen: {
        min: 0,
        max: 255,
        type: "int"
    },
    eyeBlue: {
        min: 0,
        max: 255,
        type: "int"
    }
};

export const MUTATION_RATE = 0.05;

export const POPULATION_SIZE = 15;


export const combinationFn = (ind1, ind2) => ({
    sides: Math.round((ind1.sides + ind2.sides) / 2),
    bodyRed: Math.round((ind1.bodyRed + ind2.bodyRed) / 2),
    bodyGreen: Math.round((ind1.bodyGreen + ind2.bodyGreen) / 2),
    bodyBlue: Math.round((ind1.bodyBlue + ind2.bodyBlue) / 2),
    bodySize: Math.round((ind1.bodySize + ind2.bodySize) / 2),
    eyeRed: Math.round((ind1.eyeRed + ind2.eyeRed) / 2),
    eyeGreen: Math.round((ind1.eyeGreen + ind2.eyeGreen) / 2),
    eyeBlue: Math.round((ind1.eyeBlue + ind2.eyeBlue) / 2),
});

export const problemFn = (...individuals) => ind => {
    const averageSides = (individuals.reduce((acc, i) => acc + i.sides, 0)) / individuals.length;
    const fitness = 1 / (Math.abs(averageSides - ind.sides) || 0.01); //Problem here
    return fitness
}

export const calculateFitness = ({selectedIndividuals, population} = {}) => {
    const problem = problemFn(...selectedIndividuals);
    return population.map(calculateFitnessOfIndividual(problem));
}

export const initPopulation = ({ size }) => {
    return createInitialPopulation({size, schema: SCHEMA });
}

export const nextGeneration = async ({ population }) => {
    const pipeline = createEvolutionPipeline({selection: SELECTION, mutationRate: MUTATION_RATE, schema: SCHEMA, combination: combinationFn});
    return await Promise.all(new Array(POPULATION_SIZE).fill().map(() => pipeline({population})));
}
