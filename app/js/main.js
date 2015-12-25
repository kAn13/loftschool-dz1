var myModule = (function() {

  var init = function() {
    _setupListeners();
  };

  var _setupListeners = function() {
    $('.project').on('click', _showModal);
    $('#add-new-project').on('submit', _check);
    $('.feedback-form').on('click', _check);
  };

  var _showModal = function(e) {
    e.preventDefault();
    $('#modal-form-content').bPopup({
      speed: 650,
      opacity: 0.3,
      onClose: function() {
        if($('qtip')) {
          $('.qtip').hide();
        }
      }
      // position: [500, 100],
      // positionStyle: 'fixed'
    });
  };

   var _check = function(e) {
    e.preventDefault();
    var elem = $('.valid');
    var fakeInput = $('.fake-input');
    var $this = $(this);

    if (!$this.val()) {
      elem.addClass('error');
      createTooltip( elem, elem.data('tooltipText'), elem.data('my'), elem.data('at') );
    } else {
      elem.removeClass('error').qtip('destroy', true);
    }

    elem.focus(function() {
      $(this).removeClass('error').qtip('destroy', true)
    });

  };


  function createTooltip(selInp, txt, my, at) {
    selInp.qtip({
      content: txt,
      position: {
        my: my,
        at: at
      },
      show: {
        ready: true
      },
      hide: {
        event: 'click',
      },
    });
  }


  return {
    init: init
  };

})();

myModule.init();


jQuery('input[placeholder], textarea[placeholder]').placeholder();
