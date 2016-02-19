'use strict';

import React from 'react';
import ReactDOM from 'reactDOM';
import Hello from './component.jsx';
import Wrapper from './components/MyComponent.jsx';
//main();
//function main() {
//  ReactDOM.render(<Wrapper />, document.getElementById('app'));
//}


var names = ['Alice', 'Emily', 'Kate'];
ReactDOM.render(
  <div>
    {
      names.map(function() {
        return <div>Hello, {name}!</div>
      })
    }
  </div>,
  document.getElementById('app')
);

