import React from "react";
import PopulationGridContainer from './population/population-grid-container';
import { Provider } from "react-redux";
import Nav from './nav/nav';
import store from './redux-store';

import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'


const App = () => (
    <Provider store={store}>
        <>
            <Nav />
            <PopulationGridContainer />
        </>
    </Provider>
);

export default App;
