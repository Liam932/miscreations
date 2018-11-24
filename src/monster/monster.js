import React from "react";
import Body from "./monster-body";
import Eyes from "./monster-eyes";
import { Group } from 'react-konva'

const Monster = ({ genome, x, y, onClick } = {}) => (
    <Group onClick={onClick}>
        <Body genome={genome} x={x} y={y} />
        <Eyes genome={genome} x={x} y={y} />
    </Group>
);

export default Monster;
