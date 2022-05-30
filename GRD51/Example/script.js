$(document).ready(function() {
  
  
  var $menu = $('#menu'),
  $menulink = $('.menu-link');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    toggleButtonText($(this));
    return false;
  });
  
  function toggleButtonText(element) {
    if (element.html() == 'CLOSE') {
      element.html('MENU');
    } else {
      element.html('CLOSE');
    }
  }
  
  
  $('.item').mouseenter(function() {
    $(this).find('.item-info').fadeIn(300);
    $(this).css("cursor", "pointer");
  });
  
  $('.item').mouseleave(function() {
    $(this).find('.item-info').fadeOut(500)
  });
  
});




