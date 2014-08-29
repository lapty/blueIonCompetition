$(document).ready(function () {

  $("body").tooltip({ selector: '[data-toggle=tooltip]' });


  $(function() {
      $(".navbutts").on("click", "#news", function() {
        $('html, body').animate({
          scrollTop: $("#newsWrapper").offset().top },1000);  });
  });

  $(function() {
      $(".navbutts").on("click", "#pros", function() {
        $('html, body').animate({
          scrollTop: $("#picWrapper").offset().top },1000);  });
  });

  $(function() {
      $(".navbutts").on("click", "#boards", function() {
        $('html, body').animate({
          scrollTop: $("#boardList").offset().top },1000);  });
  });

  $(function() {
      $(".navbutts").on("click", "#contact", function() {
        $('html, body').animate({
          scrollTop: $("#bottWrap").offset().top },1000); });

  });

       $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 80) {
             $('#navbutts').addClass('fixed');
         }
         else {
             $('#navbutts').removeClass('fixed');
         }
    });

      $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 1150) {
            $('.ticker').html("CONTACT")
        } else if (($(window).scrollTop() > 890)) {
            $('.ticker').html("BOARDS")
        } else if (($(window).scrollTop() > 510)) {
            $('.ticker').html("SKATEBOARDERS")
        } else if (($(window).scrollTop() > 180)) {
            $('.ticker').html("SK8T NEWS")
            $('.ticker').addClass('fixed2');
            $('.ticker').show(400);
        }
        else {
            $('.ticker').hide(400);
        }
   });


});////end docready
