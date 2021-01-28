import skateData from '../data.js'; 
const ul = document.querySelector('ul');

export function renderUl() {
    for (let skate of skateData) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = skate.title;
        a.href = `../skate/?id=${skate.id}`;
    
        li.append(a);
        ul.append(li);
    }
}