import React from "react";
import Body from "./monster-body";
import Eyes from "./monster-eyes";
import { Group, Text } from 'react-konva'

const Monster = ({ genome, x, y, selectMonster, isSelected, recalculateFitness, fitness} = {}) => (
    <Group onClick={() => {
        selectMonster(genome.id);
        recalculateFitness();
    }}>
        <Body genome={genome} x={x} y={y} />
        <Eyes genome={genome} x={x} y={y} />
        <Text text={isSelected ? 'Selected': ''} x={x - 25} y={y + 85}/>
        <Text text={fitness} x={x - 25} y={y + 105}/>
    </Group>
);

export default Monster;
