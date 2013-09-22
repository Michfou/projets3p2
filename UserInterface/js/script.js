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

});