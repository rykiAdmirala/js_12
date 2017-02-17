define(['jquery', 'model', 'view'], function($, Model, View) {

  return(function Controller(Model, View) {

    let self = this;
    let controls = View.controls;


    controls.form.on('submit', addItem);
    controls.listContainer.on('click', controls.removeBtn, removeItem);
    controls.listContainer.on('click', controls.editBtn, toggleFocusState);
    controls.listContainer.on('focusin', controls.listElText, saveInitValue);
    controls.listContainer.on('focusout', controls.listElText, editItem);


    function addItem(e) {
      e.preventDefault();

      let newItem = controls.input.val();
      
      Model.addItem(newItem);
      View.renderList(Model.data);
      controls.input.val('');
    }


    function removeItem() {
      let index = $(this).parents('li').data('index');

      Model.removeItem(index);
      View.renderList(Model.data);
    }


    function toggleFocusState() {
      let listEl =
        $(this)
        .closest(controls.listElNode)
        .find(controls.listElText);

      if (listEl.is(':focus')) {
        listEl.blur();
      } else {
        listEl.focus();
      }
      
    }

    function saveInitValue() {
      $(this).data('value', $(this).text());
    }


    function editItem() {
      let initValue = $(this).data('value');

      let currentValue = $(this).text();
      $(this).data('value', currentValue);

      if (currentValue === initValue) {
        return
      } else {
        let index = $(this).closest(controls.listElNode).data('index');

        Model.editItem(index, currentValue);
        View.renderList(Model.data);
      }
    }

    

  });

});