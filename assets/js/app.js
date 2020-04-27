// Completed or not
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
})

// Delete li
$("ul").on("click", "span", function(event) {
	$(this).parent().slideUp(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var newTodo = $(this).val();
		if (newTodo != "") {
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
		$(this).val("");
		}
	}
})

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();

})