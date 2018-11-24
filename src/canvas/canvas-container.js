import { connect } from 'react-redux';
import Canvas from './canvas';
import { getMonsters } from '../monster/monster-redux';

const mapStateToProps = state => ({
    monsters: getMonsters(state)
})

export default connect(mapStateToProps)(Canvas)
