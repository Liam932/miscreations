import React, { Component } from 'react';
import './population-grid.scss';
import Canvas from '../canvas/canvas';

class PopulationGridItem extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
    }

    get width() {
        if(this.container.current) return this.container.current.clientWidth;
        return 200;
    }

    get height() {
        if(this.container.current) return this.container.current.clientHeight;
        return 200;
    }

    render() {
        return (
            <div className="mis-population-grid__item" ref={this.container}>
                <Canvas monster={this.props.monster} width={this.width} height={this.height}/>
            </div>
        )
    }
}

export default PopulationGridItem;
