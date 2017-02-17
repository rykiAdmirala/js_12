define(['jquery', 'lodash', 'model'], function($, _, Model) {

  return(function View(Model) {
    
    let self = this;

    self.init = function() {

      let wrapper = _.template($('#wrapper-template').html());
      $('body').append(wrapper);

      self.controls = {
        listContainer: $('.list'),
        form: $('.controls'),
        input: $('.controls__input')
      }

      self.renderList(Model.data);

    }

    self.renderList = function(data) {

      let html = $('#list-template').html();
      let tmpl = _.template(html);
      let list = tmpl({data: data});

      self.controls.listContainer.html(list);

      self.controls.listElNode = 'li';
      self.controls.listElText = '.list__el_text';
      self.controls.editBtn = '.list__el_edit';
      self.controls.removeBtn = '.list__el_remove';

    }


    self.init();

  });

});