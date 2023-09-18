$(function() {
    var scrollButton = $("#go-up-button");  
    $(window).on("scroll", function() {
        scrollButton.toggle($(this).scrollTop() > 61);
    });
    
    scrollButton.on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});
