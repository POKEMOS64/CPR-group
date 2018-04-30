$(function(){
  if($(window).width() < 960) {
    $('.hide-on-med-and-down').addClass("sidenav");
    $('.hide-on-med-and-down').removeClass("right hide-on-med-and-down");
    $('.sidenav-close').css('display','block');
    $('.sidenav').sidenav();

  } else {
    // change functionality for larger screens
  }
});

$(function(){
	$('.catalog__group').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
});





	function initMap() {
		var myLatLng = {lat: 55.859102, lng: 37.474239};
	
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 17,
			center: myLatLng
		});
	
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'ЖКХ'
		});
	}


