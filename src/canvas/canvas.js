import React from "react";
import { Stage, Layer } from "react-konva";
import MonsterContainer from "../monster/monster-container";

const PER_ROW = 5;

const Canvas = ({ monsters = [] }) => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {monsters.map((data, index) => (
              <MonsterContainer
                key={data.id}
                x={200 + (index % PER_ROW) * 200}
                y={150 + Math.floor(index / PER_ROW) * 200}
                genome={data}
              />
            ))}
          </Layer>
        </Stage>
    )
}

export default Canvas
