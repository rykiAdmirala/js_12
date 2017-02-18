define(['jquery', 'lodash', 'model'], function($, _, Model) {

  return(function View(Model) {
    
    var self = this;

    // Rendering initial ToDo-List
    self.init = function() {

      var wrapper = _.template($('#wrapper-template').html());
      $('body').append(wrapper);

      self.controls = {
        listContainer: $('.list'),
        form: $('.controls'),
        input: $('.controls__input'),
        listElNode: 'li',
        listElText: '.list__el_text',
        editBtn: '.list__el_edit',
        removeBtn: '.list__el_remove'
      }

      self.renderList(Model.data);

    }

    self.renderList = function(data) {
      var tmpl = _.template($('#list-template').html());
      var list = tmpl({data: data});

      self.controls.listContainer.html(list);
    }


    self.init();

  });

});