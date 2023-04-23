const mode = document.getElementById('day-night-image');

let act1 = document.querySelector('body');
let act2 = document.querySelector('.sidebyside-left');
let act3 = document.querySelector('.sidebyside-right');
let act4 = document.querySelector('footer');
let act5 = document.querySelectorAll('a');
let act6 = document.querySelector('.content-section');
let act7 = document.querySelector('#navigation-bar');
let act8 = document.querySelector('.image-section');
let act9 = document.querySelector('.profile-image');
let act10 = document.querySelector('.image-footer');



mode.addEventListener('click', () => {

    mode.src = "icon/sun.png";




    act1.classList.toggle('act-1');


    act2.classList.toggle('act-1');
    act3.classList.toggle('act-1');
    act4.classList.toggle('act-1');

    for (let add of act5) {
        add.classList.toggle('act-2');
    }



    act6.classList.toggle('act-3');

    act7.classList.toggle('act-4');
    act8.classList.toggle('act-4');

    act9.classList.toggle('act-5');

    act10.classList.toggle('act-6');



})