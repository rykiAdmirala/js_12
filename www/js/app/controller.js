define(['jquery', 'model', 'view'], function($, model, view) {

  return(function() {

    let self = this;
    let controls = view.controls;

    function addItem() {
      let newItem = controls.input.val();
      
      model.addItem(newItem);
      view.renderList(model.data);
      controls.input.val('');
    }

    controls.form.on('submit', addItem);

    function removeItem() {
      let index = $(this).parents('li').data('index');

      model.removeItem(index);
      view.renderList(model.data);
    }

    controls.removeBtn.on('click', removeItem);

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

    controls.editBtn.on('click', toggleFocusState);

    controls.listElText.on('focusin', saveInitValue);
    controls.listElText.on('focusout', editItem)

    function editItem() {
      let initValue = $(this).data('value');

      let currentValue = $(this).data('value', $(this).text());

      if (currentValue === initValue) {
        return
      } else {
        let index = $(this).closest(controls.listElNode).data('index');

        model.removeItem(index);
        view.renderList(model.data);
      }

    }

  })

});