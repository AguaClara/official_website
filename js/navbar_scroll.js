$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('.navbar').addClass('changenav');
    }
    else {
    $('.navbar').removeClass('changenav');
    }
  });
});
