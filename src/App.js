import React from "react";
import { Stage, Layer } from "react-konva";
import data from "./monster/montser-data";
import Monster from "./monster/monster";

const PER_ROW = 5;

const App = () => (
  <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
      {data.map((data, index) => (
        <Monster
          key={data.colour}
          x={200 + (index % PER_ROW) * 200}
          y={150 + Math.floor(index / PER_ROW) * 200}
          genome={data}
        />
      ))}
    </Layer>
  </Stage>
);

export default App;
