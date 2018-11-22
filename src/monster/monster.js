import React from "react";
import Body from "./monster-body";
import Eyes from "./monster-eyes";

const Monster = ({ genome, x, y } = {}) => (
    <>
    <Body genome={genome} x={x} y={y} />
    <Eyes genome={genome} x={x} y={y} />
    </>
);

export default Monster;
