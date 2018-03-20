const form = document.querySelector('form');
let counter = 1;
form.addEventListener('submit', function() {
    if (counter != 5) {
        counter++;
    } else {
        window.location.href = 'controlar.html';
    }
})