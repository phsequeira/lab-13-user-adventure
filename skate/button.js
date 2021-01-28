import { findById } from '../utils.js';
import skateData from '../data.js';

const params = new URLSearchParams(window.location.search);
const skateId = params.get('id');
const skate = findById(skateData, skateId);
const form = document.querySelector('form');
export function button() {
    const button = document.createElement('button');

    button.textContent = 'Attempt Trick!';

    form.appendChild(button);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const selectionId = formData.get('choices');

        const choice = findById(skate.choices, selectionId);
        const user = JSON.parse(localStorage.getItem('USER'));

        user.result += choice.result;
        user.score += choice.score;
        // use the selectionId to set the property dynamically
        user.completed[skateId] = true;

        //     - Put the new stats in local storage
        localStorage.setItem('USER', JSON.stringify(user));
        window.location = '../map/index.html';
    });
}