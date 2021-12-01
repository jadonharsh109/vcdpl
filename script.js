$(document).ready(function() {


	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		let body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}
	$('.gallery-list-item').click(function(){
		let value = $(this).attr('data-filter');
		if(value === 'all'){
			$('.filter').show(300);
		}
		else{
			$('.filter').not('.' + value).hide(300);
			$('.filter').filter('.' + value).show(300);
		}
	});
	
	$('.gallery-list-item').click(function() {
	$(this).addClass('active-item').siblings().removeClass('active-item');
	});
	
});

// Contact form

document.getElementById('status').innerHTML = "Sending...";
formData = {
'name'     : $('input[name=name]').val(),
'email'    : $('input[name=email]').val(),
'subject'  : $('input[name=subject]').val(),
'message'  : $('textarea[name=message]').val()
};


$.ajax({
url : "main.php",
type: "POST",
data : formData,
success: function(data, textStatus, jqXHR)
{

$('#status').text(data.message);
if (data.code) //If mail was sent successfully, reset the form.
$('#contact-form').closest('form').find("input[type=text], textarea").val("");
},
error: function (jqXHR, textStatus, errorThrown)
{
$('#status').text(jqXHR);
}
});
















