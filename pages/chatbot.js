import React from 'react';
import { useState } from 'react';
import Messages from '../components/Messages';

export default function Chatbot () {
  const [messages, setMessages] = useState([
    { id: 1, username: 'Chatbot', text: 'Hi there! Im a chatbot so please ask me anything!' },
  ]);

  async function handleSendMessage (text) {
    const prompt = text;
    const response = await fetch('/api/generate-completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const promptResponse = await response.json();
    const textResponse = await promptResponse.result.replaceAll('\n', '');

    const newMessageUser = {
      id: messages.length + 1,
      username: 'Me',
      text,
    };

    const newMessageChatbot = {
      id: messages.length + 2,
      username: 'Chatbot',
      text: textResponse,
    };

    setMessages([...messages, newMessageUser, newMessageChatbot]);
  };

  return (
    <main className="main">
      <Messages messages={messages} onSendMessage={handleSendMessage} />
      <a href="/">Go back</a>
    </main>
  );
};