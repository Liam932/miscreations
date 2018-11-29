import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import MonsterContainer from "../monster/monster-container";

const PER_ROW = 5;



class Canvas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowX: 0,
            windowY: 0
        }
        this.setCanvasDimensions = this.setCanvasDimensions.bind(this)
    }

    setCanvasDimensions() {
        this.setState({
            windowX: window.innerWidth,
            windowY: window.innerHeight
        })
    }

    componentWillMount() {
        this.setCanvasDimensions();
    }

    componentDidMount() {
        window.addEventListener('resize', this.setCanvasDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setCanvasDimensions);
    }

    render() {
        return (
            <Stage width={this.state.windowX} height={this.state.windowY}>
              <Layer>
                {this.props.monsters.map((data, index) => (
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
}

export default Canvas
