// import functions and grab DOM elements
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const user = {
        name: formData.get('name'),
        skater: formData.get('skater'),
        result: 0,
        score: 0,
        completed: {},
    };

    const stringify = JSON.stringify(user);
    localStorage.setItem('USER', stringify);

    window.location = './map/index.html';
});
