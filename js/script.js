/* Author: 
Nehal Ahmad
*/

$(function() {
	$(document).on("focus", ".placeholder", function(e) {
		$(this).hide().prev().removeClass("hidden").focus().on("blur", function() {
			if ($(this).val() == "") $(this).addClass("hidden").next().show();
		});
	});
});