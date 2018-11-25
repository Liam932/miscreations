export function createMonsterData(data) {
  return {
    id: data.id,
    sides: data.sides,
    colour: `rgb(${data.bodyRed},${data.bodyGreen},${data.bodyBlue})`,
    eyeColour: `rgb(${data.eyeRed},${data.eyeGreen},${data.eyeBlue})`,
    bodySize: data.bodySize
  };
}
