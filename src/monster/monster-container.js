import { connect } from 'react-redux';
import Monster from './monster';
import { selectMonster, isMonsterSelected } from './monster-redux';
import { recalculateFitness } from '../evolve/evolve-redux';

const mapStateToProps = (state, props) => ({
    isSelected: isMonsterSelected(state, props)
})

export default connect(mapStateToProps, { selectMonster, recalculateFitness })(Monster);
