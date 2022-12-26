import React, { useState } from 'react';

const Messages = ({ messages, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className="messages">
      {messages.map(message => (
        <div className="message" key={message.id}>
          <div className="message-username">{message.username}:</div>
          <div className="message-text">{message.text}</div>
        </div>
      ))}
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type a message..."
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Messages;
