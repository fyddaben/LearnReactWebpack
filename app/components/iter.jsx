
'use strict';
var React = require('react');

var names = ['Alices', 'Emily', 'Kate'];
//class Hello extends React.Component {
//  render() {
//    return <div>
//            {
//              names.map(function(name) {
//                return <div>dabens, {name}!</div>
//              })
//            }
//            </div>
//  }
//}
var arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>
]
class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>
    }
}
module.exports = Hello;
