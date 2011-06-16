/*

  jQuery DanoCheckbox Plugin 0.1
  
  Copyright (c) 2011 Rob Morgan
  
  Licensed under the MIT license:
  http://www.opensource.org/licenses/mit-license.php

  http://robmorgan.id.au

*/

(function($) {

  jQuery.fn.danoCheckbox = function(options) {
    
    var settings = jQuery.extend({checkboxClass: 'checkbox', activeClass: 'active', hide: true}, options);
    
    if (settings.hide) {
      $(this).hide();
    }
    
    $(this).each(function(index, inputEl) {
      var id = $(this).attr('id');
      
      var el = $(document.createElement('div'))
        .addClass(settings.checkboxClass)
        .insertAfter(this)
        .click(function() {
          if ($(this).hasClass(settings.activeClass)) {
            // is currently checked, so uncheck
            jQuery.fn.danoCheckbox.uncheck(inputEl, this, settings);
          } else {
            // is currently unchecked, so check
            jQuery.fn.danoCheckbox.check(inputEl, this, settings);
          }
        });
      
      if ($(this).is(':checked')) {
        $(el).addClass(settings.activeClass);
      }
      
      // also add a click handler to any labels with a matching 'for' attribute
      $('label[for=' + $(inputEl).attr('id') + ']').click(function(event) {
        // allow <a> tags to still fire their links
        if (event.target.nodeName.toLowerCase() == 'a') return;
        
        // don't let the label auto select the inputbox
        event.preventDefault();
        
        if ($(el).hasClass(settings.activeClass)) {
          // is currently checked, so uncheck
          jQuery.fn.danoCheckbox.uncheck(inputEl, el, settings);
        } else {
          // is currently unchecked, so check
          jQuery.fn.danoCheckbox.check(inputEl, el, settings);
        }
      });
    });
    
    return this;
  };
  
  jQuery.fn.danoCheckbox.check = function(inputEl, fancyEl, settings) {
    // TODO - this checking might not work in IE, we might need to use true/false
    $(inputEl).attr("checked", "checked");
    $(fancyEl).addClass(settings.activeClass);
  };
  
  jQuery.fn.danoCheckbox.uncheck = function(inputEl, fancyEl, settings) {
    $(inputEl).removeAttr("checked");
    $(fancyEl).removeClass(settings.activeClass);
  };
      
})(jQuery);