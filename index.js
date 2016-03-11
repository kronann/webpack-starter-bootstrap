import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import BookRow from './books'
import LibraryComponent from './books'


var div = React.DOM.div(null, 'Hello World!');

var parent = React.createElement('div', null, <LibraryComponent />);

ReactDOM.render(
  parent, document.getElementById('container')
);
