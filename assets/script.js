const modal = document.querySelector('.js-toPositiveMessage');
const close = document.querySelector('.js-close');
const close2 = document.querySelector('.js-close2');

function openTheTab(){
    modal.classList.add('open');
}

function closeTheTab(){
    modal.classList.remove('open');
}

function runner(){
    setTimeout(openTheTab, 2000);
}

close.addEventListener('click', closeTheTab);
close2.addEventListener('click', closeTheTab);
runner();