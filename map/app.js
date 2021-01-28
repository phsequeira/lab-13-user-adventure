import skateData from '../data.js';
const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

let completedAllTricks = true;

for (let skate of skateData) {
    if (!user.completed[skate.id]) {
        completedAllTricks = false;
    }
}
    
if (completedAllTricks) {
    window.location = '../results';
}

for (let skate of skateData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = skate.title;
    a.href = `../skate/?id=${skate.id}`;

    li.append(a);
    ul.append(li);
}