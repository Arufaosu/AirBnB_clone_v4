/*
	only executed when DOM loaded
	uses jQuery
	listens for changes in each input checkbox tag
		-if checked, stores amenity ID in var
		-if unchecked, removed Amenity ID from var
		-updates H4 tag in div amenities with list of amenities
*/
$(document).ready(() => {
  const checkedAmenities = {};

  $('input:checkbox').change(function () {
    const { id, name } = this.dataset;

    if ($(this).is(':checked')) {
      checkedAmenities[id] = name;
    } else {
      delete checkedAmenities[id];
    }

    const amenitiesList = Object.values(checkedAmenities).toString().slice(0, 28);
    const displayText = amenitiesList.length >= 28 ? `${amenitiesList}...` : amenitiesList || '&nbsp;';

    $('#amnts_cheked').html(displayText);
  });
});
