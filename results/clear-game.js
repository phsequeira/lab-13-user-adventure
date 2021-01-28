const defaultEmptyGame = [];
export function clearGame() {
    const stringydefaultGame = JSON.stringify(defaultEmptyGame);
    
    localStorage.setItem('USER', stringydefaultGame);
}