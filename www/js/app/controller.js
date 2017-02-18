define(['jquery', 'model', 'view'], function($, Model, View) {

  return(function Controller(Model, View) {

    var self = this;
    var controls = View.controls;


    controls.form.on('submit', addItem);
    controls.listContainer.on('click', controls.removeBtn, removeItem);
    controls.listContainer.on('click', controls.editBtn, toggleFocusState);
    controls.listContainer.on('focusin', controls.listElText, saveInitValue);
    controls.listContainer.on('focusout', controls.listElText, editItem);


    function addItem(e) {
      e.preventDefault();

      var newItem = controls.input.val();
  
      if (newItem != '') {
        Model.addItem(newItem);
        View.renderList(Model.data);
        controls.input.val('');
      }
    }


    function removeItem() {
      var index = $(this).parents('li').data('index');

      Model.removeItem(index);
      View.renderList(Model.data);
    }


    function toggleFocusState() {
      var listEl =
        $(this)
        .closest(controls.listElNode)
        .find(controls.listElText);

      if (listEl.is(':focus')) {
        listEl.blur();
      } else {
        listEl.focus();
      }
      
    }


    // Storing initial value of item for further comparison
    function saveInitValue() {
      $(this).data('value', $(this).text());

      // Making item to lose focus on SHIFT+ENTER or ENTER
      $(this).on('keydown', function(e) {
        if ((e.which == 16 && e.which == 13) || e.which == 13) {
          e.preventDefault();
          $(this).blur();
        }
      });
    }


    function editItem() {
      var initValue = $(this).data('value');
      var currentValue = $(this).text();

      $(this).data('value', currentValue);

      if (currentValue === initValue) {
        // If value hasn't changed, do nothing
        return
      } else {
        // If changed, then save it

        var index = $(this).closest(controls.listElNode).data('index');

        Model.editItem(index, currentValue);
        View.renderList(Model.data);
      }
    }

    

  });

});