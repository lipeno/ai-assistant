import Head from 'next/head';
import React from 'react';
import { useState } from 'react';

export default function Assistant() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    setResult('');
    const response = await fetch('/api/generate-completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setResult(data.result.replaceAll('\n', '<br />'));
    setLoading(false);
  }

  return (
    <div>
      <Head>
        <title>AI Assistant</title>
      </Head>

      <main className="main">
        <h3>AI Assistant</h3>
        <form onSubmit={onSubmit}>      
          <label>Your message</label>
          <input
            type="text"
            name="hobbies"
            placeholder="Type your prompt... eg. Explain quantum computing in simple terms"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
        {loading && (
          <div> 
            <h3>Loading...</h3>
          </div>
        )}
        <div
          className="result"
          dangerouslySetInnerHTML={{ __html: result }}
        />
        <a href="/">Go back</a>
      </main>
    </div>
  );
}