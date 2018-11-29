export function createMonsterData(data) {
  return {
    id: data.id,
    sides: data.sides.value,
    colour: `rgb(${data.bodyRed.value},${data.bodyGreen.value},${data.bodyBlue.value})`,
    eyeColour: `rgb(${data.eyeRed.value},${data.eyeGreen.value},${data.eyeBlue.value})`,
    bodySize: data.bodySize.value
  };
}
