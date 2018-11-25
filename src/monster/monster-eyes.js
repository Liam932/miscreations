import React from 'react';
import { Circle } from "react-konva";

const OUTER_RATIO = 20 / 70;
const INNER_RATIO = 10 / 70;

const MonsterEyes = ({ genome, x, y, blink } = {}) => (
    <>
      <Circle
        x={x}
        y={y - 20}
        radius={genome.bodySize * OUTER_RATIO}
        fill={'#fff'}
        stroke="black"
        strokeWidth={4}
      />

      <Circle
        x={x}
        y={y - 20}
        radius={genome.bodySize * INNER_RATIO}
        fill={genome.eyeColour}
        stroke="black"
        strokeWidth={1}
      />
  </>
);


export default MonsterEyes
