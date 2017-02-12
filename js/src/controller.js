define(
	['model', 'view', 'jquery'],
	function(model, view, $) {
		var div = view.div;
		div.append('body');

		return {
			divIt: function() {
				div.append('body');
			}
		}
	}
)