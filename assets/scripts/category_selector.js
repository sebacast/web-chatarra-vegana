$(function () {
  var categoriesArray = [];
  // Evento click en las cajas de categoría con clase .category-box
  $(document).on("click", ".category-box", function (e) {
    e.preventDefault();
    let element = $(this);
    categoriesArray = categoryBoxClickHandler(categoriesArray, element);
    filterProducts(categoriesArray);
  });
  $(document).on("click", ".category-text-container", function (e) {
    e.preventDefault();
    let element = $(this).prev(".category-box");
    element.click();
    //categoriesArray = categoryBoxClickHandler(categoriesArray, element);
    //filterProducts(categoriesArray);
  });

  $(document).on("mouseenter", ".category-text-container", function () {
    let element = $(this).prev(".category-box");
    let category = element.attr("data-category");
    let index = categoriesArray.indexOf(category);
    if (index === -1) {
      element.addClass("category-box-clicked");
    }
  });

  $(document).on("mouseleave", ".category-text-container", function () {
    let element = $(this).prev(".category-box");
    let category = element.attr("data-category");
    let index = categoriesArray.indexOf(category);
    if (index === -1) {
        element.removeClass("category-box-clicked");
      }
  });
});

function categoryBoxClickHandler(categoriesArray, element) {
  let category = element.attr("data-category");
  if (typeof category === "string" && category !== "") {
    let index = categoriesArray.indexOf(category);
    // Si la categoría no está en el array, la agregamos
    if (index === -1) {
      categoriesArray.push(category);
      element.addClass("category-box-clicked");
    } else {
      categoriesArray.splice(index, 1);
      element.removeClass("category-box-clicked");
    }
  }
  return categoriesArray;
}

function filterProducts(innerCategoriesArray) {
  $(".product-box").each(function () {
    let innetCategory = $(this).attr("data-category");
    if (
      innerCategoriesArray.length == 0 ||
      innerCategoriesArray.includes(innetCategory)
    ) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}
