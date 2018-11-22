import React from 'react';
import { Circle } from "react-konva";

const MonsterEyes =({ genome, x, y } = {}) => (
    <>
      <Circle
        x={x}
        y={y - 20}
        radius={20}
        fill={'#fff'}
        stroke="black"
        strokeWidth={1}
      />

      <Circle
        x={x}
        y={y - 20}
        radius={10}
        fill={'black'}
        stroke="black"
        strokeWidth={1}
      />
  </>
);


export default MonsterEyes
