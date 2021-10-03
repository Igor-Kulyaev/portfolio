$(document).ready(function () {
    $('.images').slick({
        arrows: true,
        dots: true
    });
});

let burger_menu = document.querySelector('.burger__menu');
let menu_mob = document.querySelector('.menu-mob');
let close_image = document.querySelector('.close-image');

burger_menu.addEventListener('click', function () {
    menu_mob.style.right = '15px';
})

close_image.addEventListener('click', function () {
    menu_mob.style.right = '-1000px';
})
