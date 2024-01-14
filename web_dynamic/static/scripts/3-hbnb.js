/*
    based on 3-hbnb.js
    controls API status
        -request to http://0.0.0.0:5001/api/v1/status/
        -if status OK, add class to DIV#api_status
        -if not, remove class to DIV#api_status
*/

document.addEventListener('DOMContentLoaded', function() {
    const checkedAmenities = {};

    function updateAmenitiesList() {
        const amenitiesList = Object.values(checkedAmenities).toString().slice(0, 28);
        const displayText = amenitiesList.length >= 28 ? `${amenitiesList}...` : amenitiesList || '&nbsp;';
        document.getElementById('amnts_cheked').innerHTML = displayText;
    }

    document.querySelectorAll('input:checkbox').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const { id, name } = this.dataset;

            if (this.checked) {
                checkedAmenities[id] = name;
            } else {
                delete checkedAmenities[id];
            }

            updateAmenitiesList();
        });
    });

    fetch('http://0.0.0.0:5001/api/v1/status/')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                document.getElementById('api_status').classList.add('available');
            } else {
                document.getElementById('api_status').classList.remove('available');
            }
        })
        .catch(error => {
            console.log('Error: Unable to fetch status');
        });
});
