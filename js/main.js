/*==============================
        zoom js
    ==============================*/
    function zoom(e){
        var zoomer = e.currentTarget;
        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
        e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
        x = offsetX/zoomer.offsetWidth*100
        y = offsetY/zoomer.offsetHeight*100
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }

    /*==============================
        popup js
    ==============================*/
    $(window).on('load', function () {
         var popup = localStorage.getItem('popup_value');
         if (popup != 1) {
            $('#news-letter-modal').modal('show');
        }

        /*==============================
            pre-loader js
        ==============================*/
          $('.preloader').delay(100).fadeOut('fast');
    });

    (function ($) {
        "use strict";
        var $body = $("body"),
            $window = $(window),
            $document = $(document);
        var WT = {
            init: function() {
            },
        };

    /*==============================
        counter js
    ==============================*/
    $('.count-number').counterUp({
        delay: 10,
        time: 1000
    });

    /*==============================
       video popup js
    ==============================*/
    var $video_popup = $('.play-button');
        $video_popup.magnificPopup({
            tClose: 'Close (Esc)',
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
    });

    /*==============================
      home-1 timer js
    ==============================*/
    setInterval(function time(){
      var d = new Date();
      var days = d.getDay();
      var hours = 24 - d.getHours();
      var min = 60 - d.getMinutes();
      if((min + '').length == 1){
        min = '0' + min;
      }
      var sec = 60 - d.getSeconds();
      if((sec + '').length == 1){
        sec = '0' + sec;
      }
      jQuery('.timer-section1 ul').html('<li class="clock-li"><span class="clock-timer">'+days+'</span><span class="clock-title">Day</span></li><li class="clock-li"><span class="clock-timer">'+hours+'</span><span class="clock-title">Hrs</span></li><li class="clock-li"><span class="clock-timer">'+min+'</span><span class="clock-title">Min</span></li><li class="clock-li"><span class="clock-timer">'+sec+'</span><span class="clock-title">Sec</span></li>')
    }, 1000);   

    /*====================================
        deal-day clock js
    ====================================*/
        var deadline = new Date(Date.parse(new Date()) + 520 * 80 * 60 * 60 * 1000);
            initializeClock('clock1', deadline);
        var deadline = new Date(Date.parse(new Date()) + 620 * 80 * 60 * 60 * 1000);
            initializeClock('clock2', deadline);
        var deadline = new Date(Date.parse(new Date()) + 720 * 80 * 60 * 60 * 1000);
            initializeClock('clock3', deadline);
        var deadline = new Date(Date.parse(new Date()) + 420 * 80 * 60 * 60 * 1000);
            initializeClock('clock4', deadline);
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 60));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
    }
    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        if(clock != null){
          var daysSpan = clock.querySelector('.days');
          var hoursSpan = clock.querySelector('.hours');
          var minutesSpan = clock.querySelector('.minutes');
          var secondsSpan = clock.querySelector('.seconds');

          function updateClock() {
            var t = getTimeRemaining(endtime);
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
              clearInterval(timeinterval);
            }
          }

          updateClock();
          var timeinterval = setInterval(updateClock, 1000);
        }
    }

    /*============================== 
        magnificPopup js
    ==============================*/
    $('.full-view').on('click', function () {
        $(this).next().magnificPopup('open');
    });
    $('.slider-big, .style2-slider-big, .style4-slider-big, .slider-big-6, .slider-big-7').magnificPopup({
        delegate: 'a',
        type: 'image',
        showCloseBtn: true,
        closeBtnInside: false,
        midClick: true,
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    /*====================================
        header-sticky js
    ====================================*/
    var lastScrollTop = 0;
    $(window).on('scroll', () => {
        var header = $('#stickyheader'),
        sticky = $(window).scrollTop();
        if (sticky >= 100) {
            header.addClass('sticky-header');
        } else {
            header.removeClass('sticky-header');
        }
    });

    // home-3 sticky-down //
    var s = $(".main-header");
    var pos = s.position();                    
    $(window).on('scroll', () => {
        var windowpos = $(window).scrollTop();
        if (windowpos >= pos.top & windowpos <=1000) {
            s.addClass("sticky-down");
        } else {
            s.removeClass("sticky-down"); 
        }
    });

    /*====================================
        toggler-menu js
    ====================================*/
    $(".toggler-wrapper button.toggler-btn").on("click", function() {
        $("#mobile-menu, .main-menu-area, .header-bottom").addClass('active');
        $(".bg-screen").addClass('active');
        $("body").addClass('hidden');
    });
    $(".menu-close button.menu-close-btn").on("click", function() {
        $("#mobile-menu, .main-menu-area, .header-bottom").removeClass('active');
        $(".bg-screen").removeClass('active');
        $("body").removeClass('hidden');
    });

    /*====================================
        vega-menu js
    ====================================*/
    $("a.browse-cat.browse-cat-lg").on("click", function() {
        $("#mobile-vega-menu").addClass('active');
        $(".bg-screen").addClass('active');
        $("body").addClass('hidden');
    });
    $(".vega-close button.vega-close-btn").on("click", function() {
        $("#mobile-vega-menu").removeClass('active');
        $(".bg-screen").removeClass('active');
        $("body").removeClass('hidden');
    });

    /*==============================
        filter js
    ==============================*/
    $('button.filter-button').on('click', function () {
        $('.filter-sidebar').addClass("active");
        $('.screen-bg').addClass("active");
    });
    $('button.close-sidebar').on('click', function () {
        $('.filter-sidebar').removeClass("active");
        $('.screen-bg').removeClass("active");
    });

    /*====================================
        cart-drawer js
    ====================================*/
    $(".cart-wrapper a.js-cart-drawer,  .bottom-menu-wrapper a.bottom-menu-cart, a.add-to-cart, .bottom-menu-cart").on("click", function() {
        $("#cart-drawer").addClass('active');
        $(".bg-screen").addClass('active');
        $("body").addClass('hidden');
    });
    $(".drawer-close button.drawer-close-btn").on("click", function() {
        $("#cart-drawer").removeClass('active');
        $(".bg-screen").removeClass('active');
        $("body").removeClass('hidden');
    });

    /*====================================
        bg-screen js
    ====================================*/
    $(".bg-screen").on("click", function() {
        $(this).removeClass('active');
        $(".main-menu-area").removeClass('active');
        $("#cart-drawer").removeClass('active');
        $("body").removeClass('hidden');
        });
        $('#trigger-overlay').on('click', function(){
        $(".overlay").addClass('open'); 
    });

    $('.overlay-close').on('click', function(){
        $(".overlay").removeClass('open');  
    });
    
    /*===================================
        product-short js
    ===================================*/
    $('.product-short a.short-title-lg').on('click', function () {
        if ($('#select-wrap').hasClass('active')) {
            $('#select-wrap').removeClass('active');
            $(this).removeClass('active');
        }
        else {
            $('#select-wrap').addClass('active');
            $(this).addClass('active');
        }
    });

    /*========================================== 
        Minus and Plus Btn js
    ==========================================*/
    $('.dec').on("click",function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    
    $('.inc').on("click",function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    
    /*============================== 
        quickview slider js
    ==============================*/
    var galleryThumbs = new Swiper(".gallery-thumbs", {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 4,
        thumbs: {
            swiper: galleryTop,
        },
    });
    var galleryTop = new Swiper(".gallery-top", {
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".quick-next",
            prevEl: ".quick-prev",
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    /*===================================
        range slider js
    ===================================*/
    if($('#range1').length){
        var slider1 = document.getElementById("range1");
        var slider2 = document.getElementById("range2");
        var output1 = document.getElementById("demo1");
        var output2 = document.getElementById("demo2");
        output1.innerHTML = slider1.value;
        output2.innerHTML = slider2.value;

        slider1.oninput = function() {
            output1.innerHTML = slider1.value;
        }
        slider2.oninput = function() {
            output2.innerHTML = slider2.value;
        }
    }

    /*====================================
       home-1  text-replace js
    ====================================*/
    if($('ul.offer-text-ul li.offer-text-li').length){  
        addEventListener('DOMContentLoaded', (event) => {
            var slides = document.querySelectorAll('ul.offer-text-ul li.offer-text-li');
            var currentSlide = 0;
            var slideInterval = setInterval(nextSlide, 3000);
            function nextSlide(){
              slides[currentSlide].className = 'offer-text-li';
              currentSlide = (currentSlide+1)%slides.length;
              slides[currentSlide].className = 'offer-text-li show';
            }
        }); 
    }  

    /*==============================
        read-agree js
    ==============================*/
    $('label.box-area, .read-agree').on('click', function () {
        if($('.cust-checkbox, .create-checkbox').is(':checked')) {
            $('.checkout, .create').removeClass('disabled');
        }
        else {
            $('.checkout, .create').addClass('disabled');
        }
    });

    /*===================================
        product-grid js
    ===================================*/
    $('.list-change-view').on("click",function () {
        event.preventDefault();
        var data_grid = $(this).attr('data-grid-view');
        if ($('.special-product').hasClass('grid-1') || 
            $('.special-product').hasClass('grid-2') || 
            $('.special-product').hasClass('grid-3') || 
            $('.special-product').hasClass('grid-4')) 
        {
            $('.special-product').removeClass('grid-1');
            $('.special-product').removeClass('grid-2');
            $('.special-product').removeClass('grid-3');
            $('.special-product').removeClass('grid-4');
            $('.special-product').addClass('grid-'+data_grid);
        }
        else {
            $('.special-product').addClass('grid-'+data_grid);
        }
    });
    $('.list-change-view').on("click",function () {
        $('.list-change-view').removeClass('active');
        $(this).addClass('active');
    });
    
    /*==============================
        vega menu slider js
    ==============================*/
    var swiper = new Swiper('#vega-menu-slider', {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: 'row' | 'column',
      },
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,navigation: {
        nextEl: '.swiper-prev-vega',
        prevEl: '.swiper-next-vega',
      },
      pagination: {
        el: ".swiper-pagination-vega",
        clickable: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      speed: 1000,
        breakpoints: {
            1199: {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30,
            },
            1499: {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30,
            }
        }
    });

    /*====================================
        home3 text-offer js
    ====================================*/
    if($('.offer-ul .offer-li p').length){
        addEventListener('DOMContentLoaded', (event) => {
            var slides = document.querySelectorAll('.offer-ul .offer-li p');
            var currentSlide = 0;
            var slideInterval = setInterval(nextSlide,3000);
            function nextSlide(){
              slides[currentSlide].className = 'p';
              currentSlide = (currentSlide+1)%slides.length;
              slides[currentSlide].className = 'p active';
            }
        });
    }

    /*====================================
        home-6 text-replace js
    ====================================*/
    if($('#replace').length){
        addEventListener('DOMContentLoaded', (event) => {
            var win = $(window),
                foo = $('#replace');
                foo.typer(['Bluetooth.','Wireless.','Wire.']);
                win.resize(function(){
                var fontSize = Math.max(Math.min(win.width() / (1 * 10), parseFloat(Number.POSITIVE_INFINITY)), parseFloat(Number.NEGATIVE_INFINITY));
            }).resize();
        });
    }

    /*====================================
       home6 notification-close-btn js
    ====================================*/
    $(".notification-close-btn").on("click", function() {
        $('#notification-bar').slideToggle();
    });

    /*===================================
        product-grid js
    ===================================*/
    $('.list-change-view').on("click",function () {
        event.preventDefault();
        var data_grid = $(this).attr('data-grid-view');
        if ($('.special-product').hasClass('grid-1') || 
            $('.special-product').hasClass('grid-2') || 
            $('.special-product').hasClass('grid-3') || 
            $('.special-product').hasClass('grid-4')) 
        {
            $('.special-product').removeClass('grid-1');
            $('.special-product').removeClass('grid-2');
            $('.special-product').removeClass('grid-3');
            $('.special-product').removeClass('grid-4');
            $('.special-product').addClass('grid-'+data_grid);
        }
        else {
            $('.special-product').addClass('grid-'+data_grid);
        }
    });
    $('.list-change-view').on("click",function () {
        $('.list-change-view').removeClass('active');
        $(this).addClass('active');
    });

    /*==============================
        home-slider js
    ==============================*/
    var owl = $('#home-slider');
    jQuery(document).ready(function() {
        owl.owlCarousel({
            loop: true,
            items: 1,
            rewind: true,
            margin: 0,
            nav: false,
            navText: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
            dots: true,
            fade: true,
            singleItem: true,
            animateOut: 'fadeOut',
            autoplay: true,            
            autoplayTimeout: 10000,
            autoplayHoverPause: false,
            autoplaySpeed: 250,
        });
        $('#home-slider .owl-dot')[0].innerHTML = '<div class="inner"></div><div class="bar left-bar"><div class="progress-wrap"></div></div><div class="bar right-bar"><div class="progress-wrap"></div></div>';
        owl.owlCarousel();
        owl.on('changed.owl.carousel', function() {
            
            owl.trigger('stop.owl.autoplay');
            owl.trigger('play.owl.autoplay');
            
            var buttons = $('.owl-dot');
            for(var button of buttons) {
                if(button.classList.contains('active')) {
                    button.innerHTML = '<div class="inner"></div><div class="bar left-bar"><div class="progress-wrap"></div></div><div class="bar right-bar"><div class="progress-wrap"></div></div>';
                } else {
                    button.innerHTML = '<span></span>';
                }
            }
        });
    });

    /*====================================
        home2 / home3 home-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#home-slider2, .swiper#home-slider3', {
        loop: false,
        rewind: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        speed: 500,
        effect: 'fade',
        navigation: {
            prevEl: '.swiper-prev-home-slider',
            nextEl: '.swiper-next-home-slider'
        },
        pagination: {
            el: ".swiper-pagination-home-slider",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*====================================
        home4 slider js
    ====================================*/
    $('#homeslider4').owlCarousel({
        loop: false,
        items: 1,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
        }
    });

    /*====================================
        home5-slider js
    ====================================*/
    $('#homeslider5').owlCarousel({
        loop: false,
        items: 1,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
        }
    });

    /*====================================
        home6 slider js
    ====================================*/
    $('#homeslider6').owlCarousel({
        loop: false,
        items: 1,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
        }
    });

    /*====================================
        home7-slider js
    ====================================*/
    $('#homeslider7').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
            autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true
        },
       responsive: {
        }
    });
    $('.owl-nav').addClass('container');
    $('.owl-dots').addClass('container');

    /*====================================
        home-8 home-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#home8-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-homeslider8',
            nextEl: '.swiper-next-homeslider8'
        },
        pagination: {
            el: ".swiper-pagination-homeslider8",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*====================================
        home-9 home-slider js
    ====================================*/
    $('#home9-slider').owlCarousel({
        loop: true,
        items: 1,
        rewind: true, 
        margin: 30,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],    
    });
    
    /*==============================
      home-1 category-slider js
    ==============================*/
    var swiper = new Swiper('#slider-category', {
        grid: {
            rows: 1,
            fill: 'row' | 'column',
        },
          spaceBetween: 30,
          observer: true,
          observeParents: true,
          watchSlidesProgress: true,
          navigation: {
            nextEl: '.swiper-category-prev',
            prevEl: '.swiper-category-next',
        },
          pagination: {
            el: ".swiper-pagination-category",
            clickable: true
        },
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
        },
        speed: 1000,
        breakpoints: {
            0: {
              slidesPerView: 1,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            320: {
              slidesPerView: 1,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            360: {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            540: {
              slidesPerView: 3,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            640: {
              slidesPerView: 4,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 12
            },
            768: {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1199: {
              slidesPerView: 4,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1299: {
              slidesPerView: 4,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1399: {
              slidesPerView: 5,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            },
            1499: {
              slidesPerView: 5,
              grid: {
                rows: 1,
                fill: 'row' | 'column',
              },
              spaceBetween: 30
            }
        }
    });

   /*====================================
      home-2 category-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#cat-slider',  {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-cat',
            nextEl: '.swiper-next-cat'
        },
        pagination: {
            el: ".swiper-pagination-cat",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        home-3 category-slider  js
    ====================================*/
    var swiper = new Swiper('.swiper#category-slider', {
        loop: false,
        slidesPerView: 6,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-category',
            nextEl: '.swiper-next-category'
        },
        pagination: {
            el: ".swiper-pagination-category",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 5,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 5,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 6,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 6,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-7 category-slider  js
    ====================================*/
    var swiper = new Swiper('.swiper#cat-slider7', {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        navigation: {
            prevEl: '.swiper-prev-cat7',
            nextEl: '.swiper-next-cat7'
        },
        pagination: {
            el: ".swiper-pagination-cat7",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        home-8 category-slider js
    ====================================*/
    var swiper = new Swiper('.swiper#cat-slider8', {
        loop: false,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-cat8',
            nextEl: '.swiper-next-cat8'
        },
        pagination: {
            el: ".swiper-pagination-cat8",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

     /*====================================
       home-1 product  js
    ====================================*/
    var swiper = new Swiper('.swiper#Trending-product, #Featured-product', {
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-Trending, .swiper-prev-Featured',
            nextEl: '.swiper-next-Trending, .swiper-prev-Featured'
        },
        pagination: {
            el: ".swiper-pagination-Trending, .swiper-pagination-Featured",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1399: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-2 tab-product js
    ====================================*/
    // new-product tab js
    var swiper = new Swiper('.swiper#new-product', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new',
            nextEl: '.swiper-next-new'
        },
        pagination: {
            el: ".swiper-pagination-new",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product tab js
    var swiper = new Swiper('.swiper#best-product', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product tab js
    var swiper = new Swiper('.swiper#feature-product', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature',
            nextEl: '.swiper-next-feature'
        },
        pagination: {
            el: ".swiper-pagination-feature",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-3 tab-product js
    ====================================*/
    // new-product tab js
    var swiper = new Swiper('.swiper#new-product1', {
        loop: false,
        rewind: true,
        slidesPerView: 5,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new',
            nextEl: '.swiper-next-new'
        },
        pagination: {
            el: ".swiper-pagination-new",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 5,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product tab js
    var swiper = new Swiper('.swiper#best-product1', {
        loop: false,
        rewind: true,
        slidesPerView: 5,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 5,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product tab js
    var swiper = new Swiper('.swiper#feature-product1', {
        loop: false,
        rewind: true,
        slidesPerView: 5,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature',
            nextEl: '.swiper-next-feature'
        },
        pagination: {
            el: ".swiper-pagination-feature",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 5,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-7 tab-product  js
    ====================================*/
    // new-product tab js
    var swiper = new Swiper('.swiper#new-product2', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new2',
            nextEl: '.swiper-next-new2'
        },
        pagination: {
            el: ".swiper-pagination-new2",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1399: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product tab js
    var swiper = new Swiper('.swiper#best-product2', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best2',
            nextEl: '.swiper-next-best2'
        },
        pagination: {
            el: ".swiper-pagination-best2",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1399: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product tab js
    var swiper = new Swiper('.swiper#feature-product2', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature2',
            nextEl: '.swiper-next-feature2'
        },
        pagination: {
            el: ".swiper-pagination-feature2",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1399: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // advance-tab tab js
    var swiper = new Swiper('.swiper#advance-product2', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-advance2',
            nextEl: '.swiper-next-advance2'
        },
        pagination: {
            el: ".swiper-pagination-advance2",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1399: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1499: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-7 tab-offer  js
    ====================================*/
    // new-product tab js
    var swiper = new Swiper('.swiper#new-offer', {
        loop: false,
        rewind: true,
        slidesPerView: 2,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new',
            nextEl: '.swiper-next-new'
        },
        pagination: {
            el: ".swiper-pagination-new",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1399: {
                    slidesPerView: 1,
                    grid: {
                        rows: 2,
                        fill: 'row' | 'column'
                    },
                    spaceBetween: 30
            },
            1599: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                        fill: 'row' | 'column'
                    },
                    spaceBetween: 30
            }
        }
    });

    // best-product tab js
    var swiper = new Swiper('.swiper#best-offer', {
        loop: false,
        rewind: true,
        slidesPerView: 2,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best',
            nextEl: '.swiper-next-best'
        },
        pagination: {
            el: ".swiper-pagination-best",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1399: {
                    slidesPerView: 1,
                    grid: {
                        rows: 2,
                        fill: 'row' | 'column'
                    },
                    spaceBetween: 30
            },
            1599: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                        fill: 'row' | 'column'
                    },
                    spaceBetween: 30
            }
        }
    });

    // feature-product tab js
    var swiper = new Swiper('.swiper#feature-offer', {
        loop: false,
        rewind: true,
        slidesPerView: 2,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature',
            nextEl: '.swiper-next-feature'
        },
        pagination: {
            el: ".swiper-pagination-feature",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1399: {
                    slidesPerView: 1,
                    grid: {
                        rows: 2,
                        fill: 'row' | 'column'
                    },
                    spaceBetween: 30
            },
            1599: {
                    slidesPerView: 2,
                    grid: {
                        rows: 2,
                        fill: 'row' | 'column'
                    },
                    spaceBetween: 30
            }
        }
    });

    /*====================================
       home-8 tab-product  js
    ====================================*/
    // new-product tab js
    var swiper = new Swiper('.swiper#new-product8, .swiper#Latest-product', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-new8, .swiper-prev-Latest',
            nextEl: '.swiper-next-new8, .swiper-next-Latest'
        },
        pagination: {
            el: ".swiper-pagination-new8, .swiper-pagination-Latest",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // best-product tab js
    var swiper = new Swiper('.swiper#best-product8', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-best8',
            nextEl: '.swiper-next-best8'
        },
        pagination: {
            el: ".swiper-pagination-best8",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // feature-product tab js
    var swiper = new Swiper('.swiper#feature-product8', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-feature8',
            nextEl: '.swiper-next-feature8'
        },
        pagination: {
            el: ".swiper-pagination-feature8",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    // advance-tab tab js
    var swiper = new Swiper('.swiper#advance-product8', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-advance8',
            nextEl: '.swiper-next-advance8'
        },
        pagination: {
            el: ".swiper-pagination-advance8",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        special-product js
    ====================================*/
    var swiper = new Swiper('.swiper#special-product', {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-special',
            nextEl: '.swiper-next-special'
        },
        pagination: {
            el: ".swiper-pagination-special",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-3 special-product  js
    ====================================*/
    var swiper = new Swiper('.swiper#special-product1', {
        loop: false,
        slidesPerView: 5,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-special',
            nextEl: '.swiper-next-special'
        },
        pagination: {
            el: ".swiper-pagination-special",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 5,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        home-8 special-product js
    ====================================*/
    var swiper = new Swiper('.swiper#special-product8', {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-special8',
            nextEl: '.swiper-next-special8'
        },
        pagination: {
            el: ".swiper-pagination-special8",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-2 day-deal js
    ====================================*/
    var swiper = new Swiper('.swiper#deal-slider', {
        loop: false,
        slidesPerView: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-deal',
            nextEl: '.swiper-next-deal'
        },
        pagination: {
            el: ".swiper-pagination-deal",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
        home-7 day-deal js
    ====================================*/
    var swiper = new Swiper('.swiper#deal-slider1', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-deal',
            nextEl: '.swiper-next-deal'
        },
        pagination: {
            el: ".swiper-pagination-deal",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-9 day-deal js
    ====================================*/
    var swiper = new Swiper('.swiper#deal-slider9', {
        loop: false,
        slidesPerView: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-deal8',
            nextEl: '.swiper-next-deal8'
        },
        pagination: {
            el: ".swiper-pagination-deal8",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       blog-1  js
    ====================================*/
    $('#blog-slider').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*====================================
        home-6 blog js
    ====================================*/
    $('#blog-slider, #blog6').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 3,
                margin: 30
            }
        }
    });

    /*====================================
       home-4 blog js 
    ====================================*/
    $('#blog-slider4').owlCarousel({
        loop: false,
        items: 4,
        margin: 30,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 3,
                margin: 30
            },
            1199 : {
                items: 4,
                margin: 30
            }
        }
    });

    /*====================================
        home-5 blog js 
    ====================================*/
    $('#blog-slider5').owlCarousel({
        loop: false,
        items: 2,
        margin: 30,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 2,
                margin: 30
            },
            1199 : {
                items: 2,
                margin: 30
            }
        }
    });

    /*====================================
        home-7 blog js 
    ====================================*/
    $('#blog-slider7').owlCarousel({
        loop: false,
        items: 2,
        margin: 30,
        nav: true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: true,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 1,
                margin: 12
            },
            768 : {
                items: 1,
                margin: 30
            },
            979 : {
                items: 1,
                margin: 30
            },
            1199 : {
                items: 2,
                margin: 30
            }
        }
    });

    /*====================================
        home-1 /home-3 / home-4 brand-logo js
    ====================================*/
    $('#brand-logo, #brand-logo3, #brand-logo4').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        nav: false,
        navText : ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1299 : {
                items: 5,
                margin: 30
            },
            1399 : {
                items: 6,
                margin: 30
            },
            1499 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*====================================
        home-5 / home-6 brand-logo js
    ====================================*/
    $('#brand-logo5, #brand-logo6').owlCarousel({
        loop: true,
        items: 5,
        margin: 30,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            }
        }
    });

    /*====================================
        home-7 js 
    ====================================*/
    $('#brand-logo7').owlCarousel({
        loop: true,
        items: 4,
        margin: 30,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 30
            },
            979 : {
                items: 3,
                margin: 30
            },
            1199 : {
                items: 4,
                margin: 30
            }
        }
    });

    /*====================================
       home-8 brand-logo js 
    ====================================*/
    $('#brand-logo8').owlCarousel({
        loop: true,
        items: 4,
        margin: 30,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 2,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 3,
                margin: 30
            },
            1199 : {
                items: 4,
                margin: 30
            }
        }
    });

    /*====================================
       home-9 blog js 
    ====================================*/
    $('#brand-logo9').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 4,
                margin: 12
            },
            768 : {
                items: 4,
                margin: 30
            },
            979 : {
                items: 5,
                margin: 30
            },
            1199 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*====================================
        home-1 brand-logo js
    ====================================*/
    $('#brand-logo').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        nav: false,
        navText : ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1299 : {
                items: 5,
                margin: 30
            },
            1399 : {
                items: 6,
                margin: 30
            },
            1499 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*====================================
       home-1 test-slider  
    ====================================*/
    var swiper = new Swiper('.swiper#test-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 2,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-test',
            nextEl: '.swiper-next-test'
        },
        pagination: {
            el: ".swiper-pagination-test",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================
       home-6 / home-9 test-slider  
    ====================================*/
    $('#test-slider6, #testi-slider9').owlCarousel({
        loop: true,
        rewind: false,
        items: 1,
        margin: 0,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        singleItem : true,
        animateOut: 'fadeOut',
        autoplay: false,
        autoplayTimeout: 5000,
        responsive:{
        }     
    });

    /*==================================
        home-7 testimonial js
    ====================================*/
    var swiper = new Swiper('.swiper#testi-slider7', {
        loop: false,
        rewind: true,
        slidesPerView: 4,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-testi6',
            nextEl: '.swiper-next-testi6'
        },
        pagination: {
            el: ".swiper-pagination-testi6",
            clickable: true
        },
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 250,
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1599: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*====================================  
        home-4 product details 
    ====================================*/
    $('.home-pro-info-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        navText: ['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive:{
          0:{
            items:3
          },
          600:{
            items:4
          },
          1000:{
            items:4
          }
        }
    });
    $('.home-product-info .nav-item .nav-link').on( "click", function() {
        $('.home-product-info .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    /*==============================
        home-1 instagram-slider js
    ==============================*/
    $('#instagram-slider').owlCarousel({
        loop: false,
        items: 6,
        margin: 30,
        rewind: true,
        nav: false,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0 : {
                items: 2,
                margin: 12
            },
            479 : {
                items: 2,
                margin: 12
            },
            540 : {
                items: 3,
                margin: 12
            },
            640 : {
                items: 3,
                margin: 12
            },
            768 : {
                items: 3,
                margin: 30
            },
            979 : {
                items: 4,
                margin: 30
            },
            1199 : {
                items: 5,
                margin: 30
            },
            1399 : {
                items: 6,
                margin: 30
            }
        }
    });

    /*====================================
        home-9 home-service js
    ====================================*/
    $('#home-service').owlCarousel({
        loop: true,
        items: 2,
        margin: 10,
        nav: false,
        navText : ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0 : {
                items: 1,
                margin: 12
            },
            479 : {
                items: 1,
                margin: 12
            },
            540 : {
                items: 1,
                margin: 12
            },
            640 : {
                items: 2,
                margin: 12
            },
            768 : {
                items: 2,
                margin: 10
            },
            979 : {
                items: 2,
                margin: 10
            },
            1199 : {
                items: 2,
                margin: 10
            }
        }
    });

    /*====================================
       animation  js
    ====================================*/
    WT.animateTemplate = {
        aDelay: 100,
        aQueue: [],
        aTimer: null,
        aBody: null,
        init: function() {
            var $at = this;
            $at.aBody = $body;
            $at.aQueue = [];
            $at.aTimer = null;
            if(typeof aDelay !== 'undefined') {
                $at.aDelay = aDelay;
            }
            $at.aQueue["animate__animated_0"] = [];
            $body.find("#main-content").find(">div,>section").each(function(index) {
                $(this).attr("data-animated-id", (index + 1));
                $at.aQueue["animate__animated_" + (index + 1)] = [];
            });
            setTimeout(function() {
                $at.registerAnimation();
            }, 200);
        },
        registerAnimation: function() {
            var $at = this;
            $("[data-animate]:not(.animate__animated)", $at.aBody).waypoint(function() {
                var $at_el = this.element ? this.element : this,
                    $this = $($at_el);
                if($this.is(":visible")) {
                    var $at_animated_wrap = $this.closest("[data-animated-id]"),
                        $at_animated_id = '0';
                    if($at_animated_wrap.length) {
                        $at_animated_id = $at_animated_wrap.data("animated-id");
                    }
                    $at.aQueue["animate__animated_" + $at_animated_id].push($at_el);
                    $at.processItemQueue();
                } else {
                    $this.addClass($this.data("animate")).addClass("animate__animated");
                }
            }, {
                offset: '90%',
                triggerOnce: true
            });
        },
        processItemQueue: function() {
            var $at = this;
            if($at.aTimer) {
                return;
            }
            $at.aTimer = window.setInterval(function() {
                var $at_queue = false;
                for(var $at_animated_id in $at.aQueue) {
                    if($at.aQueue[$at_animated_id].length) {
                        $at_queue = true;
                        break;
                    }
                }
                if($at_queue) {
                    for(var $at_animated_id in $at.aQueue) {
                        var $at_item = $($at.aQueue[$at_animated_id].shift());
                        $at_item.addClass($at_item.data("animate")).addClass("animate__animated");
                    }
                    $at.processItemQueue();
                } else {
                    window.clearInterval($at.aTimer);
                    $at.aTimer = null
                }
            }, $at.aDelay);
        }
    };
       WT.animateTemplate.init();

    /*====================================
        product-style-1 js  
    ====================================*/
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small',
        adaptiveHeight: true,
    });
    $('.slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big',
            responsive: [{
              breakpoint: 480,
              settings: {
                slidesToShow: 3
            }
        }]
    });

    /*====================================
        product-style-2 js  
    ====================================*/
    $('.style2-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.style2-slider-small',
        adaptiveHeight: true,
    });
    $('.style2-slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.style2-slider-big',
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  vertical: false,
                  verticalSwiping: false
                }
            }
        ]
    });

    /*====================================
        product-style-3 js  
    ====================================*/
    $('.style3-slider-small').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: 'calc(33.33% - 30px)',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    centerPadding: '0px',
                }
            }
        ]
    });

    /*====================================
        product-style-4 js  
    ====================================*/
    $('.style4-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.style4-slider-small',
        adaptiveHeight: true,
    });
    $('.style4-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.style4-slider-big',
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  vertical: false,
                  verticalSwiping: false
                }
            }
        ]
    });

    /*====================================
        product-style-5 js  
    ====================================*/
    $('.style5-slider-small').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: true,
        focusOnSelect: true,
    });

    /*====================================
        product-style-6 js  
    ====================================*/
    $('.slider-big-6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small-6',
        adaptiveHeight: true,
    });
    $('.slider-small-6').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big-6',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    /*====================================
        product-style-7 js  
    ====================================*/
    $('.slider-big-7').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small-7',
        adaptiveHeight: true,
    });
    $('.slider-small-7').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big-7',
            responsive: [{
            breakpoint: 480,
                settings: {
                slidesToShow: 3
            }
        }]
    });
    
})(jQuery);



