(function ( $ ) {

  // var elems;

  $.fn.sameheight = function (input) {
    
    var elems = this;
        settings = {
          calcOnResize: true,
          autoHeightCondition: function() {},
          defaultHeight: 'auto'
        };

    if (typeof input === 'string' && input === 'refresh') {
      elems = $('.box');
      calc();
    } else if (typeof input === 'object') {
      init(input);
    }

    function calc() {
      var max = 0;

      elems.height('auto');

      if (settings.autoHeightCondition()) {
        elems.height(settings.defaultHeight);
        return true;
      }

      elems.each(function() {
        if ($(this).height() > max)  {
          max = $(this).height();
        }
      });

      elems.height(max);
    }

    function init(options) {
      settings = $.extend(settings, options);

      calc();

      if (settings.calcOnResize) {
        $(window).resize(calc);
      }
    }

    return this;
  };


}( jQuery ));
