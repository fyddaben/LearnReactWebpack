var React = require('react');

var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    }
  },
  componentDidMount: function() {

    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        {this.state.username}'1e31s las0000t gistss is
        <a href={this.state.lastGistUrl}> here</a>
      </div>
    )
  }
});

module.exports = UserGist;
