$(document).ready(function(){
	$("menu a").mousedown(function(){
		$(this).css("background-color" , "black");
	});

	$("menu a").mouseleave(function(){
		$("menu a").css("background-color" , "");
	});

	$("menu a").mouseup(function () {
	    $("menu a").css("background-color", "");
	});


});

