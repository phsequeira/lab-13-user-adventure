const resetGame = document.getElementById('reset-game');
const user = localStorage.getItem('USER');
const userImput = JSON.parse(user);
const defaultEmptyGame = [];
function clearGame() {
    const stringydefaultGame = JSON.stringify(defaultEmptyGame);
    
    localStorage.setItem('USER', stringydefaultGame);
}


let scores = [
    { name: userImput.name, skater: userImput.skater, score: userImput.score, landed: userImput.result },
    { name: 'Madie', skater: 'Tony Hawk', score:  300, landed: 3 },
    { name: 'Hunter', skater: 'Darth Maul', score: 500, landed: 3 },
    { name: 'Zach', skater: 'Spider-Man', score: 900, landed: 3 },
    { name: 'Jordy', skater: 'Officer Dick', score: 200, landed: 2 },
];

function updateLeaderboardView() {
    let leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '';

    scores.sort(function(a, b){ return b.score - a.score; });
    let elements = []; // we'll need created elements to update colors later on
    // create elements for each player
    for (let i = 0; i < scores.length; i++) {
        let name = document.createElement('div');
        let skater = document.createElement('div');
        let landed = document.createElement('div');
        let score = document.createElement('div');
        name.classList.add('name');
        skater.classList.add('skater');
        landed.classList.add('landed');
        score.classList.add('score');
        name.innerText = 'Name: ' + scores[i].name;
        skater.innerText = 'Skater: ' + scores[i].skater;
        landed.innerText = 'Landed: ' + scores[i].landed;
        score.innerText = 'Score: ' + scores[i].score;
        

        let scoreRow = document.createElement('div');
        scoreRow.classList.add('row');
        scoreRow.appendChild(name);
        scoreRow.appendChild(skater);
        scoreRow.appendChild(landed);
        scoreRow.appendChild(score);
        leaderboard.appendChild(scoreRow);

        elements.push(scoreRow);

    }

    let colors = ['gold', 'silver', '#cd7f32'];
    for (let i = 0; i < 3; i++) {
        elements[i].style.color = colors[i];
    }
}

updateLeaderboardView();

resetGame.addEventListener('click', () => {
    window.location = '../index.html';
    clearGame();
});