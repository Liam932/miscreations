import React, { PureComponent } from 'react';
import { Ellipse } from 'react-konva';
import { Spring } from 'react-spring'

const OUTER_RATIO = 20 / 35;
const INNER_RATIO = 10 / 35;

class MonsterEyes extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { reverse: false }
    }

    onRest = () => this.setState({ reverse: !this.state.reverse })

    render() {
        const { x, y, genome } = this.props;
        return (
        <Spring reset={true} reverse={this.state.reverse} from={{percentage: 1}} to={{percentage: 0}} onRest={this.onRest}>
            {props => {
                return (
                    <>
                      <Ellipse
                        x={x}
                        y={y - 20}
                        height={ genome.bodySize * OUTER_RATIO }
                        width= { genome.bodySize * OUTER_RATIO }
                        fill={'#fff'}
                        stroke="black"
                        strokeWidth={4}
                      />

                      <Ellipse
                        x={x}
                        y={y - 20}
                        height={ genome.bodySize * INNER_RATIO * props.percentage }
                        width= { genome.bodySize * INNER_RATIO }
                        fill={genome.eyeColour}
                        stroke="black"
                        strokeWidth={1}
                      />
                    </>
                )
            }}
      </Spring>
    )
    }
}


export default MonsterEyes
