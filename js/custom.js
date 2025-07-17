// $(function () {
//   $(".footer-links-wrapper h3").click(function () {
//     $(this).parent().toggleClass("expanded");
//   });
// });

// $(document).ready(function () {
//   $(".footer-links-wrapper h3.toggle").on("click", function () {
//     $(this).toggleClass("expanded");
//     $(this).next(".content").slideToggle(); // Toggles the content visibility
//   });
// });


$(document).ready(function() {
    $(".footer-links-wrapper h3").click(function() {
      if ($(window).width() < 768) {
        const $h3 = $(this)
        // console.log($h3);
        $(this).toggleClass("expanded");
        $(".footer")
        $(this).next("ul").slideToggle(300);
      }
    });


    $(window).resize(function() {
      if ($(window).width() >= 769) 
        {
        location.reload();
      }
    });
});








