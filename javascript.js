var current_fs, next_fs, previous_fs;

$(".reset").click(function(){
	current_fs = $(this).parent();
	next_fs = $(this).parent().prev().prev().prev();

	next_fs.show();

	current_fs.hide();

	document.getElementById('name').value = "";
	document.getElementById('address').value = "";
	document.getElementById('city').value = "";
	document.getElementById('state').value = "";
	document.getElementById('zip').value = "";
	document.getElementById('number').value = "";
	document.getElementById('email').value = "";
	document.getElementById('website').value = "";
	document.getElementById('info').value = "";

	var tags = ["shelter", "food", "clothing", "medical", "crisis", "legal"];

	tags.forEach(function(tag) {
		document.getElementById(tag).checked=false; 	
	});


})

$(".next").click(function(){
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	next_fs.show();

	current_fs.hide();
})

$(".previous").click(function(){
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();

	previous_fs.show();

	current_fs.hide();
})