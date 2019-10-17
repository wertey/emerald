
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
    let name = document.querySelector('.name');
    let phone = document.querySelector('.phone');

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


    name.addEventListener('change',function (e) {
        localStorage.setItem('name',e.target.value);
    });

    name.getAttribute('value',localStorage.getItem('name'))

    phone.addEventListener('change',function (e) {
        localStorage.setItem('phone',e.target.value);
    });

    phone.getAttribute('value',localStorage.getItem('phone'))


});


document.addEventListener("DOMContentLoaded", function() { // событие загрузки страницы

    // выбираем на странице все элементы типа textarea и input
    document.querySelectorAll('textarea, input').forEach(function(e) {
        // если данные значения уже записаны в sessionStorage, то вставляем их в поля формы
        // путём этого мы как раз берём данные из памяти браузера, если страница была случайно перезагружена
        e.value = window.sessionStorage.getItem(e.name, e.value);
        // на событие ввода данных (включая вставку с помощью мыши) вешаем обработчик
        e.addEventListener('input', function() {
            // и записываем в sessionStorage данные, в качестве имени используя атрибут name поля элемента ввода
            window.sessionStorage.setItem(e.name, e.value);
        })
    })

});
