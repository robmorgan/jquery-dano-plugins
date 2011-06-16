/*

  jQuery DanoDropdown Plugin 0.1
  
  Copyright (c) 2011 Rob Morgan
  
  Licensed under the MIT license:
  http://www.opensource.org/licenses/mit-license.php

  http://robmorgan.id.au

*/

(function($) {
  
  jQuery.fn.danoDropdown = function(options) {
    
    // there's no settings for this component atm
    var settings = jQuery.extend({}, options);
    
    $(this).each(function() {
      var source = $(this),
          sourceParent = $(this).parent().attr("id"),
          selected = $(this).find("option[selected]"),
          options = $("option", source);
            
      var newDropTarget = ("target-" + sourceParent);
            
      // Hide the existing select box
      source.css({
        "position": "absolute",
        "top": "-9999px"
      });
      
      $("#" + sourceParent).append('<div id="' + newDropTarget + '" class="drop-wrap"></div>');
      $("#" + newDropTarget).append('<div class="text"><div class="text-wrap">' + selected.text() + '</div></div>');
      $("#" + newDropTarget).append('<ul></ul>');

      options.each(function(){
          $("#" + newDropTarget + " ul").append('<li>' + 
              $(this).text() + '</li>');
      });
      
      $("#" + newDropTarget + " .text").click(function() {
          $("#" + newDropTarget + " ul").toggle();
      });
      
      $("#" + newDropTarget + " li").click(function() {
          var text = $(this).html();
          $("#" + newDropTarget + " .text-wrap").html(text);
          source[0].selectedIndex=$(this).index("#" + newDropTarget + " li");
          $("#" + newDropTarget + " ul").hide();
      });
    });
    
    return this;
    
  };
      
})(jQuery);