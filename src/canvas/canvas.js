import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import MonsterContainer from "../monster/monster-container";

class Canvas extends Component {
    render() {
        return (
            <Stage width={this.props.width} height={this.props.height}>
              <Layer>
                  <MonsterContainer
                    key={this.props.monster.id}
                    x={this.props.width / 2}
                    y={this.props.height / 2}
                    genome={this.props.monster}
                  />
              </Layer>
            </Stage>
        )
    }
}

export default Canvas
