$(document).ready(function () {
    $('.mobile-nav i').click(function () { 
        $(this).toggleClass('fa-times');
        $('.site-nav-menu').toggleClass('mobile-menu-show');
    });
    // $('.mobile-nav i').click(function () { 
    //     $('.site-nav-menu').toggleClass('mobile-menu-show')
    // });
});