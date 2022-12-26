import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import styles from './index.module.css';

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

      <main className={styles.main}>
        <h3>AI Assistant</h3>
        <form onSubmit={onSubmit}>      
          <label>Your message</label>
          <input
            type="text"
            name="hobbies"
            placeholder="Type your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          eg. Explain quantum computing in simple terms
          <input type="submit" value="Send" />
        </form>
        {loading && (
          <div> 
            <h3>Writing...</h3>
          </div>
        )}
        <div
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </main>
    </div>
  );
}