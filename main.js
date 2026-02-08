function openModal(id) {
    const myModal = new bootstrap.Modal(document.getElementById(id));
    myModal.show();
}

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('startMenu');

startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    startMenu.classList.toggle('active');
});

document.addEventListener('click', () => {
    startMenu.classList.remove('active');
});

const desktop = document.getElementById('desktop');
desktop.addEventListener('click', () => {
    startMenu.classList.remove('active');
});