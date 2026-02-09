function openModal(id) {
    const myModal = new bootstrap.Modal(document.getElementById(id));
    myModal.show();
}

function updateTimeAndDate() {
    const now = new Date();
    const clock = document.getElementById('clock');
    if (clock) {
        clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });   
    }

    const date = document.getElementById('date');
    if (date) {
        date.textContent = now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
    }
}
updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);

const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementsByClassName('startMenu');

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

function openChrome() {
    const modal = document.getElementById('chrome-modal');
    modal.style.display = 'flex';
    switchTab('about');
}

function closeChrome() {
    document.getElementById('chrome-modal').style.display = 'none';
}

function switchTab(tabName) {
    const tabs = document.querySelectorAll('.chrome-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    let tabIndex = 0;
    if (tabName === 'projects') tabIndex = 1;
    if (tabName === 'contact') tabIndex = 2;
    
    tabs[tabIndex].classList.add('active');

    document.getElementById('tab-' + tabName).classList.add('active');

    const addressBar = document.getElementById('address-bar');
    addressBar.value = `localhost:3000/${tabName}.html`;
}