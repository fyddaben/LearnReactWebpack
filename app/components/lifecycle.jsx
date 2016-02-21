var React = require('react');

var LifeHello = React.createClass({
  getInitialState: function() {
    return {
      opacity: 1.0
    };
  },
  componentDidMount: function() {

    console.log('dis', this.state.opacity);
    //this.timer = setInterval(function() {
    //  var opacity = this.state.opacity;
    //  opacity -= 0.05;
    //  if (opacity < 0.1) {
    //    opacity = 1.0;
    //  } else {
    //    console.log('-', opacity);
    //    this.setState({
    //      opacity: opacity
    //    });
    //  }
    //}.bind(this), 100)
  },
  componentWillMount: function() {
    console.log('will', this.state.opacity);
    //this.timer = setInterval(function() {
    //  var opacity = this.state.opacity;
    //  opacity += 0.05;
    //  if (opacity < 1) {
    //    console.log('+', opacity);
    //    this.setState({
    //      opacity: opacity
    //    });
    //  }

    //}.bind(this), 100)
  },
  render: function() {
    return (
      <div style={{
        opacity: this.state.opacity
      }}>
      Hello {this.props.name}
      </div>
    )
  }
});

module.exports = LifeHello;
