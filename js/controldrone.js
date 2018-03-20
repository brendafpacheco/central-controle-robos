const locationButton = document.querySelector('#location');
const form = document.querySelector('form');

function fillForm(position) {
    //console.log(position);
    //console.log('ok!');
    form.altitude.value = position.coords.altitude;
    form.latitude.value = position.coords.latitude;
    form.longitude.value = position.coords.longitude;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fillForm);
    }
}

locationButton.addEventListener('click', getLocation);