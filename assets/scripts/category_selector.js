function handleCategoryBoxClick(e) {
    const clickedBox = e.target;
    clickedBox.style.borderColor = "red";
}

document.addEventListener("DOMContentLoaded", function() {
    const categoryBoxes = document.querySelectorAll(".category-box");
    categoryBoxes.forEach(function(box) {
        box.addEventListener("click", handleCategoryBoxClick);
    });
});