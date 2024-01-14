/*
	based on 1-hbnb.js
	controls API status
		-request to http://0.0.0.0:5001/api/v1/status/
		-if status OK, add class to DIV#api_status
		-if not, remove class to DIV#api_status
*/
$(document).ready(() => {
  const checkedAmenities = {};

  function updateAmenitiesList() {
    const amenitiesList = Object.values(checkedAmenities).toString().slice(0, 28);
    const displayText = amenitiesList.length >= 28 ? `${amenitiesList}...` : amenitiesList || '&nbsp;';
    $('#amnts_cheked').html(displayText);
  }

  $('input:checkbox').change(function () {
    const { id, name } = this.dataset;

    if ($(this).is(':checked')) {
      checkedAmenities[id] = name;
    } else {
      delete checkedAmenities[id];
    }

    updateAmenitiesList();
  });

  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    },
    error: function () {
      console.log('Error: Unable to fetch status');
    }
  });
});

