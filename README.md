# AI-Powered Typing Test

A modern, interactive typing test application that uses Google's Gemini AI to generate custom typing challenges and provide personalized feedback on your typing performance.

🚀 **Live Demo:** [https://vitetyping.vercel.app](https://vitetyping.vercel.app)

## Features

- **AI-Generated Content**: Utilizes Google's Gemini 1.5 Flash model to create unique typing challenges
- **Customizable Experience**: Select difficulty levels and topics to personalize your typing test
- **Real-time Feedback**: Get instant statistics on your typing speed (WPM), accuracy, and performance
- **Performance Analytics**: Receive AI-generated feedback on your typing skills with tips for improvement
- **Modern UI**: Clean, responsive interface with customizable themes

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Build Tool**: Vite
- **AI Integration**: Google Generative AI (@google/generative-ai)

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- Google AI API Key (for Gemini AI)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vitetyping
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your Google Gemini API key:
   - Create a `.env` file in the root directory
   - Add your API key: `VITE_GEMINI_API_KEY=your_api_key_here`

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Build for production:
   ```bash
   npm run build
   ```

3. Preview the production build:
   ```bash
   npm run preview
   ```

### Deployment

The project is deployed using Vercel. You can access the live version at [https://vitetyping.vercel.app](https://vitetyping.vercel.app).

#### Deploying with Vercel

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your application:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

5. Set up environment variables in the Vercel dashboard:
   - Navigate to your project settings
   - Add `VITE_GEMINI_API_KEY` environment variable with your Google Gemini API key

## Usage

1. Select your desired difficulty level and topic
2. Click "Generate New Paragraph" to create a custom typing challenge
3. Start typing when ready - the timer will begin automatically
4. Complete the paragraph to see your results and personalized feedback
5. Try different settings to improve your typing skills across various content types

## License

[MIT](LICENSE)

## Acknowledgments

- Google Generative AI for the Gemini API
- Vite.js for the build tooling
