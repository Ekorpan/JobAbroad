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

		//select
		
	});
})(jQuery);
