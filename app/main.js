'use strict';

import React from 'react';
import ReactDOM from 'reactDOM';
import Hello from './component.jsx';
import Wrapper from './components/MyComponent.jsx';
main();
function main() {
  ReactDOM.render(<Wrapper />, document.getElementById('app'));
}
