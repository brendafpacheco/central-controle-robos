const goToRead = document.querySelector('#gotoread');
const goToControl = document.querySelector('#gotocontrol');

goToRead.addEventListener('click', function() {
    window.location.href = 'sobre.html';
});
goToControl.addEventListener('click', function() {
    window.location.href = 'controlar.html';
});