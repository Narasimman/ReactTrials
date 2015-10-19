/**
 * ChatNewMessage:
 *
 * CSS classes to place:
 * - ChatNewMessage
 * - ChatNewMessage-input
 */

import React from 'react';


export default React.createClass({
  displayName: 'ChatNewMessage',

  propTypes: {
    sendMessage: React.PropTypes.func.isRequired
  },

  onKeyUp: function(event) {
    event.preventDefault();
    if(event.keyCode === 13) {
      this.sendMessage(event.target.value);
    }

  },

  render: function() {
    return (
      <div className="ChatNewMessage">
        <input className="ChatNewMessage"
        onKeyUp={this.onKeyUp}
        placeholder="Type here" />
      </div>
    );
  }
});
