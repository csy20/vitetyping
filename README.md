# AI-Powered Typing Test

A modern, interactive typing test application that uses Google's Gemini AI to generate custom typing challenges and provide personalized feedback on your typing performance.

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
