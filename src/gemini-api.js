import { GoogleGenerativeAI } from '@google/generative-ai';

export function initGeminiAPI(apiKey) {
  // Initialize the Google Generative AI with the API key
  const genAI = new GoogleGenerativeAI(apiKey);
  
  // Using gemini-1.5-flash model as specified
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Function to generate feedback based on typing performance
  async function generateFeedback(wpm, accuracy, timeElapsed) {
    try {
      const prompt = `
        I just completed a typing test with the following results:
        - Words per minute (WPM): ${wpm}
        - Accuracy: ${accuracy}%
        - Total time: ${Math.round(timeElapsed)} seconds
        
        Please provide a brief assessment of my typing performance and a tip to improve.
        Keep your response under 150 characters.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating feedback with Gemini API:', error);
      return 'Error generating feedback. Check your API key and connection.';
    }
  }

  // Function to generate a random paragraph for typing test
  async function generateParagraph(difficulty = 'medium', topic = 'general') {
    try {
      const prompt = `
        Generate a paragraph for a typing test with the following criteria:
        - Difficulty level: ${difficulty} (vocabulary and sentence complexity)
        - Topic: ${topic}
        - Length: 1-3 sentences for 'easy', 3-4 sentences for 'medium', 4-6 sentences for 'hard'
        - Must be coherent and meaningful
        - Avoid extremely uncommon words, symbols or special characters
        - Make it interesting and educational
        
        Return just the paragraph text with no additional commentary, quotes, or formatting.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text().trim();
    } catch (error) {
      console.error('Error generating paragraph with Gemini API:', error);
      return "An error occurred while generating the paragraph. Using default paragraph instead.";
    }
  }

  return {
    generateFeedback,
    generateParagraph
  };
}