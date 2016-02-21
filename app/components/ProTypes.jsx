var React = require('react');

var MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return <h2> {this.props.title}</h2>
    }
});

module.exports = MyTitle;
