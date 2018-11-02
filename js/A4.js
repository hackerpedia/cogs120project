
/* Initializes Outer_continer size to 100% height & width of window */
$(document).ready(function() {
	$('.outer_container').css('height', $(window).height());
	$('.outer_container').css('width', $(window).width());
});

/* Resizes Outer_container dynamically based on window size*/
$(window).resize(function() {
	pageWidth = $(window).width();
	pageHeight = $(window).height();
	$('.outer_container').css('height', pageHeight);
	$('.outer_container').css('width', pageWidth);
});

function display() {

}

