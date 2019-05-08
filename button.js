
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

/*function geocode (addressEntered) {
	axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
		params: {
			address: addressEntered,
			key: 'AIzaSyD6dp8MXiqbTKLhk5XfhnzczbxsJWtubuM'
		}
	})
	.then(function(response){

		
		lat = response.data.results[0].geometry.location.lat;
		lng = response.data.results[0].geometry.location.lng;

	})
	.then(function(response){

	})
	.catch(function(error){
		console.log(error);
	});
}*/

function resourceEnter() {

	var nameEntered = document.getElementById('name').value;
	var addressEntered = document.getElementById('address').value;
	var cityEntered = document.getElementById('city').value;
	var stateEntered = document.getElementById('state').value;
	var zipEntered = document.getElementById('zip').value;
	var numberEntered = document.getElementById('number').value;
	var emailEntered = document.getElementById('email').value;
	var websiteEntered = document.getElementById('website').value;
	var infoEntered = document.getElementById('info').value;

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

	axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
		params: {
			address: addressEntered,
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
		alert("Information Submitted. Thank you!")
	})
	.catch(function(error){
		console.log(error);
	});	


		
}