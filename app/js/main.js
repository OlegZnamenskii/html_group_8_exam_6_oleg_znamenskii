$(document).ready(function () {
    var trigger = $('.button--toggle'),
        menu = $('.main-menu'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == false) {
            menu.removeClass('is-closed');
            menu.addClass('is-open');
            isClosed = true;
        } else {
            menu.removeClass('is-open');
            menu.addClass('is-closed');
            isClosed = false;
        }
    }
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        arrows: false,
        // autoplaySpeed: 1000
    });
});

//плавная прокрутка

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
});

smoothScroll.init();