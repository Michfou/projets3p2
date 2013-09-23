$(function() {

	var leftNavHoverHandlerIn = function(event) {
		$(this).next().css("visibility", "visible");
		$(this).next().css("transition", "margin-left 1s");
		$(this).next().css("margin-left", "0px");
	};

	var leftNavHoverHandlerOut = function() {
		$(this).next().css("margin-left", "30px");
		$(this).next().css("visibility", "hidden");
	};

	$(".left-nav-link").hover(leftNavHoverHandlerIn, leftNavHoverHandlerOut);

	$(".left-nav-link").click(function() {

		/*var value = $(".content-container").css("left");
		$(".content-container").css("left", "170px");

		for (var i = 0; i < 100; i += 10) {
			value = parseInt(value) + parseInt(i);
			$(".content-container").css("right", "-" + value + "px");
			$(".content-container").css("left", value + "px");
		};*/

		$(".alarm-system-content").css("display","none");//effect("fade", {mode : "hide"}, 500);
		
		$(".camera-content").effect("slide", {direction: "left"}, 500);
		$(".camera-content").css("display", "inline-block");

	});

});