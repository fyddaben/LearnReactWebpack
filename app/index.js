'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/iter.jsx');
var MyTitle = require('./components/ProTypes.jsx');
var LikeButton = require('./components/LikeButton.jsx');
var Input = require('./components/Form.jsx');
var LifeHello = require('./components/lifeCycle.jsx');
var UserGist = require('./components/ajax.jsx');
//ReactDOM.render(
//  <Hello name='daben'/>,
//  document.getElementById('app')
//);
//var data  = '12';
//ReactDOM.render(
//  <MyTitle title={data} />,
//  document.getElementById('app')
//)



//ReactDOM.render(
//  <LikeButton/>,
//  document.getElementById('app')
//)
//ReactDOM.render(
//  <LifeHello name='daben'/>,
//  document.getElementById('app')
//)

ReactDOM.render(
  <UserGist source='https://api.github.com/users/octocat/gists'/>,
  document.getElementById('app')
)
