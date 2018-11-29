import { connect } from 'react-redux';
import PopulationGrid from './population-grid';
import { getMonsters } from '../monster/monster-redux';

const mapStateToProps = state => ({
    monsters: getMonsters(state)
})

export default connect(mapStateToProps)(PopulationGrid)
