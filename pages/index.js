import Head from 'next/head';
import React from 'react';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>OpenAI explorations</title>
      </Head>

      <main className="main">
        <h3>OpenAI apps</h3>
        <a href="/assistant">AI Assistant</a>
        <a href="/gifts">Gifts Recommender</a>
      </main>
    </div>
  );
}