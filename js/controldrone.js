const locationButton = document.querySelector('#location');
const form = document.querySelector('form');

function fillForm(position) {
    console.dir(position);
    console.log('ok!');
    console.dir(form.altitude);
    form.altitude.value = 42;
    form.latitude.value = position.coords.latitude;
    form.longitude.value = position.coords.longitude;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fillForm, function (error) {
            console.log(error);
        });
        console.log('ok!');
    }
}

locationButton.addEventListener('click', getLocation);