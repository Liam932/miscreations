import React from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import { initMonsters } from '../monster/monster-redux';
import { connect } from 'react-redux';

const Nav = ({ initMonsters }) => (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Climate Shapes</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="plus" text="Generate" onClick={ initMonsters }/>
      </Navbar.Group>
  </Navbar>
);

export default connect(null, { initMonsters })(Nav);
