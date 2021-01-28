import { updateLeaderboardView } from './leaderboard.js';
import { clearGame } from './clear-game.js';
const resetGame = document.getElementById('reset-game');



updateLeaderboardView();

resetGame.addEventListener('click', () => {
    window.location = '../index.html';
    clearGame();
});