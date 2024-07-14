
var menuToggle = document.querySelector('.menu-toggle');
var  menu = document.querySelector('.menu');
var close = document.querySelector('.closer');

menuToggle.addEventListener('click', function () {
    "use strict";
    menu.style.display = 'block';
});

close.addEventListener('click', function () {
    "use strict";
    menu.style.display = 'none';
});


