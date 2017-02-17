define(function() {

  function Model(data) {

    let self = this;

    self.data = data;

    self.addItem = function(item) {

      self.data.push(item);
      return self.data;
    
    }

    self.removeItem = function(index) {

      self.data.splice(index, 1);
      return self.data;
    
    }

    self.editItem = function(index, newValue) {

      self.data.splice(index, 1, newValue);
      return self.data;
    
    }

  };

  return Model;

});