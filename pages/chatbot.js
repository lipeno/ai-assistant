import React from 'react';
import { useState } from 'react';
import Messages from '../components/Messages';

export default function Chatbot () {
  const [messages, setMessages] = useState([
    { id: 1, username: 'Chatbot', text: 'Hi there! Im a chatbot so please ask me anything!' },
  ]);

  async function handleSendMessage (text) {
    const newMessageChatbot = await getCompletionData(text);
    const newMessageUser = {
      id: messages.length + 1,
      username: 'Me',
      text,
    };

    setMessages([...messages, newMessageUser]);
    setMessages([...messages, newMessageChatbot]);
  };

  async function getCompletionData (text) {
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
    const newMessageChatbot = {
      id: messages.length + 1,
      username: 'Chatbot',
      textResponse,
    };
    return newMessageChatbot;
  }

  return (
    <main className="main">
      <Messages messages={messages} onSendMessage={handleSendMessage} />
      <a href="/">Go back</a>
    </main>
  );
};