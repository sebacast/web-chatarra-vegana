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

  $(document).on("click", "#go-up-button", function (e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: -60},1000);
  });

});

//función para mostrar/ocultar elementos del menu (busca por clase -> .menu-item)
// function hideShowMenuItems() {
//   let menuItems = $('.menu-item');
//   menuItems.each(function() {
//     $(this).show();
//     if (!$(this).is(':visible')) {
//       $(this).show();
//     } else {
//       $(this).hide();
//     }
//   });
// }

function hideShowMenuItems(){
  let menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    if(!item.style.display || item.style.display == "none"){
        item.style.display = "block"; 
    }
    else{
        item.style.display = "none"; 
    }
  });
}