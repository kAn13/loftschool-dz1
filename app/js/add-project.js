var myModule = (function() {

  var _setupListeners = function() {
    console.log('Привет');
  }

  return {
    init: function() {
      _setupListeners();
    }
  };

})();

myModule.init();
