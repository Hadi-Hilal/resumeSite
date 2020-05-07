$(document).ready(function () {

     // Fakes the loading setting a timeout
     setTimeout(function() {
        $('body').addClass('loaded');
    }, 800);
    
    // action a
    $(window).scroll(function () {
        var sc = $(this).scrollTop();

        if (sc > 500){
            $('#arrow').fadeIn();
        }
        else {$('#arrow').fadeOut();}
    });
    // Scroll to Top
    $('.arr').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },900);
    });

    // Smooth scroll
    $('li a').click( function () {

        $('html,body').animate({
            scrollTop : $ ($(this).attr('href')).offset().top
        });
    });

});