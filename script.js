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
function validateForm() {
	var name =  document.getElementById('name').value;
	if (name == "") {
		document.querySelector('.status').innerHTML = "Name cannot be empty";
		return false;
	}
	var email =  document.getElementById('email').value;
	if (email == "") {
		document.querySelector('.status').innerHTML = "Email cannot be empty";
		return false;
	} else {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!re.test(email)){
			document.querySelector('.status').innerHTML = "Email format invalid";
			return false;
		}
	}
	var subject =  document.getElementById('subject').value;
	if (subject == "") {
		document.querySelector('.status').innerHTML = "Subject cannot be empty";
		return false;
	}
	var message =  document.getElementById('message').value;
	if (message == "") {
		document.querySelector('.status').innerHTML = "Message cannot be empty";
		return false;
	}
	document.querySelector('.status').innerHTML = "Sending...";
  }
















