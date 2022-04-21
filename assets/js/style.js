$(document).ready(function () {
    $('.mobile-nav i').click(function () { 
        $(this).toggleClass('fa-times');
        $('.site-nav-menu').toggleClass('mobile-menu-show');
    });
    $('li a').click(function () { 
        $('.mobile-nav i').removeClass('fa-times');
        $('.site-nav-menu').removeClass('mobile-menu-show');
    });
    // $('.mobile-nav i').click(function () { 
    //     $('.site-nav-menu').toggleClass('mobile-menu-show')
    // });
});