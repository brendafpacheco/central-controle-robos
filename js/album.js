const modal = document.querySelector('.modal');
const images = document.querySelectorAll('.photo');
const zoomImg = document.querySelector('#zoom');
const close = document.querySelector('.close');

for (image of images) {
    image.addEventListener('click', function() {
        modal.style.display = "block";
        zoomImg.src = this.src;
    });
}

close.addEventListener('click', function() {
    modal.style.display = "none";
})