define(['jquery', 'model', 'view', 'controller'], function($, Model, View, Controller) {

  $(function() {

    var model = new Model(['Task 1', 'Task 2', 'Task 3', 'Task 4']);
    var view = new View(model);
    var controller = new Controller(model, view);

  });

});
