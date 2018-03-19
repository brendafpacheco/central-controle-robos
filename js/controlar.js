const goToArm = document.querySelector('#gotoarm');
const goToDrone = document.querySelector('#gotodrone');
const goToCar = document.querySelector('#gotocar');

goToArm.addEventListener('click', function() {
    window.location.href = 'controlar_braco.html';
});
goToDrone.addEventListener('click', function() {
    window.location.href = 'controlar_drone.html';
});
goToCar.addEventListener('click', function() {
    window.location.href = 'controlar_carro.html';
});