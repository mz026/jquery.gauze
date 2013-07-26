$.fn.gauze = function(options) {
  if ( $(this).data("gauze") ) {
    return $(this).data("gauze");
  }
  
  var data, self = this;

  $(this).data("gauze", {});
  data = $(this).data("gauze");
  options = $.extend({
    closeClass: ".close"
  }, options)

  $(this).css({
    display: "none"
    , position: "fixed"
    , "overflow-y": "scroll"
    , top: 0
    , left: 0
    , bottom: 0
    , right: 0
  });

  data.on = function() {
    $("body").css({ overflow: "hidden" });
    $(self).show();
  };

  data.off = function() {
    $("body").css({ overflow: "visible" });
    $(self).hide();
  };

  $(this).delegate(options.closeClass, "click", function() {
    data.off();
  });

  return data;
};
