$('.collapseable-nav > .mdi-plus').click(function() {
    if ($(this).hasClass("mdi-plus")) {
      $(this).removeClass("mdi-plus");
      $(this).addClass("mdi-minus");
    } else {
      $(this).removeClass("mdi-minus");
      $(this).addClass("mdi-plus");
    }
});
$('.collapseable-nav').click(function() {
    if ($(this).children().hasClass("mdi-plus")) {
      $(this).children().removeClass("mdi-plus");
      $(this).children().addClass("mdi-minus");
    } else {
      $(this).children().removeClass("mdi-minus");
      $(this).children().addClass("mdi-plus");
    }
});
