export function getRandomInt(min, max) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}

export function getRandomColour() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function createMonsterData(data) {
  const colour = getRandomColour();
  const eyeColour = getRandomColour();
  return {
    id: data.id,
    sides: data.sides,
    colour,
    eyeColour
  };
}
