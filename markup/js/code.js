'use strict';

var serviceButton = document.querySelectorAll('.service_block .grey_btn');

for (var i = 0; i < serviceButton.length; i++) {
    serviceButton[i].addEventListener('click', function () {
        addClass(this.closest('.service_block'), 'flip');
        addClass(this.closest('.services_block'), 'blur');
    });
};

var closeIcon = document.querySelectorAll('.icon-close');

for (var i = 0; i < closeIcon.length; i++) {
    closeIcon[i].addEventListener('click', function () {
        removeClass(this.closest('.service_block'), 'flip');
        removeClass(this.closest('.services_block'), 'blur');
    });
};

var iconDown = document.querySelectorAll('.main_banner .icon-scroll-down');

for (var i = 0; i < iconDown.length; i++) {
    iconDown[i].addEventListener('click', function () {
        scrollToElement('.services_block', 1000);
    })
}

var filterItem = document.querySelectorAll('.filter_list li');

for (var i=0; i < filterItem.length; i++) {
    filterItem[i].addEventListener('click', function () {
        this.toggleClass('selected');
    })
}

var mySwiper = new Swiper ('.development_slider_block', {
    loop: false,
    pagination: '.swiper-pagination',
    mousewheelControl: true,
    mousewheelReleaseOnEdges: true,
    onSlideNextStart: function(elem) {
        var layoutsBlock = document.querySelector('.layouts_block');
        if (elem.activeIndex == 1) {
            addClass(layoutsBlock, 'slide-2');
        } else if (elem.activeIndex == 2) {
            addClass(layoutsBlock, 'slide-2');
            addClass(layoutsBlock, 'slide-3');
        }
    },
    onSlidePrevStart: function(elem) {
        var layoutsBlock = document.querySelector('.layouts_block');
        if (elem.activeIndex == 1) {
            removeClass(layoutsBlock, 'slide-3');
        } else if (elem.activeIndex == 0) {
            removeClass(layoutsBlock, 'slide-2');
            removeClass(layoutsBlock, 'slide-3');
        }
    }
});

var projectSwiper = new Swiper ('.projects_slider', {
    slidesPerView: 3,
    loop: true,
    grabCursor: true
});

var formInputs = document.querySelectorAll('.form_element');

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('focus', function () {
        this.closest('.form_field').classList.add('onfocus');
    });
    
    formInputs[i].addEventListener('blur', function () {
        if (this.value.length === 0) {
            this.closest('.form_field').classList.remove('onfocus');
        }
    });
}

function addClass(elem, className) {
    elem.classList.add(className);
}

function removeClass(elem, className) {
    elem.classList.remove(className);
}

function scrollToElement(elem, speed) {
    var $elem = document.querySelector(elem);

    if ($elem) {
        var elemCoordinates = $elem.getBoundingClientRect();
        var elemTopPosition = elemCoordinates.top + pageYOffset;

        window.scrollTo(0, elemTopPosition);
    }
}

(function() {

    Element.prototype.toggleClass = function(elementClass) {
        var node = this;

        node.classList.toggle(elementClass);

        return null;
    };

})();

(function() {

    if (!Element.prototype.closest) {

        Element.prototype.closest = function(css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }

})(); // closest polyfill
// slider portfolio DC
var mySwiper = new Swiper ('.contest_slider_block', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    loop: true

});
var mySwiper = new Swiper ('.designer_portfolios_slider', {
    pagination: '#designer-portfolio-pagination',
    paginationClickable: true,
    initialSlide:3,
    spaceBetween: 120,    loop: true

});
var mySwiper = new Swiper ('.iphone_app_slider', {
    pagination: '#ios-app-pagination',
    paginationClickable: true,
    initialSlide:3,
    spaceBetween: 65,
    loop: true

});

(function() {

    if (!Element.prototype.closest) {

        Element.prototype.closest = function(css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }

})(); // closest polyfill
// slider portfolio DC
var mySwiper = new Swiper ('.lexi_ipad_slider', {
    initialSlide:3,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 80,

    loop: true,
    breakpoints: {
        // when window width is <= 320px

        // when window width is <= 640px
        640: {
            effect: 'cube'

        }
    }

});



var mySwiper = new Swiper ('.designer_portfolios_slider', {
    pagination: '#designer-portfolio-pagination',
    paginationClickable: true,
    initialSlide:3,
    spaceBetween: 120,    loop: true

});
var mySwiper = new Swiper ('.iphone_app_slider', {
    pagination: '#ios-app-pagination',
    paginationClickable: true,
    initialSlide:3,
    spaceBetween: 65,
    loop: true

});

var scroll = 0;

function AnimatedElem(className, animationClass){
    this.className = className;
    this.animationClass = animationClass;
    this.offTop = document.querySelector(className).offsetTop;
    this.height = document.querySelector(className).offsetHeight;
    var elem = document.querySelector(this.className);
    elem.classList.add('lexi_invisible');
}

AnimatedElem.prototype.animate = function(scrollTop){
    // Get elem
    var elem = document.querySelector(this.className);

    if((this.offTop-400 <= scrollTop) && (this.height)){
        elem.classList.add('animated');
        elem.classList.add('lexi_visible');
        elem.classList.add(this.animationClass);
    }
    //elem.classList.add('bounce');
}

window.onload = function () {
    var elem1 = new AnimatedElem('.lexi_header_image','.bounce');
    console.log(scroll+' '+elem1.offTop);
    if(elem1.offTop == scroll){
        elem1.animate();
    }

}
window.onscroll = function(){
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled);
    var elem1 = new AnimatedElem('.lexi_header_image','slideInLeft');
    var elem2 = new AnimatedElem('.lexi_right_part_text','slideInRight');
    var elem3 = new AnimatedElem('.lexi_fourth_part_container .first','flip');
    var pict_left = new AnimatedElem('.lexi-col-3.first','slideInLeft');
    var pict_right = new AnimatedElem('.lexi-col-3.third','slideInRight');
    var pict_bottom = new AnimatedElem('.lexi-col-3.second','slideInUp');
    var bottom_pict_left = new AnimatedElem(".lexi_seventh_part_container .lexi_left_part",'slideInLeft');
    var bottom_pict_right = new AnimatedElem(".lexi_seventh_part_container .lexi_right_part",'zoomInDown');
    console.log(elem2.offTop);
   // console.log(scroll+' '+elem1.offTop);
    bottom_pict_right.animate(scrolled);
    bottom_pict_left.animate(scrolled);
    elem1.animate(scrolled);
    elem2.animate(scrolled);
    elem3.animate(scrolled);
    pict_left.animate(scrolled);
    pict_right.animate(scrolled);
    pict_bottom.animate(scrolled);
}



// end
