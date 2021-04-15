// 

function isInViewport(el) {
    const rect = el.getBoundingClientRect(); 
    const top = rect.top;
    const bottom = rect.bottom - document.documentElement.clientHeight;
    const height = document.documentElement.clientHeight;
    const moveAfter = ((top * 100) / height) * 3;
    const moveBefore = (((Math.abs(bottom) * 100) / height) * 3);
    document.getElementsByClassName('after')[0].style.transform = "translateY(" + moveAfter + "px)";
}

const box = document.querySelector('.box');

document.addEventListener('scroll', function () {
    const messageText = isInViewport(box) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

}, {
    passive: true
});

function isInViewportA(el) {
    const rect = el.getBoundingClientRect(); 
    const top = rect.top;
    const bottom = rect.bottom - document.documentElement.clientHeight;
    const height = document.documentElement.clientHeight;
    const moveAfter = ((top * 100) / height) * 3;
    const moveBefore = (((Math.abs(bottom) * 100) / height) * 3);
    document.getElementsByClassName('before')[0].style.transform = "translateY(" + moveAfter + "px)";
}

const box1 = document.querySelector('.box1');

document.addEventListener('scroll', function () {
    const messageText = isInViewportA(box1) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

}, {
    passive: true
});

