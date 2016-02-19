
'use strict';
var React = require('react');

var names = ['Alices', 'Emily', 'Kate'];
class Hello extends React.Component {
  render() {
    return <div>
            {
              names.map(function(name) {
                return <div>dabens, {name}!</div>
              })
            }
            </div>
  }
}

module.exports = Hello;
