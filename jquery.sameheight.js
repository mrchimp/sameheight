(function ( $ ) {

  var elems;

  $.fn.sameheight = function (options) {
    
    function calc() {
      var max = 0;

      elems.height('auto');

      if (settings.autoHeightCondition()) {
        elems.height('auto');
        return true;
      }

      elems.each(function() {
        if ($(this).height() > max)  {
          max = $(this).height();
        }
      });

      elems.height(max);
    }

    var elems = this,
    settings = $.extend({
      calcOnResize: true,
      autoHeightCondition: function() {}
    }, options);

    calc();

    if (settings.calcOnResize) {
      $(window).resize(calc);
    }

    return this;
  };


}( jQuery ));
