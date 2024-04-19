const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const container = document.getElementById('content-box')

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        container.classList.add('z-index');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        container.classList.remove('z-index');
    })
}