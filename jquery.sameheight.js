(function ( $ ) {

  var elems;

  $.fn.sameheight = function (options) {
    
    elems = this;

    var settings = $.extend({
      calcOnResize: true
    }, options);

    calc();

    if (settings.calcOnResize) {
      $(window).resize(calculate);
    }

    return elems;
  };

  function calc() {
    var max = 0;

    elems.height('auto');

    elems.each(function() {
      if ($(this).height() > max)  {
        max = $(this).height();
      }
    });

    elems.height(max);
  }

}( jQuery ));
