
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.sidebar').toggleClass('active');
		$('body').toggleClass('lock');
	});
});