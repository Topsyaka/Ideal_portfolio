'use strict';

var serviceButton = document.querySelectorAll('.service_block .grey_btn');

for (var i = 0; i < serviceButton.length; i++) {
    serviceButton[i].addEventListener('click', function() {
        addClass(this.closest('.service_block'), 'flip');
        addClass(this.closest('.services_block'), 'blur');
    });
};

var closeIcon = document.querySelectorAll('.icon-close');

for (var i = 0; i < closeIcon.length; i++) {
    closeIcon[i].addEventListener('click', function() {
        removeClass(this.closest('.service_block'), 'flip');
        removeClass(this.closest('.services_block'), 'blur');
    });
};

var iconDown = document.querySelectorAll('.main_banner .icon-scroll-down');

for (var i = 0; i < iconDown.length; i++) {
    iconDown[i].addEventListener('click', function() {
        scrollToElement('.services_block', 1000);
    })
}

var filterItem = document.querySelectorAll('.filter_list li');

for (var i = 0; i < filterItem.length; i++) {
    filterItem[i].addEventListener('click', function() {
        this.toggleClass('selected');
    })
}

var mySwiper = new Swiper('.development_slider_block', {
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

var wordSwiper = new Swiper('.clients_testimonials', {
    loop: false,
    mousewheelControl: true,
    mousewheelReleaseOnEdges: true,
    pagination: '.pagination',
    nextButton: '.next_btn',
    prevButton: '.prev_btn',
    paginationClickable: true
});

var projectSwiper = new Swiper('.projects_slider', {
    slidesPerView: 3,
    loop: true,
    grabCursor: true,
    pagination: '.portfolio-pagination',
    paginationClickable: true
});

var formInputs = document.querySelectorAll('.form_element');

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('focus', function() {
        this.closest('.form_field').classList.add('onfocus');
    });

    formInputs[i].addEventListener('blur', function() {
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
var mySwiper = new Swiper('.contest_slider_block', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    loop: true

});
var mySwiper = new Swiper('.designer_portfolios_slider', {
    pagination: '#designer-portfolio-pagination',
    paginationClickable: true,
    initialSlide: 3,
    spaceBetween: 120,
    loop: true

});
var mySwiper = new Swiper('.iphone_app_slider', {
    pagination: '#ios-app-pagination',
    paginationClickable: true,
    initialSlide: 3,
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
var mySwiper = new Swiper('.lexi_ipad_slider', {
    initialSlide: 3,
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



var mySwiper = new Swiper('.ideal-slider', {
    //pagination: '#designer-portfolio-pagination',
    //paginationClickable: true,
    //initialSlide: 1,
    spaceBetween: 120,
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1
   // effect:"cube"

});


var mySwiper = new Swiper('.iphone_app_slider', {
    pagination: '#ios-app-pagination',
    paginationClickable: true,
    initialSlide: 3,
    spaceBetween: 65,
    loop: true

});

var scroll = 0;

function AnimatedElem(className, animationClass) {
    this.className = className;
    this.animationClass = animationClass;
    this.offTop = document.querySelector(className).offsetTop;
    this.height = document.querySelector(className).offsetHeight;
    var elem = document.querySelector(this.className);
    elem.classList.add('lexi_invisible');
}


function AnimateInnerElements(className, innerClass ) {

}



AnimatedElem.prototype.animate = function(scrollTop,callback) {
    // Get elem
    var elem = document.querySelector(this.className);
    if (elem && scrollTop>0) {
        if ((this.offTop - 400 <= scrollTop) && (this.height)) {
            elem.classList.add('animated');
            elem.classList.add('lexi_visible');
            elem.classList.add(this.animationClass);
        }
    }else if(elem){
        // Get elem
        var elem = document.querySelector(this.className);

        elem.classList.add('animated');
        elem.classList.add('lexi_visible');
        elem.classList.add(this.animationClass);
    }
    //console.log(elem);
    elem.addEventListener("animationend",callback,false);
    //return callback();
    //elem.classList.add('bounce');
}


if (document.querySelectorAll(".lexi_header_image").length >0){
    var elem1 = new AnimatedElem('.lexi_header_image','slideInLeft');
    var elem2 = new AnimatedElem('.lexi_right_part_text','slideInRight');
    var elem3 = new AnimatedElem('.lexi_fourth_part_container .first','flip');
    var pict_left = new AnimatedElem('.lexi-col-3.first','slideInLeft');
    var pict_right = new AnimatedElem('.lexi-col-3.third','slideInRight');
    var pict_bottom = new AnimatedElem('.lexi-col-3.second','slideInUp');
    var bottom_pict_left = new AnimatedElem(".lexi_seventh_part_container .lexi_left_part",'slideInLeft');
    var bottom_pict_right = new AnimatedElem(".lexi_seventh_part_container .lexi_right_part",'zoomInDown');
    window.onscroll = function(){
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        //console.log(scrolled);

        //console.log(elem2.offTop);
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
    window.onload = function () {
        var elem1 = new AnimatedElem('.lexi_header_image','.bounce');
        //console.log(scroll+' '+elem1.offTop);
        if(elem1.offTop == scroll){
            elem1.animate();
        }

    }
}

if (document.querySelectorAll(".ideal_header").length >0) {
    var elem1 = new AnimatedElem('.ideal-absolute-image-devices', 'slideInLeft');
    //var elem2 = new AnimatedElem('.ideal-absolute-image-devices img','slideInLeft');
    var subElem = new AnimatedElem('.absolute_bottom_image img.first', 'zoomInDown');
    var subElemSecond = new AnimatedElem('.absolute_bottom_image img.second', 'slideInUp');
    var subElemThird = new AnimatedElem('.absolute_bottom_image img.third', 'slideInRight');
    var coverBlockThirdBlock = new AnimatedElem(".ideal-third-block .ideal_cover_block", "slideInRight");
    var fourthBlock = new AnimatedElem(".ideal-fourth-block .image_block_right", "slideInRight");

    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        //console.log(scrolled);
        var parentElement = document.querySelector(".ideal-second-block");
        //Get parent elem top offset
        var parentOffset = parentElement.offsetTop + 300;
        if (scrolled > parentOffset) {
            console.log(scrolled);
            subElem.animate(0, function () {
                subElemSecond.animate(0, function () {
                    subElemThird.animate();
                });
            });
        }
        var parentSecond = document.querySelector(".ideal-third-block");
        var parentOffsetSec = parentSecond.offsetTop;
        if (scrolled > parentOffsetSec - 300) {
            coverBlockThirdBlock.animate(0);
        }


        //===
        //console.log(elem2.offTop);
        // console.log(scroll+' '+elem1.offTop);
        //bottom_pict_right.animate(scrolled);
        //bottom_pict_left.animate(scrolled);
        elem1.animate(scrolled);
        fourthBlock.animate(scrolled);
        //elem2.animate(scrolled);
        subElem.animate(scrolled);
        subElemSecond.animate(scrolled);
        subElemThird.animate(scrolled);
        // pict_bottom.animate(scrolled);
    }
    window.onload = function () {
        var elem1 = new AnimatedElem('.ideal-absolute-image-devices', '.bounce');
        //console.log(scroll+' '+elem1.offTop);
        if (elem1.offTop == scroll) {
            elem1.animate();
        }

    }
}

var dragableModule = (function(){
    //Dragable function

    function DragableElement(object) {
        var element_id = object.id;
        var element = document.getElementById(element_id);
        var dragableContainer = element.parentElement;
        var coverTop = document.querySelector(object.coverSelector);
        var containerWidth = parseInt(getComputedStyle(dragableContainer).width);
        var sliderElementWidth = parseInt(getComputedStyle(element).width);
        var elemCont = document.querySelector(".ideal-container");
        var contOffset = elemCont.offsetLeft;
        /*element.style.left = object.startPosition;
        coverTop.style.width = object.startPosition;*/

        element.onmousedown = function(e){
            //console.log(e);
            //console.log(dragableContainer.offsetX);
            //console.log(containerWidth-sliderElementWidth/2);
            //console.log(e);
            dragableContainer.onmousemove = function(evt){
                //console.log(e);
                moveAt(evt);

            }
            //console.log(e.pageX+dragableContainer.offsetX);

            element.onmouseup = function() {
                dragableContainer.onmousemove = null;
                element.onmouseup = null;
            }
            /*dragableContainer.onmouseout = function(){
             dragableContainer.onmousemove = null;
             element.onmouseup = null;
             }*/

        }

        //Mobile
        var startx ;
        element.addEventListener('touchstart',function(e){
            console.log(e);
            var touchobj =e.changedTouches[0];
            startx = parseInt(touchobj.clientX)
        });

        dragableContainer.addEventListener('touchmove', function(e){
            var touchobj = e.changedTouches[0] // reference first touch point for this event
            var dist = parseInt(touchobj.clientX) - startx // calculate dist traveled by touch point
            // move box according to starting pos plus dist
            // with lower limit 0 and upper limit 380 so it doesn't move outside track:
            moveAt({
                pageX: dist
            })
            // element.style.left = ( (element.offsetLeft + dragableContainer.offsetWidth > dragableContainer.offsetWidth)? dragableContainer.offsetWidth : (element.offsetLeft + dist < 0)? 0 : element.offsetLeft + dist ) + 'px'
            e.preventDefault()
        }, false)

        element.addEventListener('touchend',function(){
            // dragableContainer.addEventListener('touchmove',false);
            // element.addEventListener('touchstart',false);
        })

        element.onmousedown = function(e){
            console.log(e);
            console.log(dragableContainer.offsetX);
            console.log(containerWidth-sliderElementWidth/2);
            //console.log(e);
            dragableContainer.onmousemove = function(evt){
                //console.log(e);
                moveAt(evt);

            }
            //console.log(e.pageX+dragableContainer.offsetX);

            element.onmouseup = function() {
                dragableContainer.onmousemove = null;
                element.onmouseup = null;
            }
            /*dragableContainer.onmouseout = function(){
             dragableContainer.onmousemove = null;
             element.onmouseup = null;
             }*/

        }

        function moveAt(e) {
            //console.log(e.pageX);
            //console.log((e.pageX+dragableContainer.offsetX) - element.offsetWidth / 2);
            //console.log((containerWidth-sliderElementWidth/2)+dragableContainer.offsetX)

            if(e.pageX < (dragableContainer.offsetLeft + containerWidth+contOffset) && e.pageX>= dragableContainer.offsetLeft+contOffset){
                element.style.left = (e.pageX) - dragableContainer.offsetLeft- element.offsetWidth / 2 - contOffset + 'px';
                console.log(dragableContainer.offsetLeft)
                coverTop.style.width = (e.pageX) - dragableContainer.offsetLeft - contOffset + 'px';
            }else{
                element.style.left = containerWidth - element.offsetWidth / 2 + 'px';
                coverTop.style.width = "100%";
            }

            //element.style.top = e.pageY - element.offsetHeight / 2 + 'px';
        }

        element.ondragstart = function() {
            return false;
        };

    }
    return {
        DragableElement: DragableElement
    };
}());

var drag = new dragableModule.DragableElement({
    id:"drag",
    coverSelector:".cover_block_slider",
    startPosition: "50%"
});







