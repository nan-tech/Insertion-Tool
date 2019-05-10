
function checkTags(tags) {
	var tagsChecked = new Array();
	tags.forEach(function(tag) {
		if(document.getElementById(tag).checked==true) {
			tagsChecked.push(tag);
		}
	});
	return tagsChecked;
}

var lat = 0;
var lng = 0;

function resourceEnter() {

	var nameEntered = (document.getElementById('name').value) ? (document.getElementById('name').value) : undefined;
	var addressEntered = (document.getElementById('address').value) ? (document.getElementById('address').value) : undefined;
	var cityEntered = (document.getElementById('city').value) ? (document.getElementById('city').value) : undefined;
	var stateEntered = (document.getElementById('state').value) ? (document.getElementById('state').value) : undefined;
	var zipEntered = (document.getElementById('zip').value) ? (document.getElementById('zip').value) : undefined;
	var numberEntered = (document.getElementById('number').value) ? (document.getElementById('number').value) : undefined;
	var emailEntered = (document.getElementById('email').value) ? (document.getElementById('email').value) : undefined;
	var websiteEntered = (document.getElementById('website').value) ? (document.getElementById('website').value) : undefined;
	var infoEntered = (document.getElementById('info').value) ? (document.getElementById('info').value) : undefined;

	var finalAddress = addressEntered + ", " + cityEntered + " " + stateEntered + " " + zipEntered;

	var tags = ["shelter", "food", "clothing", "medical", "crisis", "legal"];
	var tagsChecked = checkTags(tags);

	var locationEntered = {
		latitude: 0,
    	longitude: 0,
	    address: addressEntered,
	    city: cityEntered,
	    state_code: stateEntered,
	    zip_code: zipEntered
	}

	var info = {
		contact : {
			email: emailEntered,
			phone: numberEntered,
			website: websiteEntered
		},
		
		info: infoEntered
	}	
	
	info = JSON.parse(JSON.stringify(info));  // removes properties with "undefined" value

	axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
		params: {
			address: finalAddress,
			key: 'AIzaSyD6dp8MXiqbTKLhk5XfhnzczbxsJWtubuM'
		}
	})
	.then(function(response){

		
		lat = response.data.results[0].geometry.location.lat;
		lng = response.data.results[0].geometry.location.lng;

	})
	.then(function(){
		locationEntered.latitude = lat;
		locationEntered.longitude = lng;
	})
	.then(function(){
		var resourceDetails = new DLib.Resources.Resource(nameEntered, tagsChecked, locationEntered);
		resourceDetails.setDetails(info);
		DLib.Resources.submitResource(resourceDetails);
		alert("Information Submitted. Thank you!");
	})
	.catch(function(error){
		console.log(error);
	});	
}
