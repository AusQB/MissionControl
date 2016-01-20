$(document).ready(function() {

	// squareGrid();

	// $(window).resize(function() {

	// 	squareGrid();

	// });

	$('#donate-btn').click(function() {
		$('#paypal-frm').submit();
		return false;
	});

});


function squareGrid() {

	$('.square-grid').children('li').each(function() {
		$(this).css({
			'height': $(this).width()
		});
	});

}