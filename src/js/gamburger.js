(function () {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
    }
    //-показать мобильное меню
    const bodyElement = document.querySelector('body');
    const sectionElement = document.querySelector('section');
    const mobileMenuToggle = document.querySelector('#nav-menu-toggle');
    const mobileMenu = document.querySelector('.header-nav');

    mobileMenuToggle.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            mobileMenu.classList.add('active');
            bodyElement.classList.add('noscroll');
            sectionElement.classList.add('overlay');

        } else {
            mobileMenu.classList.remove('active');
            bodyElement.classList.remove('noscroll');
            sectionElement.classList.remove('overlay');
        }
    })

    mobileMenu.addEventListener('click', function (event) {
        //if contains submenu
        if (event.target.nextElementSibling != null &&
            event.target.nextElementSibling.classList.contains("submenu")) {
            return
        }

        this.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        bodyElement.classList.remove('noscroll');
        sectionElement.classList.remove('overlay');

    });
})();