var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


// scroll animations
var anim = document.querySelectorAll('.anim');

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target;
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }
                    el.classList.add('done');


                } else {
                    el.classList.remove('done');
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();


// open control
let openBtn = [...document.querySelectorAll('.navigation-head')];

function openControl() {
    if (openBtn.length) {
        openBtn.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
            })
        })
    }
}

openControl();

let openFaq = [...document.querySelectorAll('.faq-head')];

function openControlFaq() {
    if (openFaq.length) {
        openFaq.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
            })
        })
    }
}

openControlFaq();

//
let copyText = [...document.querySelectorAll('.copy-text')];

function copyOurText() {
    if (copyText.length) {
        copyText.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                myFunction(btn);
            })
        })
    }
}

copyOurText();

function timerText() {
    copyText[0].classList.remove('copied')
}

let timeOut = setTimeout(timerText, 4000);

function myFunction(btn) {
    // Get the text field

    navigator.clipboard.writeText(btn.dataset.promo);

    // Alert the copied text
    // alert("Copied the text: " + copyText.innerHTML);
    clearTimeout(timeOut);
    btn.classList.add('copied');
    timeOut = setTimeout(timerText, 4000)

}


//faq
let faqItems = [...document.querySelectorAll('.single-faq .faq-head')];

function controlFaq() {
    if (faqItems.length) {
        faqItems.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                faqItems.forEach((btn2, l) => {
                    if (l !== k) {
                        btn2.closest('.single-faq').classList.remove('open');
                    }

                });
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}

controlFaq();

//faq

let headerLangs = [...document.querySelectorAll('.header-langs > span')];

function controlLangs() {
    if (headerLangs.length) {
        headerLangs.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.header-langs').classList.toggle('open');
            })
        });

        $('body').on('click', function (e) {
            if (e.target.closest('.header-langs')) {
            } else {
                [...document.querySelectorAll('.header-langs')].forEach((hl) => {
                    hl.classList.remove('open');
                });
            }
        })
    }
}

controlLangs();

let downBanner = [...document.querySelectorAll('.download-banner')];

function showDownBanner() {
    if (downBanner.length) {
        downBanner.forEach((btn) => {
            setTimeout(() => {
                btn.classList.add('show');
            }, 3700)
        })
    }
}

showDownBanner();

// Получаем нужный элемент
var elementBtns = document.querySelector('.home-banner');

var Visible = function (target) {
    if (!elementBtns) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.download-banner').classList.remove('show');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.download-banner').classList.add('show');
        }
        ;
    }
    // Все позиции элемента

};
window.addEventListener('scroll', function () {
    Visible(elementBtns);

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(elementBtns);

