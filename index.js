import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import BookRow from './books'

var div = React.DOM.div(null, 'Hello World!');

var parent = React.createElement('div', null, <BookRow />);

ReactDOM.render(
    parent,
    document.getElementById('container')
);
