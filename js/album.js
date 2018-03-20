const modal = document.querySelector('.modal');
const images = document.querySelectorAll('.photo');
const zoomImg = document.querySelector('#zoom');
const close = document.querySelector('.close');

function zoom(element) {
    modal.style.display = "block";
    zoomImg.src = element.src;
}

for (image of images) {
    image.addEventListener('click', function() {
        zoom(this);
    });
    image.addEventListener('touchstart', function() {
        zoom(this);
    });
}

close.addEventListener('click', function() {
    modal.style.display = "none";
})