var current_fs, next_fs, previous_fs;

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