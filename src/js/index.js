
document.addEventListener("DOMContentLoaded", () => {
    let menuBtn = document.querySelector('.lp-header-row-item-menu');
    let showMenu = document.querySelector('.lp-header-row-item__nav');
    let closeMenu = document.querySelector('.active');
    let popup = document.querySelector('.lp-popup-order');
    let line = document.querySelector('.lp-header-row-item-menu__line');
    let closePopup = document.querySelector('.lp-popup__close');
    let popupOverlay = document.querySelector('.lp-popup__overlay');
    let orderBtn = document.querySelectorAll('.lp__button_order');
    let closeBtns = document.querySelectorAll('.close');
    let submitForm = document.querySelector('.lp-popup__form-submit');
    let successOrder = document.querySelector('.lp-popup__success');
    let beforeOrderContent = document.querySelector('.lp-popup__before');

    for (let i = 0; i < orderBtn.length; i++) {
        orderBtn[i].onclick = function () {
            popup.style.display = 'flex';
            popupOverlay.style.display = 'block';
        };
    }

    for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].onclick = function () {
            popup.style.display = 'none';
            popupOverlay.style.display = 'none';
        };
    }

    menuBtn.addEventListener('click',function () {
        menuBtn.classList.toggle('active');
        showMenu.classList.toggle('active');
        line.classList.toggle('open');
    });





});
