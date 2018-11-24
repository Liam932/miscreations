import evolve from 'evolvejs';

const { next, population, bestIndividual } = evolve({
  populationSize: 10,
  selection: [{ type: "tournament" }, { type: "tournament" }],
  combination: (ind1, ind2) => ({ x: (ind1.x + ind2.x) / 2 }),
  problem: ind => Math.sin(ind.x),
  schema: {
    x: {
      min: 0,
      max: Math.PI * 2,
      type: "float"
    }
  },
  mutationRate: 0.05
});
