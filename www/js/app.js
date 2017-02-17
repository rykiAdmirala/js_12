requirejs.config({
    "paths": {
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
      "lodash": "https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min"
    }
});

requirejs(["main"]);
