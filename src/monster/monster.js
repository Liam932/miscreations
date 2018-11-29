import React from "react";
import Body from "./monster-body";
import Eyes from "./monster-eyes";
import { Group, Text } from 'react-konva'

const Monster = ({ genome, x, y, selectMonster, isSelected, recalculateFitness, fitness} = {}) => (
    <Group opacity={isSelected ? 0.5 : 1}
    onClick={() => {
        selectMonster(genome.id);
        recalculateFitness();
    }}>
        <Body genome={genome} x={x} y={y} />
        <Eyes genome={genome} x={x} y={y} />
    </Group>
);

export default Monster;
