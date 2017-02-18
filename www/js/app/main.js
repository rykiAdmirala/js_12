define(['jquery', 'model', 'view', 'controller'], function($, Model, View, Controller) {

  $(function() {

    var tasks = ['покрасить пол', 'застелить постель', 'вызвать экзорциста', 'посушить волосы'];

    if (localStorage.getItem('tasks')) {
      // If there is saved ToDo-List, then get it
      
      var data = JSON.parse(localStorage.getItem('tasks'));

    } else {
      // If not, then save it there

      var data = tasks;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Initialising new instance of MVC app
    var model = new Model(data, 'tasks');
    var view = new View(model);
    var controller = new Controller(model, view);

  });

});