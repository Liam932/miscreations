import React from "react";
import CanvasContainer from './canvas/canvas-container';
import { combineReducers, createStore } from 'redux';
import { monsterReducer } from './monster/monster-redux';
import { Provider } from "react-redux";
import Nav from './nav/nav';

import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'

const rootReducer = combineReducers({monster: monsterReducer})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



const App = () => (
    <Provider store={store}>
        <>
            <Nav />
            <CanvasContainer />
        </>
    </Provider>
);

export default App;
