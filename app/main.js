'use strict';

import React from 'react';
import ReactDOM from 'reactDOM';
import Hello from './component.jsx';
import Wrapper from './components/MyComponent.jsx';
var InputState = require('./components/input.jsx');
main();
var cc = require('./test');
console.log(cc.bb);
function main() {
  //ReactDOM.render(<Wrapper />, document.getElementById('app'));
  ReactDOM.render(<InputState />, document.getElementById('app'));
}
//main();
//function main() {
//  ReactDOM.render(<Wrapper />, document.getElementById('app'));
//}


//var names = ['Alice', 'Emily', 'Kate'];
//ReactDOM.render(
//  <div>
//    {
//      names.map(function() {
//        return <div>Hello, {name}!</div>
//      })
//    }
//  </div>,
//  document.getElementById('app')
//);

