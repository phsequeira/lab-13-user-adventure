import { findById } from '../utils.js';
import skateData from '../data.js';

const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const p = document.querySelector('p');
const form = document.querySelector('form');

const params = new URLSearchParams(window.location.search);
// get the value of the id key in the URL quesry string
const skateId = params.get('id');
const skate = findById(skateData, skateId);

h1.textContent = skate.title;

img.src = `../${skate.image}`;
p.textContent = skate.description;

for (let choice of skate.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);
    form.append(label);
}
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