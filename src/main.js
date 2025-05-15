import './style.css'
import { initGeminiAPI } from './gemini-api.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>AI-Powered Typing Test</h1>
    
    <div class="settings" id="settings-panel">
      <div class="setting-group">
        <label for="difficulty">Difficulty:</label>
        <select id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium" selected>Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      
      <div class="setting-group">
        <label for="topic">Topic:</label>
        <select id="topic">
          <option value="general" selected>General</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="literature">Literature</option>
        </select>
      </div>
      
      <button id="generate-btn">Generate New Paragraph</button>
    </div>
    
    <div class="timer-container">
      <div class="timer" id="timer">00:00</div>
    </div>
    
    <div class="test-container">
      <div class="loading" id="loading-indicator" style="display: none;">
        <div class="spinner"></div>
        <p>Generating paragraph...</p>
      </div>
      <div class="test-text" id="test-text"></div>
      <textarea id="typing-input" placeholder="Start typing when ready..." disabled></textarea>
    </div>
    
    <div class="controls">
      <button id="start-btn">Start Test</button>
      <button id="reset-btn" disabled>Reset</button>
    </div>
    
    <div class="results" id="results-container" style="display: none;">
      <h2>Results</h2>
      <div class="result-grid">
        <div class="result-card">
          <div class="result-icon">⚡</div>
          <div class="result-value" id="wpm-display">0</div>
          <div class="result-label">WPM</div>
        </div>
        <div class="result-card">
          <div class="result-icon">🎯</div>
          <div class="result-value" id="accuracy-display">0%</</div>
          <div class="result-label">Accuracy</div>
        </div>
        <div class="result-card">
          <div class="result-icon">⏱️</div>
          <div class="result-value" id="time-display">0s</div>
          <div class="result-label">Time</div>
        </div>
      </div>
      <div id="feedback" class="feedback"></div>
      <button id="share-btn">Share Results</button>
    </div>
  </div>
