define(['jquery', 'lodash', 'model'], function($, _, model) {

  return(function View() {
    
    let self = this;

    self.init = function() {

      let wrapper = _.template($('#wrapper-template').html());
      $('body').append(wrapper);

      self.controls = {
        listContainer: $('.list'),
        form: $('.controls'),
        input: $('.controls__input')
      }

      self.renderList(model.data)

    }

    self.renderList = function(data) {

      let tmpl = _.template($('#list-template').html())
      let list = tmpl({data});

      self.controls.listContainer.append(list);

      self.controls.listElNode = 'li';
      self.controls.editBtn = $('.list__el_edit');
      self.controls.removeBtn = $('.list__el_remove');
      self.controls.listElText = $('.list__el_text');

    }


    self.init();

  });

});