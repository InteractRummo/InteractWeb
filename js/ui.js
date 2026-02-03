$(document).ready(function () {

    $(".hamburger").on('click', function () {
        $(".menu").toggleClass("menu--open");
    });

});

ScrollReveal().reveal('.reveal', {
    distance: '100px',
    duration: 1500,
    easing: 'cubic-bezier(.215, .61, .355, 1)',
    interval: 600
});

ScrollReveal().reveal('.zoom', {
    duration: 1500,
    easing: 'cubic-bezier(.215, .61, .355, 1)',
    interval: 200,
    scale: 0.65,
    mobile: false
});