`

// Fallback passages in case API fails
const fallbackPassages = [
  "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet at least once.",
  "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
  "Typing speed is measured in words per minute, which is abbreviated as WPM.",
  "A good programmer is someone who always looks both ways before crossing a one-way street.",
  "The best way to predict the future is to invent it. Believe you can change the world and you're halfway there."
];

let timer;
let seconds = 0;
let isTestActive = false;
let startTime;
let endTime;
let currentPassage = '';
let isGeneratingParagraph = false;

// Initialize Gemini API with the new API key for gemini-1.5-flash
const geminiApi = initGeminiAPI('AIzaSyAONiBoc9W-hwqilnWeKY1uvvMWz5EQSiI');

// Wait for DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const typingInput = document.getElementById('typing-input');
  const testText = document.getElementById('test-text');
  const timerDisplay = document.getElementById('timer');
  const startButton = document.getElementById('start-btn');
  const resetButton = document.getElementById('reset-btn');
  const generateButton = document.getElementById('generate-btn');
  const resultsContainer = document.getElementById('results-container');
  const loadingIndicator = document.getElementById('loading-indicator');
  const difficultySelect = document.getElementById('difficulty');
  const topicSelect = document.getElementById('topic');
  const shareButton = document.getElementById('share-btn');

  // Generate a random passage from the fallback list
  function getRandomFallbackPassage() {
    const randomIndex = Math.floor(Math.random() * fallbackPassages.length);
    return fallbackPassages[randomIndex];
  }

  // Generate a paragraph using Gemini API
  async function generateParagraph() {
    if (isGeneratingParagraph) return;
    
    isGeneratingParagraph = true;
    testText.innerHTML = '';
    loadingIndicator.style.display = 'flex';
    
    try {
      const difficulty = difficultySelect.value;
      const topic = topicSelect.value;
      
      const paragraph = await geminiApi.generateParagraph(difficulty, topic);
      currentPassage = paragraph;
      
      // If test is not active, display the new paragraph
      if (!isTestActive) {
        displayPassage(paragraph);
      }
    } catch (error) {
      console.error('Error generating paragraph:', error);
      currentPassage = getRandomFallbackPassage();
      if (!isTestActive) {
        displayPassage(currentPassage);
      }
    } finally {
      loadingIndicator.style.display = 'none';
      isGeneratingParagraph = false;
    }
  }

  // Display the passage in the UI
  function displayPassage(passage) {
    testText.innerHTML = passage.split('').map(char => 
      `<span>${char}</span>`
    ).join('');
  }

  // Start the typing test
  async function startTest() {
    // If no passage has been generated yet, generate one
    if (!currentPassage) {
      await generateParagraph();
    }
    
    isTestActive = true;
    startTime = new Date().getTime();
    seconds = 0;
    
    // Reset UI
    resultsContainer.style.display = 'none';
    document.getElementById('feedback').textContent = '';
    
    // Enable/disable buttons and UI elements
    startButton.disabled = true;
    resetButton.disabled = false;
    typingInput.disabled = false;
    difficultySelect.disabled = true;
    topicSelect.disabled = true;
    generateButton.disabled = true;
    
    // Display the current passage
    displayPassage(currentPassage);
    
    // Clear input and focus
    typingInput.value = '';
    typingInput.focus();
    
    // Start timer
    timer = setInterval(updateTimer, 1000);
  }

  // Update the timer display
  function updateTimer() {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  // End the typing test
  async function endTest() {
    isTestActive = false;
    endTime = new Date().getTime();
    clearInterval(timer);
    
    // Calculate results
    const timeElapsed = (endTime - startTime) / 1000; // in seconds
    const typedText = typingInput.value.trim();
    const wpm = calculateWPM(typedText, timeElapsed);
    const accuracy = calculateAccuracy(currentPassage, typedText);
    
    // Display results
    document.getElementById('wpm-display').textContent = wpm;
    document.getElementById('accuracy-display').textContent = `${accuracy}%`;
    document.getElementById('time-display').textContent = `${Math.round(timeElapsed)}s`;
    resultsContainer.style.display = 'block';
    
    // Get feedback from Gemini API
    try {
      const feedback = await getTypingFeedback(wpm, accuracy, timeElapsed);
      document.getElementById('feedback').textContent = feedback;
    } catch (error) {
      console.error('Error getting feedback:', error);
      document.getElementById('feedback').textContent = 'Could not generate feedback at this time.';
    }
    
    // Reset buttons and UI elements
    resetButton.disabled = false;
    startButton.disabled = false;
    typingInput.disabled = true;
    difficultySelect.disabled = false;
    topicSelect.disabled = false;
    generateButton.disabled = false;
  }

  // Calculate words per minute
  function calculateWPM(typedText, timeElapsedInSeconds) {
    const words = typedText.split(/\s+/).filter(word => word.length > 0);
    const minutes = timeElapsedInSeconds / 60;
    return Math.round(words.length / minutes);
  }

  // Calculate accuracy percentage
  function calculateAccuracy(original, typed) {
    if (!typed) return 0;
    
    // Levenshtein distance algorithm for accuracy
    const originalWords = original.split(/\s+/);
    const typedWords = typed.split(/\s+/);
    
    let correctWords = 0;
    for (let i = 0; i < Math.min(originalWords.length, typedWords.length); i++) {
      if (originalWords[i] === typedWords[i]) {
        correctWords++;
      }
    }
    
    return Math.round((correctWords / originalWords.length) * 100);
  }

  // Get feedback from Gemini API
  async function getTypingFeedback(wpm, accuracy, timeElapsed) {
    return await geminiApi.generateFeedback(wpm, accuracy, timeElapsed);
  }

  // Reset the test
  function resetTest() {
    clearInterval(timer);
    seconds = 0;
    timerDisplay.textContent = '00:00';
    typingInput.value = '';
    testText.innerHTML = '';
    isTestActive = false;
    
    // Reset buttons and UI elements
    startButton.disabled = false;
    resetButton.disabled = true;
    typingInput.disabled = true;
    difficultySelect.disabled = false;
    topicSelect.disabled = false;
    generateButton.disabled = false;
    resultsContainer.style.display = 'none';
  }

  // Share results
  function shareResults() {
    const wpm = document.getElementById('wpm-display').textContent;
    const accuracy = document.getElementById('accuracy-display').textContent;
    const timeElapsed = document.getElementById('time-display').textContent;
    
    const shareText = `I just completed a typing test with ${wpm} WPM, ${accuracy} accuracy in ${timeElapsed}! #TypingTest`;
    
    // Create a temporary input element
    const input = document.createElement('textarea');
    input.value = shareText;
    document.body.appendChild(input);
    
    // Copy the text
    input.select();
    document.execCommand('copy');
    
    // Remove the temporary element
    document.body.removeChild(input);
    
    // Show copied notification
    alert('Results copied to clipboard! You can now paste and share them.');
  }

  // Check if test is complete and handle character coloring
  typingInput.addEventListener('input', function() {
    if (!isTestActive) return;
    
    const typedText = typingInput.value;
    const textToType = currentPassage;
    
    // Update test text display to show progress
    const originalChars = testText.querySelectorAll('span');
    const typedChars = typedText.split('');
    
    for (let i = 0; i < originalChars.length; i++) {
      if (i < typedChars.length) {
        if (typedChars[i] === originalChars[i].innerText) {
          originalChars[i].classList.add('correct');
          originalChars[i].classList.remove('incorrect');
        } else {
          originalChars[i].classList.add('incorrect');
          originalChars[i].classList.remove('correct');
        }
      } else {
        originalChars[i].classList.remove('correct', 'incorrect');
      }
    }
    
    // End test if user typed the complete passage
    if (typedText.length >= textToType.length) {
      endTest();
    }
  });

  // Event Listeners
  startButton.addEventListener('click', startTest);
  resetButton.addEventListener('click', resetTest);
  generateButton.addEventListener('click', generateParagraph);
  shareButton.addEventListener('click', shareResults);

  // Generate initial paragraph when page loads
  generateParagraph();
});
