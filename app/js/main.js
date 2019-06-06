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

		//requred error
		/*function showError(property) {

			var span = `<span class="error">This field is required.</span>`
			$(`.field[name="${property}"]`).parents('.row')
			.addClass('error-row')
			.append(span);
		};

		function removeErrors() {
			$('.error-row').removeClass('error-row');
			$('.error').remove();
		};*/
		
	});

})(jQuery);

