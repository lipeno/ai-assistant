# Virtual assistant based on OpenAI API

It includes:
- AI Chatbot (prompt-answering assistant)
- Gift ideas recommender

![chatbotApp](https://user-images.githubusercontent.com/2140610/209582183-215c1e45-e730-4959-bbf8-6b0d66970282.png)

## Tech stack
Made with [OpenAI API ](https://beta.openai.com/docs/quickstart), [Next.js](https://nextjs.org/) and [React](https://reactjs.org/), built on top of the OpenAI API Quickstart example.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd ai-recommender
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)!
