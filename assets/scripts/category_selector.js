$(function() {
    var categoriesArray = [];
    // Evento click en las cajas de categoría con clase .category-box
    $(document).on('click', '.category-box', function(e) {
        e.preventDefault();
        let element = $(this);
        let category = element.attr('data-category');
        if (typeof category === "string" && category!== '') {
            let index = categoriesArray.indexOf(category);
            // Si la categoría no está en el array, la agregamos
            if (index === -1) {
              categoriesArray.push(category);
              element.css("border-color", "red");
            } 
            // Si la categoría ya está en el array, la quitamos
            else {
              categoriesArray.splice(index, 1);
              element.css("border-color", "black");
            }
        }
        filterProducts(categoriesArray);
    });
  });

  function filterProducts(innerCategoriesArray){
    $('.product-box').each(function() {
        let innetCategory = $(this).attr('data-category');
        if (innerCategoriesArray.length == 0 || innerCategoriesArray.includes(innetCategory)){
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
  }
  