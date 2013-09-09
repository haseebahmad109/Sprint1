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

	$("#submit-join-form-main-page").click(function () {
	    if ($("#firstName").val() == "") {
	        $("#error-global").removeClass("hidden");
	        $("#error-global div p").html("<b>Please enter first name</b>");
	        return false;
	    }
	    else
	        return true;
	});


});

