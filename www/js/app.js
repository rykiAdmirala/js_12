// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "paths": {
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
      "lodash": "https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min"
    }
});

// Load the main app module to start the app
requirejs(["main"]);
