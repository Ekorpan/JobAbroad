'use strict';

(function($){
	$(document).ready(function() {
		//select
		$('.filter-option').text('Any type');
		//country

		$(function() {
			var country = [
			"Berlin",
			"Warszawa",
			"Brno",
			"Tallin",
			"Paris",
			"Kiev",
			"Milan",
			"Viena",
			"Gamburg",
			];
			$("#country").autocomplete({
				source: country
			});
		});

		//mobile-menu
		$('.mobile-menu').click(function() {
			$(this).toggleClass('mobile-menu--active');
			$('body').toggleClass('is-menu-shown');
		});


		//required error

		$('.searching').click(function() {
			searchPerson();
		});

		function searchPerson() {
			var newPerson = {};

			removeErrors();

			if (newPerson.country == '' || newPerson.arrive == '') {
				if(newPerson.country == '') showError('country');
				if(newPerson.arrive == '') showError('arrive');
			}


		};

		function showError(property) {

			var span = `<span class="error">This field is required.</span>`
			$(`.field[name="${property}"]`).parents('.row')
			.addClass('error-row')
			.append(span);
		};

		function removeErrors() {
			$('.error-row').removeClass('error-row');
			$('.error').remove();
		};

		$( "#depart, #arrive" ).datepicker();

		/*$( "#format" ).on( "change", function() {
			$( "#datepicker" ).datepicker( "option", "dateFormat", $( this ).val() );
		});*/
		
	});

	$('.yearselect').yearselect({
		start: 1970,
		end: 2001,
		step: 1,
		displayAsValue: true
	});

	$( ".filtres__button" ).click(function(){ 
	    $( ".search-extend" ).slideToggle();
	    $( ".job-search, .travellers" ).toggle(); 
	  });



})(jQuery);


function initMap() {
	var coords, map, marker, content, info, styles;

	content = '<h1 class="title">I\'ll be back</h1>';

	coords = {lat: 50.460135, lng:   30.640238};

	map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 14, 
			center: coords,
			styles: styles
		}
		);
	info = new google.maps.InfoWindow({
		content: content
	});
	marker = new google.maps.Marker({
		position: coords, 
		map: map,
		icon: 'images/marker.png',
		draggable:true
	});

	marker.addListener('click', function() {
		info.open(map, marker);
	});

}
