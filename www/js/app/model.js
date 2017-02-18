define(function() {

  function Model(data, LSitem) {

    var self = this;
    self.data = data;


    self.addItem = function(item) {

      self.data.push(item);
      saveToLocalStorage();

      return self.data;
    }

    self.removeItem = function(index) {

      self.data.splice(index, 1);
      saveToLocalStorage();

      return self.data;
    }

    self.editItem = function(index, newValue) {

      self.data.splice(index, 1, newValue);
      saveToLocalStorage();

      return self.data;
    }

    // Establishing connection with LocalStorage
    function saveToLocalStorage() {
      localStorage.setItem(LSitem, JSON.stringify(self.data));
    }

  };

  return Model;

});