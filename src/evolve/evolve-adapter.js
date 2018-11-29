import { createInitialPopulation, calculateFitnessOfIndividual, createEvolutionPipeline, bestIndividual } from 'evolvejs';

export const SELECTION = [{ type: "tournament" }, { type: "tournament" }];

export const SCHEMA = {
    sides: {
        min: 3,
        max: 7,
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


export const problemFn = (...individuals) => ind => {
    const index = individuals.findIndex(i => i.id === ind.id);

    // const averageSides = (individuals.reduce((acc, i) => acc + i.sides, 0)) / individuals.length
    // const fitness = 1 / (Math.abs(averageSides - ind.sides.value) || 0.01); //Problem here
    const fitness = index + 1;
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
    const pipeline = createEvolutionPipeline({selection: SELECTION, mutationRate: MUTATION_RATE, schema: SCHEMA});
    const elite = bestIndividual(population)();
    const generated = await Promise.all(new Array(POPULATION_SIZE -1).fill().map(() => pipeline({population})));
    return [...generated, elite]
}
