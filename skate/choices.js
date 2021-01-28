import skateData from '../data.js';
import { findById } from '../utils.js';

export function choices() {
    const h1 = document.querySelector('h1');
    const img = document.querySelector('img');
    const p = document.querySelector('p');
    const form = document.querySelector('form');

    const params = new URLSearchParams(window.location.search);
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
}