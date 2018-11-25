import React from 'react';
import { RegularPolygon } from "react-konva";

const MonsterBody =({ genome, x, y } = {}) => (
  <RegularPolygon
    x={x}
    y={y}
    sides={genome.sides}
    radius={genome.bodySize}
    fill={genome.colour}
    stroke="black"
    strokeWidth={4}
  />
);


export default MonsterBody
