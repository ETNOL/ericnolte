var input = document.getElementById('searchTextField');
var options = {
  componentRestrictions: {country: 'us'}
  };
autocomplete = new google.maps.places.Autocomplete(input, options);
