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

	$("submit-join-form-main-page").click(function () {
	    if ("errors are present") {
	        $(".joinIn-box-bottom .form-labels label").css("line-height","4.2");
	        return false;
	    } else
	        return true;
	});


});

