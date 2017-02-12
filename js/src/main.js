// var requirejs = require(requirejs);

requirejs.config = {
	baseUrl: "../"
	paths: {
		"app": "../",
		"jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min"
		// "lodash": "//cdn.jsdelivr.net/lodash/4.17.4/lodash.min"
	}
	// shim: {
	// 	'jquery': {
	// 		exports: 'jQuery'
	// 	}
	// }
}
requirejs(['app/app'])
// require(
// 	// ['controller'],
// 	// function(controller) {
		
// 	// 	controller.divIt();

// 	// }
// 	['jquery'],
// 	function($) {
// 		console.log('yo')
// 	}
// )