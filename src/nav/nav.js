import React from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { initMonsters } from '../monster/monster-redux';
import { initPop, nextGen } from '../evolve/evolve-redux';
import { connect } from 'react-redux';

const Nav = ({ initMonsters, initPop, nextGen }) => (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Climate Shapes</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="plus" text="Generate" onClick={ initPop }/>
          <Button className="bp3-minimal" icon="fast-forward" text="Next Gen" onClick={ nextGen }/>
      </Navbar.Group>
  </Navbar>
);

export default connect(null, { initMonsters, initPop, nextGen })(Nav);
