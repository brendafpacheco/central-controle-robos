const locationButton = document.querySelector('#location');
const form = document.querySelector('form');

function fillForm(position) {
    form.altitude = position.coords.altitude;
    form.latitude = position.coords.latitude;
    form.longitude = position.coords.longitude;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fillForm);
    }
}

locationButton.addEventListener('click', getLocation);