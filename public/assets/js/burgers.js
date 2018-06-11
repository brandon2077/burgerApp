// Wait to attach handlers until the DOM is loaded
$(function() {
	$(".change-meal").on("click", function(event) {
		var id = $(this).data("id");
		var newMeal = $(this).data("newmeal");

		var newMealState = {
			devoured: newMeal
		};

	// Send the PUT request
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: newMealState
		}).then(
			function() {
				console.log("changed meal to", newMeal);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	$(".create-form").on("submit", function(event) {
		
		event.preventDefault();

		var newBurger = {
			burger_name: $("#burg").val().trim()
		};

		// Send the POST request
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function() {
				console.log("created a new burger");

				location.reload();
			}
		);
	});

});
