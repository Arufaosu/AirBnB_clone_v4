/*
    based on 4-hbnb.js
    controls API status
        -request to http://0.0.0.0:5001/api/v1/status/
        -if status OK, add class to DIV#api_status
        -if not, remove class to DIV#api_status
*/

document.addEventListener('DOMContentLoaded', function() {
    const checkedAmenities = {};
    const checkedStates = {};
    const checkedCities = {};

    function updateAmenitiesList() {
        const amenitiesList = Object.values(checkedAmenities).toString().slice(0, 28);
        const displayText = amenitiesList.length >= 28 ? `${amenitiesList}...` : amenitiesList || '&nbsp;';
        document.getElementById('amnts_cheked').innerHTML = displayText;
    }

    function updateLocations() {
        const checkedStatesList = Object.values(checkedStates);
        const checkedCitiesList = Object.values(checkedCities);

        const displayStates = checkedStatesList.length > 0 ? `States: ${checkedStatesList.join(', ')}` : '&nbsp;';
        const displayCities = checkedCitiesList.length
