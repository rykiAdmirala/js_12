define(
	['model', 'jquery'],
	function(model, $) {
		var div = model.div

		div.addClass('hello-again');

		return {
			div: div
		}
	}
)