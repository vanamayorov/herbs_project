$(document).ready(function () {
    var consultingForms = $('.consulting-form__form');
    consultingForms.each(function () {
        $(this).validate({
            rules: {
                firstName: {
                    required: true
                }, secondName: {
                    required: true
                }, tel: {
                    required: true
                }, mail: {
                    required: true
                }, company: {
                    required: true
                }, website: {
                    required: true
                },
            },
            messages: {
                firstName: "Please specify your first name",
                secondName: "Please specify your second name",
                tel: "Please specify your phone number",
                mail: "We need your email address to contact you",
                company: "Please specify your company",
                website: "Please specify your website",
            },
            submitHandler: function () {
                $('.success-modal').addClass('success-modal--active');
            }
        });
    });

    $(".top-slider__list").slick({
        dots: true,
        arrows: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false
                }
            }
        ]
    });

    $(".slider-marketing__list").slick({
        dots: true,
        arrows: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false
                }
            }
        ]
    });

    $(".product-card__stars").rateYo({
        normalFill: "rgba(55, 55, 55, 0.2)",
        readOnly: true,
        starWidth: "13px",
        ratedFill: "#373737",
        spacing: "5px"
    });

    $('.product-details__stars').rateYo({
        normalFill: "rgba(55, 55, 55, 0.2)",
        readOnly: true,
        starWidth: "18px",
        ratedFill: "#373737",
        spacing: "5px"
    });

    $('.review-card__rating').rateYo({
        normalFill: "rgba(55, 55, 55, 0.2)",
        readOnly: true,
        starWidth: "18px",
        ratedFill: "#373737",
        spacing: "5px"
    });

    $('.modal-product__rating').rateYo({
        normalFill: "#fff",
        starWidth: "30px",
        ratedFill: "#373737",
        spacing: "5px",
        starSvg: "<svg width=\"30\" height=\"30\" viewBox=\"0 0 29 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M14.6475 1.61804L17.5396 10.5193L17.6519 10.8647H18.0152H27.3745L19.8026 16.366L19.5087 16.5795L19.621 16.925L22.5132 25.8262L14.9414 20.325L14.6475 20.1115L14.3536 20.325L6.78174 25.8262L9.67392 16.925L9.78618 16.5795L9.49228 16.366L1.92045 10.8647H11.2798H11.643L11.7553 10.5193L14.6475 1.61804Z\" stroke=\"#373737\"/>\n" +
            "</svg>",
    });

    $('.review-form__stars').rateYo({
        normalFill: "#fff",
        starWidth: "30px",
        ratedFill: "#373737",
        spacing: "10px",
        starSvg: "<svg width=\"30\" height=\"30\" viewBox=\"0 0 29 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M14.6475 1.61804L17.5396 10.5193L17.6519 10.8647H18.0152H27.3745L19.8026 16.366L19.5087 16.5795L19.621 16.925L22.5132 25.8262L14.9414 20.325L14.6475 20.1115L14.3536 20.325L6.78174 25.8262L9.67392 16.925L9.78618 16.5795L9.49228 16.366L1.92045 10.8647H11.2798H11.643L11.7553 10.5193L14.6475 1.61804Z\" stroke=\"#373737\"/>\n" +
            "</svg>",
    });

    var stickyNavTop = 125;

    function stickyNav() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $(".header__nav").addClass("header__nav--sticky");
            $(".header__buttons").addClass("header__buttons--sticky");
        } else {
            $(".header__nav").removeClass("header__nav--sticky");
            $(".header__buttons").removeClass("header__buttons--sticky");
        }
    }

    $(window).scroll(function () {
        stickyNav();
    });

    $(".burger").on("click", function () {
        $(".header__nav").addClass("header__nav--active");
        $('body, .global-wrapper').addClass('lock');
    });

    $(".sort-group__btn").on("click", function () {
        $('.dropdown-list').toggleClass('dropdown-list--active');
    });

    $(document).on("mouseup", function (e) {
        var div = $(".header__nav-inner");
        if (!div.is(e.target) && div.has(e.target).length === 0 && $(window).width() <= 1200) {
            $(".header__nav").removeClass("header__nav--active");
            $('body, .global-wrapper').removeClass('lock');
        }

        var container = $('.catalogue__dropdown');
        if (!$('.sort-group__btn').is(e.target)) {
            container.removeClass('dropdown-list--active');
        }

        container = $('.header__top-form');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.header__form-wrapper').removeClass('header__form-wrapper--active');
        }
    });

    $(".footer__subtitle").on("click", function () {
        $(this).find('svg').toggleClass("footer__svg--rotate");
        $(this).siblings(".footer__list").slideToggle();
    });

    $(".main-faq__subtitle").on("click", function () {
        $(this).find('svg').toggleClass("main-faq__svg--rotate");
        $(this).siblings(".main-faq__text").slideToggle();
    });

    $(".header__btn").on("click", function () {
        $(".header__form-wrapper").addClass("header__form-wrapper--active");
    });

    $(".top-form__cross").on("click", function () {
        $('.header__form-wrapper').removeClass('header__form-wrapper--active');
    });

    $('.catalogue__switch--price').on("click", function () {
        $('.catalogue__switch--products').removeClass('catalogue__switch--active');
        $(this).toggleClass('catalogue__switch--active');
        $('.catalogue__row-dropdown--products').removeClass('dropdown-list--active');
        $('.catalogue__row-dropdown--price').toggleClass('dropdown-list--active');
    });

    $('.catalogue__switch--products').on("click", function () {
        $('.catalogue__switch--price').removeClass('catalogue__switch--active');
        $(this).toggleClass('catalogue__switch--active');
        $('.catalogue__row-dropdown--price').removeClass('dropdown-list--active');
        $('.catalogue__row-dropdown--products').toggleClass('dropdown-list--active');
    });

    $('.product-details__number').styler();

    $('.item-card__number').styler();

    $('.modal-item__number').styler();

    $('.detail-slider__list').slick({
        arrows: false,
        dots: true,
        infinite: false,
    });

    var scrollBarWidth = parseInt(window.innerWidth) - parseInt(document.querySelector('.global-wrapper').clientWidth);


    $('.tab-reviews__btn, .tab-reviews__btn-mob').on('click', function () {
        var productModal = $('.product-details__modal-wrapper');
        productModal.addClass('product-details__modal-wrapper--show');
        $('body').addClass('lock');
        $('body').css('padding-right', scrollBarWidth + 'px');
        $('.header__wrapper').css('padding-right', scrollBarWidth + 'px');

        productModal.on('click', function (e) {
            if ((!$('.product-details__modal').is(e.target) && $('.product-details__modal').has(e.target).length === 0) || $('.modal-product__close').is($(e.target))) {
                $('.product-details__modal-wrapper').removeClass('product-details__modal-wrapper--show');
                $('body').removeClass('lock');
                $('body').css('padding-right', 0);
                $('.header__wrapper').css('padding-right', 0);
            }
        });
    });

    $('body').on('click', '.tabs__btn', function () {
        $('.tabs__btn').removeClass('tabs__btn--active');
        $(this).toggleClass('tabs__btn--active');
        let contentNum = $(this).data('tab');

        $('.tabs__content').removeClass('tabs__content--show');
        $(`.tabs__content[data-content=${contentNum}]`).addClass('tabs__content--show');
    });

    $('body').on('click', '.product-details__btn', function () {
        $(this).toggleClass('product-details__btn--active');
        var contentId = $(this).attr('data-tab');
        $(`.tabs__wrapper[data-content=${contentId}]`).toggleClass('tabs__wrapper--show');
    });

    $('body').on('click', '.user-nav__link--cart', function () {
        var offset = $(window).scrollTop();
        $('body, html').animate({
            scrollTop: offset
        }, 100);

        var modalCart = $('.modal-cart');
        modalCart.addClass('modal-cart--active');
        $('body').addClass('lock');
        $('body').css('padding-right', scrollBarWidth + 'px');
        $('.header__wrapper').css('padding-right', scrollBarWidth + 'px');


        modalCart.on('click', function (e) {
            if ((!$('.modal-cart__inner').is(e.target) && $('.modal-cart__inner').has(e.target).length === 0) || $('.modal-cart__close').is($(e.target))) {
                modalCart.removeClass('modal-cart--active');
                $('body').removeClass('lock');
                $('body').css('padding-right', 0);
                $('.header__wrapper').css('padding-right', 0);
            }
        });
    });

    $('.form-block__add-company').on('click', function () {
        $(this).addClass('form-block__add-company--hide');
        $(".form-block__additional").removeClass('form-block__additional--hide');
    });

    $('.form-block__close-company').on('click', function () {
        $(".form-block__additional").addClass('form-block__additional--hide');
        $('.form-block__add-company').removeClass('form-block__add-company--hide');
    });

    $('.review-form__form').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            review: {
                required: true
            }
        },
        messages: {
            name: "Please specify your name",
            email: {
                required: "We need your email address",
                email: "Your email address must be in the format of name@domain.com"
            },
            review: "Please write down your review"
        },
    });

    $('.contact-form').validate({
        rules: {
            name: {
                required: true,
            },
            mail: {
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
            msg: {
                required: true
            },
        },
        messages: {
            name: "Please specify your name",
            mail: {
                required: "We need your email address",
                email: "Your email address must be in the format of name@domain.com"
            },
            msg: "Please write down your review",
            phone: "Please specify your phone"
        },

    });

    $('#billing-details').validate({
        rules: {
            agree18: {
                required: true
            },
            firstName: {
                required: true
            },
            secondName: {
                required: true
            },
            zip: {
                required: true,
                maxLength: 4
            },
            address: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            firstName: "Please specify your first name",
            secondName: "Please specify your second name",
            zip: "Enter your zip code",
            address: "Enter your address",
            email: {
                required: "We need your email address",
                email: "Your email address must be in the format of name@domain.com"
            },
        },
        errorPlacement: function (error, element) {
            element.parents('.form-block__label').append(error);
        }
    });

    $('#payment-details').validate({
        rules: {
            cardNum: {
                required: true,
                maxLength: 16
            },
            expirationDate: {
                required: true,
                maxLength: 4
            },
            securityCode: {
                required: true,
                maxLength: 3
            }
        },
        errorPlacement: function (error, element) {
            element.parents('.form-block__label').append(error);
        }
    });

    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $('[name="phone"]').click(function () {
        $(this).setCursorPosition(1);
    }).mask("(999) 999-9999");

    $('[name="cardNum"]').mask("9999 9999 9999 9999");

    $('[name="expirationDate"]').mask("99/99");

    $('[name="securityCode"]').mask("999");

    $('body').on('click', '.form-block__payment-item', function () {
        $('.form-block__tab-content').removeClass("form-block__tab-content--active");
        var index = $(this).data('tab');
        $(`.form-block__tab-content[data-content=${index}]`).addClass('form-block__tab-content--active');
    });

    function mapReplace() {
        var map = $('.contact__map');

        if ($(window).width() <= 992) {
            map.insertAfter('.contact__left');
        } else {
            map.insertAfter('.contact__wrapper');
        }
    }

    $(window).resize(function () {
        mapReplace();
    });

    mapReplace();

    $('body').on('click', '.blog__switch--products', function () {
        $('.blog__switch--sort').removeClass('blog__switch--active');
        $(this).toggleClass('blog__switch--active');
        $('.blog__row-dropdown--sort').removeClass('dropdown-list--active');
        $('.blog__row-dropdown--products').toggleClass('dropdown-list--active');
    });

    $('body').on('click', '.blog__switch--sort ', function () {
        $('.blog__switch--products').removeClass('blog__switch--active');
        $(this).toggleClass('blog__switch--active');
        $('.blog__row-dropdown--products').removeClass('dropdown-list--active');
        $('.blog__row-dropdown--sort').toggleClass('dropdown-list--active');
    });

    $(document).on('click', '.detail-slider__link', function (e) {
        e.preventDefault();
        var gallery = [], index = 0;
        $(this).closest(".detail-slider__list").find(".detail-slider__item").each(function () {
            var objImg = {};
            objImg = {
                'src': $(this).find('img').attr('src'),
                'thumb': $(this).find('img').attr('src'),
            }

            if ($(this).hasClass('slick-current')) {
                index = $(this).index();
            }

            gallery.push(objImg);
        });

        Fancybox.show(gallery, {
            startIndex: index,
            hideScrollbar: false,
            infinite: false
        });
    });

    $('.related-products__list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        infinite: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('body').on('click', '.consulting-form__choose', function () {
        $(this).toggleClass('consulting-form__choose--active');
        $(this).parents('.consulting-form__dropdown').find('.dropdown-list').toggleClass('dropdown-list--active');
    });

    $('body').on('click', '.wholesale__consulting-btn', function () {
        $('.wholesale__modal-wrapper').addClass('wholesale__modal-wrapper--active');
        $('body').addClass('lock');
    });

    $('body').on('click', '.modal-wholesale__btn', function () {
        $('.wholesale__modal-wrapper').removeClass('wholesale__modal-wrapper--active');
    });

    $('input[type="tel"]').mask('+1(999) 999-99-99');


    var minutes = $(".minutes");
    var seconds = $(".seconds");

    var timeLeft = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
    }

    var totalSeconds;

    function init() {
        totalSeconds = Math.floor((new Date('18.07.2021') - new Date()) / 1000);
        totalSeconds = Math.floor((new Date(Date.parse(new Date()) + 1 / 48 * 24 * 60 * 60 * 1000) - new Date()) / 1000);
        setTimeLeft();

        var interval = setInterval(() => {
            if (totalSeconds < 0) {
                clearInterval(interval);
            }

            countTime();
        }, 1000);

    }

    function countTime() {
        if (totalSeconds > 0) {
            --timeLeft.s;
            if (timeLeft.m >= 0 && timeLeft.s < 0) {
                timeLeft.s = 59;
                --timeLeft.m;
                if (timeLeft.h >= 0 && timeLeft.m < 0) {
                    timeLeft.m = 59;
                    --timeLeft.h;
                    if (timeLeft.d >= 0 && timeLeft.h < 0) {
                        timeLeft.h = 23;
                        --timeLeft.d;
                    }
                }
            }
        }
        --totalSeconds;
        printTime();
    }

    function printTime() {

        animateFlip(minutes, timeLeft.m);
        animateFlip(seconds, timeLeft.s);
    }

    function animateFlip(element, value) {
        const valueInDom = parseInt(element.find('.bottom-back').text());
        const currentValue = value < 10 ? '0' + value : '' + value;

        if (valueInDom === parseInt(currentValue)) {
            return;
        }

        element.find('.top-back span').text(currentValue);
        element.find('.bottom-back span').text(currentValue);

        gsap.to(element.find('.top'), 0.7, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: () => {
                element.find('.top').text(currentValue);
                element.find('.bottom').text(currentValue);
                gsap.set(element.find('.top'), {rotationX: 0});
            }
        });

        gsap.to(element.find('.top-back'), 0.7, {
            rotationX: '0',
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });
    }

    function setTimeLeft() {
        timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
        timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
        timeLeft.m = Math.floor(totalSeconds / (60) % 60);
        timeLeft.s = Math.floor(totalSeconds % 60);
    }

    init();
});