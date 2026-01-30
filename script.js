// Game state variables
let gameState = 'idle'; // Possible states: idle, waiting, ready, tooSoon
let startTime = 0;
let timeoutId = null;

// DOM elements
const gameBox = document.getElementById('gameBox');
const gameText = document.getElementById('gameText');
const currentTimeDisplay = document.getElementById('currentTime');
const bestTimeDisplay = document.getElementById('bestTime');
const difficultySelect = document.getElementById('difficulty');

// Difficulty settings (in milliseconds)
const difficulties = {
    easy: { min: 1000, max: 5000 },
    medium: { min: 1000, max: 3000 },
    hard: { min: 500, max: 2000 }
};

// Initialize the game
function init() {
    // Load best time from localStorage
    loadBestTime();
    
    // Add click event listener to game box
    gameBox.addEventListener('click', handleGameBoxClick);
    
    // Prevent difficulty change during active game
    difficultySelect.addEventListener('change', () => {
        if (gameState !== 'idle') {
            resetGame();
        }
    });
}

// Load best time from localStorage
function loadBestTime() {
    const savedBestTime = localStorage.getItem('reflexArenaBestTime');
    if (savedBestTime) {
        bestTimeDisplay.textContent = `${savedBestTime}ms`;
    } else {
        bestTimeDisplay.textContent = '-';
    }
}

// Save best time to localStorage
function saveBestTime(time) {
    const currentBest = localStorage.getItem('reflexArenaBestTime');
    
    // If no best time exists or new time is better, save it
    if (!currentBest || time < parseInt(currentBest)) {
        localStorage.setItem('reflexArenaBestTime', time);
        bestTimeDisplay.textContent = `${time}ms`;
    }
}

// Handle click on game box
function handleGameBoxClick() {
    if (gameState === 'idle') {
        // Start the game
        startGame();
    } else if (gameState === 'waiting') {
        // Clicked too soon
        tooSoon();
    } else if (gameState === 'ready') {
        // Calculate reaction time
        calculateReactionTime();
    } else if (gameState === 'tooSoon') {
        // Reset after too soon message
        resetGame();
    }
}

// Start the game
function startGame() {
    gameState = 'waiting';
    
    // Change to red and show waiting message
    gameBox.className = 'game-box waiting';
    gameText.textContent = 'Wait for Green...';
    
    // Get random delay based on difficulty
    const difficulty = difficultySelect.value;
    const { min, max } = difficulties[difficulty];
    const delay = Math.random() * (max - min) + min;
    
    // Set timeout to change to green
    timeoutId = setTimeout(() => {
        showGreen();
    }, delay);
}

// Show green (ready to click)
function showGreen() {
    gameState = 'ready';
    startTime = Date.now();
    
    // Change to green and show click message
    gameBox.className = 'game-box ready';
    gameText.textContent = 'CLICK NOW!';
}

// Handle too soon click
function tooSoon() {
    gameState = 'tooSoon';
    
    // Clear the timeout so it doesn't turn green
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    
    // Show too soon message with orange background
    gameBox.className = 'game-box too-soon shake';
    gameText.textContent = 'Too Soon! Click to retry';
    
    // Remove shake animation after it completes
    setTimeout(() => {
        gameBox.classList.remove('shake');
    }, 500);
}

// Calculate and display reaction time
function calculateReactionTime() {
    const reactionTime = Date.now() - startTime;
    
    // Display current reaction time
    currentTimeDisplay.textContent = `${reactionTime}ms`;
    
    // Save if it's the best time
    saveBestTime(reactionTime);
    
    // Reset the game
    resetGame();
}

// Reset game to idle state
function resetGame() {
    gameState = 'idle';
    
    // Clear any pending timeout
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    
    // Reset to initial state
    gameBox.className = 'game-box';
    gameText.textContent = 'Click Start';
}

// Initialize the game when page loads
init();
