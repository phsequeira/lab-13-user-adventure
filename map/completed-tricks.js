import skateData from '../data.js';
const user = JSON.parse(localStorage.getItem('USER'));
let completedAllTricks = true;


export function completedTricks() {
    for (let skate of skateData) {
        if (!user.completed[skate.id]) {
            completedAllTricks = false;
        }
    }
    
    if (completedAllTricks) {
        window.location = '../results';
    }
}