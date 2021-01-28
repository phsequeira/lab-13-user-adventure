const user = localStorage.getItem('USER');
const userImput = JSON.parse(user);

let scores = [
    { name: userImput.name, skater: userImput.skater, score: userImput.score, landed: userImput.result },
    { name: 'Madie', skater: 'Tony Hawk', score:  300, landed: 3 },
    { name: 'Hunter', skater: 'Darth Maul', score: 500, landed: 3 },
    { name: 'Zach', skater: 'Spider-Man', score: 900, landed: 3 },
    { name: 'Jordy', skater: 'Officer Dick', score: 200, landed: 2 },
];

export function updateLeaderboardView() {
    let leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '';

    scores.sort(function(a, b){ return b.score - a.score; });
    let elements = []; 
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