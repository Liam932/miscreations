import React, { PureComponent } from 'react';
import './population-grid.scss';
import PopulationGridItem from './population-grid-item';

class PopulationGrid extends PureComponent {
    render() {
        return (
            <div className='mis-population-grid'>
                {this.props.monsters.map(m =>
                    <PopulationGridItem key={m.id} monster={m} />
                )}
            </div>
        )
    }
}

export default PopulationGrid;
