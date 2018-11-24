import React from "react";
import { Stage, Layer } from "react-konva";
import Monster from "../monster/monster";

const PER_ROW = 5;

const Canvas = ({ monsters = [] }) => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {monsters.map((data, index) => (
              <Monster
                key={data.colour}
                x={200 + (index % PER_ROW) * 200}
                y={150 + Math.floor(index / PER_ROW) * 200}
                genome={data}
                onClick={() => console.log('clicked' + data.colour)}
              />
            ))}
          </Layer>
        </Stage>
    )
}

export default Canvas
