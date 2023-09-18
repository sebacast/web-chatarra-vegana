$(function() {
  //evento click en menu hamburguesa
  $(document).on('click', '#menu-header-h', function(e) {
    e.preventDefault();
    hideShowMenuItems();
  });

  //evento click en links del menu
  $(document).on('click', '.menu-item > a', function(e) {
    hideShowMenuItems();
  });

  $(document).on('click', '.menu-item', function(e) {
    e.preventDefault();
    let linkedSection = $(this).find('a').attr('href');
    if (linkedSection) {
      let menuHeight = 60;
      let position = $(linkedSection).offset().top - menuHeight;
      $('html, body').animate({
        scrollTop: position
      }, 1000); 
    }
  });

});

function hideShowMenuItems() {
  $(".menu-item").each(function() {
    if (!$(this).css("display") || $(this).css("display") === "none") {
      $(this).css("display", "block");
    } else {
      $(this).css("display", "none");
    }
  });
}
