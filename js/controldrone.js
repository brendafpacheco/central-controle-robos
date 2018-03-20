const locationButton = document.querySelector('#location');
const form = document.querySelector('form');

function fillForm(position) {
    form.altitude.value = position.coords.altitude;
    form.latitude.value = position.coords.latitude;
    form.longitude.value = position.coords.longitude;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fillForm, function (error) {
            console.log(error);
        }, {
            timeout: 10000
        });
    }
}

locationButton.addEventListener('click', getLocation);