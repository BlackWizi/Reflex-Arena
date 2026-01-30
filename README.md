# Reflex Arena

A fun and addictive web-based reaction time game that challenges you to click as fast as possible when the box turns green!

## Features

- **Reaction Time Testing**: Test your reflexes by clicking when the box turns green
- **Multiple Difficulty Levels**: 
  - Easy: 1-5 second wait time
  - Medium: 1-3 second wait time
  - Hard: 0.5-2 second wait time
- **Best Time Tracking**: Your best reaction time is saved locally using localStorage
- **Too Soon Detection**: Prevents cheating by detecting early clicks
- **Modern UI Design**: Beautiful gradient background with smooth animations
- **Hover Effects**: Interactive button animations on hover
- **Shake Animation**: Visual feedback when you click too soon
- **Mobile Responsive**: Works perfectly on all screen sizes
- **Clean Code**: Well-commented JavaScript for easy understanding

## How to Play

1. Select your preferred difficulty level
2. Click the white box to start the game
3. The box will turn **RED** with the message "Wait for Green..."
4. Wait patiently for the box to turn **GREEN**
5. Click as fast as you can when it turns green!
6. Your reaction time will be displayed
7. Try to beat your best time!

**Important**: If you click before the box turns green, you'll see "Too Soon!" and need to retry.

## Setup Instructions

### Option 1: Direct Open
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Start playing!

### Option 2: Local Server
```bash
# If you have Python installed
python -m http.server 8000

# Or with Node.js
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Files Structure

```
Reflex Arena/
├── index.html    # Main HTML structure
├── style.css     # Styling and animations
├── script.js     # Game logic and functionality
└── README.md     # This file
```

## Technical Details

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with flexbox, animations, and media queries
- **Vanilla JavaScript**: No dependencies or frameworks required
- **localStorage**: Persistent best time storage across sessions

## Browser Compatibility

Works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Screenshots

<!-- Add screenshots here -->
*Screenshot 1: Initial start screen*

*Screenshot 2: Red waiting state*

*Screenshot 3: Green click state*

*Screenshot 4: Results display*

## Future Enhancements

Possible features for future versions:
- Sound effects
- Leaderboard system
- Average time calculation
- Practice mode
- Dark/light theme toggle
- Multiple rounds mode

## License

This project is open source and available for personal and educational use.

## Credits

Created as a beginner-friendly project to learn HTML, CSS, and JavaScript fundamentals.

---

**Ready to test your reflexes? Open the game and start playing!** ⚡
