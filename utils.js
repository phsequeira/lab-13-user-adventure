export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

export function header() {
    const user = JSON.parse(localStorage.getItem('USER'));
    const header = document.getElementById('header');
    header.textContent = `Tricks Landed: ${user.result}     Score: ${user.score}`;
}