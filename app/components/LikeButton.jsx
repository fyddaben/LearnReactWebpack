var React = require('react');

var LikeButton = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({
            liked: ! this.state.liked
        });
    },
    render: function() {
        var text = this.state.liked ? 'liked': 'have\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle;
            </p>
        );
    }
})

module.exports = LikeButton;
