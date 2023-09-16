$(function() {

  //evento click en menu hamburguesa
  $(document).on('click', '#menu-header-h', function() {
    hideShowMenuItems();
  });

  //evento click en links del menu
  $(document).on('click', '.menu-item > a', function(e) {
    hideShowMenuItems();
  });

});

//función para mostrar/ocultar elementos del menu (busca por clase -> .menu-item)
function hideShowMenuItems() {
  let menuItems = $('.menu-item');
  menuItems.each(function() {
    if (!$(this).is(':visible')) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}