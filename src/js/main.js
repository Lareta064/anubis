$(document).ready(function () {
    // AOS.init({
    //     offset: 100,
    //     duration: 1000,
    //     easing: 'ease-in-quad',
    //     delay: 100,
    // });
    /* animate*/

    // Получаем нужный элемент
    let element = document.querySelectorAll('.target');
    console.log(element)

    let Visible = function (target) {
        // Все позиции элемента
        let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top + 100,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            // console.clear();
            // console.log('Вы видите элемент :)');
            target.classList.add('slideRight')
        } else {
            // Если элемент не видно, то запускаем этот код
            // target.classList.remove('slideRight')

        };
    };

    // Запускаем функцию при прокрутке страницы

    window.addEventListener('scroll', function () {
        for (let el of element) {
            Visible(el);
        }
    });

    // А также запустим функцию сразу. А то вдруг, элемент изначально видно
    Visible(element);
})

