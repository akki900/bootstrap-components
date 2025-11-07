/* ==================================================
 * ==================================================
 *
 *        HEADER JQUERY START
 *
 * ==================================================
 * ================================================== */
/********* Toggle-Menu for Desktop and Mobile-View JQuery Start ***********/
/*This jquery is for All Mobile-view Screen toggle-menu*/
$(document).ready(function()
{
    //$('.mobile-menu').css('display' , 'none');
    //Onclick Open-menu
    $('#toggle-menu').click(function()
    {
        $(this).toggleClass('loc');
        $('.mobile-menu').animate(
        {
            width: 'toggle'
        }, 200);
    });
});

/*This Jquery is for Header-Style-12*/
$(document).ready(function()
{
    $('#toggle-half').on('click', function()
    {
        $(this).toggleClass('loc');
        $('.header-style12 nav').animate(
        {
            width: 'toggle'
        }, 0); // header-style12 and Header-style13
        $('.mobile-menu').css('display', 'block');
    });
});

/*This Jquery is for Header-style15*/
$(document).ready(function()
{
    //$('.header-style15 .menu').css('display' , 'none');
    //Onclick Open-menu
    $('#toggle-mainmenu').click(function()
    {
        $(this).toggleClass('loc');
        $('.menu').animate(
        {
            width: 'toggle'
        }, 200);
        $('.header-style15 .mega-menu ul').css('display', 'block');
    });
});

/* This Jquery is for Header-Style-16 */
$(document).ready(function()
{
    $('.menu').css('display', 'none')
    $('#toggle-full').click(function()
    {
        $(this).toggleClass('loc');
        $('.menu').animate(
        {
            width: 'toggle'
        }, 0);
        //$("ul").removeClass("#mobile");
        $("ul").removeAttr('id');
        //On Escape Key
        $(document).on('keydown', function(e)
        {
            if (e.keyCode === 27)
            {
                if ($(".menu").is(":visible"))
                {
                    $('.header-style16 .menu').fadeOut();
                    $('#toggle-full').removeClass('loc');
                }
            }
        });
    });
});

/* This Jquery is for Header-Style-17 */
$(document).ready(function()
{
    $('#toggle-mleft').click(function()
    {
        $(this).toggleClass('loc');
        $('.menu').animate(
        {
            width: 'toggle'
        }, 500);
    });
    //On Escape Key
    $(document).on('keydown', function(e)
    {
        if (e.keyCode === 27)
        {
            if ($(".menu").is(":visible"))
            {
                //$('.menu').fadeOut();
                $('.header-style17 .menu').animate(
                {
                    width: 'toggle'
                }, 500);
                $('#toggle-mleft').removeClass('loc');
            }
        }
    });
});

/* This Jquery is for Header-Style-18 */
$(document).ready(function()
{
    $('#toggle-mright').click(function()
    {
        $(this).toggleClass('loc');
        $('.menu').animate(
        {
            width: 'toggle'
        }, 500);
    });
    //On Escape Key
    $(document).on('keydown', function(e)
    {
        if (e.keyCode === 27)
        {
            if ($(".menu").is(":visible"))
            {
                //$('.menu').fadeOut();
                $('.header-style18 .menu').animate(
                {
                    width: 'toggle'
                }, 500);
                $('#toggle-mright').removeClass('loc');
            }
        }
    });
});

/* Header Style 20 Full Screen & Mobile View start */
$(document).ready(function()
{
    $('.expand-btn').click(function()
    {
        $(this).toggleClass('loc');
        $('#myheader').toggleClass('show-menu');
    });
});

/* Header Style 23 Click on toggle-change -bg-color */
$('.header-style23 .expand-btn').on('click', function()
{
    if ($(this).attr('data-click-state') == 1)
    {
        $(this).attr('data-click-state', 0)
        $(this).css('background-color', '#343e45')
        $('.header-style23 .menu-wrap').css('background', '#20a0ff');
    }
    else
    {
        $(this).attr('data-click-state', 1)
        $(this).css('background-color', '#20a0ff')
        $('.header-style23 .menu-wrap').css('background', '#343e45');
    }
});

/* Header Style 24 Hidden---show on scroll */
var prev = 0;
var $window = $(window);
var nav = $('.header-style24 nav');
$window.on('scroll', function()
{
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
});

/* This Jquery is for Header-Style-26 */
$(document).ready(function()
{
    $('#toggle-menu-left').click(function()
    {
        $(this).toggleClass('loc');
        $('.menu').animate(
        {
            width: 'toggle'
        }, 300);
    });
    //On Escape Key
    $(document).on('keydown', function(e)
    {
        if (e.keyCode === 27)
        {
            if ($(".menu").is(":visible"))
            {
                //$('.menu').fadeOut();
                $('.header-style26 .menu').animate(
                {
                    width: 'toggle'
                }, 300);
                $('#toggle-mleft').removeClass('loc');
            }
        }
    });
});

/********* Toggle-Menu For Desktop And mobile-view JQuery End ***********/
/********* Simple Sticky JQuery Start **********/
/* when scroll down header will sticky at top */
$(document).ready(function()
{
    var header = $("#simple-sticky");
    $(window).scroll(function()
    {
        var scroll = $(window).scrollTop();
        //ScrollPosition
        //console.log(scroll);
        if (scroll <= 50 && $(this).width() > 769)
        {
            header.removeClass("fixed-top");
            $('.sticky-logo').css('display', 'none');
            $('.sticky-logo').css('float', 'none');
        }
        else
        {
            header.addClass('fixed-top');
            $('.sticky-logo').css('display', 'block');
            $('.sticky-logo').css('float', 'left');
        }
    });
});
/********* Simple Sticky JQuery End **********/
/********* Smart Sticky JQuery Start *********/
//when scroll down header will hide and scroll up header will show at top
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#smart-sticky').outerHeight();
$(window).scroll(function(event)
{
    didScroll = true;
});
setInterval(function()
{
    if (didScroll)
    {
        hasScrolled();
        didScroll = false;
    }
}, 100);

function hasScrolled()
{
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight)
    {
        // Scroll Down
        $('#smart-sticky').removeClass('nav-down').addClass('nav-up');
    }
    else
    {
        // Scroll Up
        if (st + $(window).height() < $(document).height())
        {
            $('#smart-sticky').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}
/********* Smart Sticky JQuery End *********/
/* jquery for stikcy-log scroll-header */
var header = $(".header-style25 .menu-section");
$(window).scroll(function()
{
    var scroll = $(window).scrollTop();
    if (scroll >= 110 && $(this).width() > 769)
    {
        $(".header-style25 .menu-btn").css("display", "none");
        $(".header-style25 .menu").addClass("nav-right");
        $(".header-style25 .menu").removeClass("nav-left");
    }
    else
    {
        $(".header-style25 .menu-btn").css("display", "block");
        $(".header-style25 .menu").removeClass("nav-right");
        $(".header-style25 .menu").addClass("nav-left");
    }
});

/********* Top Scroller Arrow JQuery Start ***********/
$(document).ready(function()
{
    $(window).scroll(function()
    {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() > 1000)
        {
            $('#topScroll').fadeIn(); //show
        }
        else
        {
            $('#topScroll').fadeOut(); //hide
        }
    });
    // scroll body to 0px on click
    $('#topScroll').click(function()
    {
        $('body,html').animate(
        {
            scrollTop: 0
        }, 800); //speed      
        return false;
    });
});
/********* Top Scroller Arrow JQuery End ***********/
/********* OnClick of Menu Element Open Its Submenu JQuery Start **********/
$(function()
{
    $(document).mousedown(function()
        /*If Menu is active remove it*/
        {
            $('.menu .active').removeClass('active').children('ul').hide();
        })
    /*On_click Open Main Sub-menu of Main Ul*/
    $('.menu').on('mousedown', '.sub-menu', function(e)
    {
        //console.log("1");
        e.stopPropagation();
        var elem = $(this);
        if (elem.is('.active'))
        {
            //console.log("remove");
            elem.children('ul').slideUp(150);
            elem.removeClass('active');
            elem.find('.arr-up').css('transform', 'rotate(0deg)');
        }
        else
        {
            //console.log("add");
            $('.menu .active').removeClass('active').children('ul').hide();
            elem.addClass('active').children('ul').slideDown(150);
            elem.find('.arr-up').css('transform', 'rotate(180deg)');
        }
    });
    /*block default event*/

    $('.sub-menu').on('mousedown', 'ul', function(e)
    {
        e.stopPropagation();
    });

    /*This Jquery Work for opening sub-menu up to 5th level*/
    $('.menu .sub-menu ul').parent();
    $('.menu .sub-menu > a').click(function(e)
    {
        e.preventDefault(); // this will stop the click from following the link
        if (!$(this).parent().hasClass('over'))
        {
            //console.log("Newadd");
            $(this).parent().parent().find('.over').removeClass('over');
            $(this).parent().addClass('over');
            $(this).find('.mobile-arrow i').css('transform',
                'rotate(180deg)');
        }
        else
        {
            //console.log("Newremove");
            $(this).parent().removeClass('over').find('.over').removeClass(
                'over');
            $(this).find('.mobile-arrow i').css('transform',
                'rotate(0deg)');
        }
    });
    /*On_click Open Mega-Main Sub-menu open*/
    $('.menu').on('mousedown', '.mega-menu', function(e)
    {
        //console.log("1");
        e.stopPropagation();
        var elem = $(this);
        if (elem.is('.active'))
        {
            //console.log("remove");
            elem.children('ul').slideUp(350);
            elem.removeClass('active');
            elem.find('.arr-up').css('transform', 'rotate(0deg)');
        }
        else
        {
            //console.log("add");
            $('.menu .active').removeClass('active').children('ul').hide();
            elem.addClass('active').children('ul').slideDown(350);
            elem.find('.arr-up').css('transform', 'rotate(180deg)');
        }
    });
});
/********* OnClick of Menu Element Open Its Submenu JQuery End **********/

/********* Search Bar Open and Close JQuery Start ************/
$(document).ready(function()
{
    // On  Close Button Click
    $('#close-search').click(function()
    {
        $('#search-icon i').css('color', '#4e5651');
        $('#search').fadeOut();
        $(this).hide();
    });
    //On Search Icon Click
    $('#search-icon').click(function()
    {
        $('#search-icon i').css('color', '#20a0ff');
        $('#search').fadeIn();
        $('#close-search').fadeIn();
    });
    //On Escape Key
    //var elem = "#shop-box"; 
    $(document).on('keydown', function(e)
    {
        if (e.keyCode === 27)
        {
            if ($("#search").is(":visible"))
            {
                $('#search').fadeOut();
                $('#search-icon i').css('color', '#4e5651');
            }
        }
    });
});
/********* Search Bar Open and Close JQuery End ************/

/********* Shopping Cart JQuery Start *********/
$(document).ready(function()
{
    /**/
    $('#shop').click(function(e)
    {
        $('#shop').css('color', '#20a0ff');
        $('.shop-content').fadeIn();
    });
    $('#close1').click(function(e)
    {
        $('#shop').css('color', '#454545');
        $('.shop-content').fadeOut();
    });
    $('#close2').click(function(e)
    {
        $('.item-01').hide();
        $('.total-price .product-cost p').hide();
        $('.total-price .product-cost').append('<p>$394.85</p>');
    });
    $('#close3').click(function(e)
    {
        $('.item-02').hide();
        $('.total-price .product-cost p').hide();
        $('.total-price .product-cost').append('<p>$000.00</p>');
    });
    //On Escape Key
    //var elem = "#shop-box"; 
    $(document).on('keydown', function(e)
    {
        if (e.keyCode === 27)
        {
            if ($(".shop-content").is(":visible"))
            {
                $('.shop-content').fadeOut();
                $('.shop-cart .shop-icon').css('color', '#4e5651');
            }
        }
    });
});
/********* Shopping Cart JQuery End *********/

/********* Expand-Search-Input-Box for Header-Style-16 JQuery Start *********/
/*When Type Expand Search-Input-Textbox*/
$(document).ready(function()
{
    function resizeInputs($text)
    {
        var text = $text.val().replace(/\s+/g, ' '),
        placeholder = $text.attr('placeholder'),
        span = $text.next('span');
        span.text(placeholder);
        var width = span.width();
        //console.log(text.length);
        if (text.length > 0)
        {
            span.text(text);
            var width = span.width();
            $text.css('width', width + 200);
        }
        else if (text.length == 0)
        {
            $text.css('width', '200');
        }
        //$text.css('width', width + 100);
    };

    $('.exp-txt-box').each(function()
    {
        var $text = $(this);
        resizeInputs($text);
    });

    //BackSpace Text
    $('.exp-txt-box').on('keyup blur', function()
    {
        var $text = $(this);
        resizeInputs($text);
    });

    $('.exp-txt-box').on('keyup', function() 
    {
        var key = event.keyCode || event.charCode;
        if( key == 8 || key == 46 )
        {
            var $text = $(this);
            $(this).val('');
        }
     });  

    $('.exp-txt-box').on('blur', function()
    {
        var $text = $(this).val().replace(/\s+/g, ' ');
        $(this).val($text);
    });

    //On Escape Key
    $('.exp-txt-box').on('keyup blur', function(e)
    {
        if (e.keyCode == 27)
        {
            $(this).val('');
        }
    });
});

/********* Expand-Search-Input-Box for Header-Style-16 JQuery End *********/

/******** Active Bookmark JQuery Start *************/
$(document).ready(function()
{
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('.book-mark a.menu-link[href^="#"]').on('click', function(e)
    {
        e.preventDefault();
        $(document).off("scroll");
        $('a.menu-link').each(function()
        {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate(
        {
            'scrollTop': $target.offset().top + 2
        }, 900, 'swing', function()
        {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event)
{
    var scrollPos = $(document).scrollTop();
    $('.book-mark .menu a.menu-link').each(function()
    {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement
            .height() >
            scrollPos)
        {
            $('nav ul li a.menu-link').removeClass("active");
            currLink.addClass("active");
        }
        else
        {
            currLink.removeClass("active");
        }
    });
}
/********* Active Bookmark JQuery End *************/

/********* Isotope Grid jQuery Start *********/
$(window).on('load', function()
{
    function gridMasonry()
    {
        var grid = $(".grid");
        if (grid.length)
        {
            grid.isotope(
            {
                itemSelector: '.grid-item',
                percentPosition: true,
                layoutMode: 'masonry',
                masonry:
                {
                    columnWidth: '.grid-sizer'
                }
            });
        }
    }
    gridMasonry();
});

/********* Isotope Grid jQuery End *********/
/* ==================================================
 * ==================================================
 *
 *        ELEMENT JQUERY START
 *
 * ==================================================
 * ================================================== */
/********* Custom Before-After Jquery Start *********/
(function($)
{
    jQuery(document).ready(function()
    {
        jQuery("#before-after .ba-container").ba(
        {
            default_offset_pct: 0.7,
            orientation: 'horizontal',
            move_on_hover: false,
            is_wiggle: false,
            wiggle_timeout: 1000
        });
    });
    jQuery(document).ready(function()
    {
        jQuery("#before-after2 .ba-container").ba(
        {
            default_offset_pct: 0.7,
            orientation: 'horizontal',
            move_on_hover: false,
            is_wiggle: false,
            wiggle_timeout: 1000
        });
    });
    jQuery(document).ready(function()
    {
        jQuery("#before-after3 .ba-container").ba(
        {
            default_offset_pct: 0.7,
            orientation: 'vertical',
            move_on_hover: false,
            is_wiggle: false,
            wiggle_timeout: 1000
        });
    });
    jQuery(document).ready(function($) {});
}(jQuery));
/********* Custom Before-After Jquery End *********/
/********* Before-After Jquery Start *********/
(function($)
{
    $.fn.ba = function(options)
    {
        var options = $.extend(
        {
            default_offset_pct: 0.5,
            orientation: 'horizontal',
            move_on_hover: false,
            is_wiggle: false,
            wiggle_timeout: 1000
        }, options);
        return this.each(function()
        {
            var sliderPct = options.default_offset_pct;
            var container = $(this);
            var sliderOrientation = options.orientation;
            var beforeDirection = (sliderOrientation === 'vertical') ?
                'down' : 'left';
            var afterDirection = (sliderOrientation === 'vertical') ? 'up' :
                'right';
            var moveOnHover = options.move_on_hover;
            var isWiggle = options.is_wiggle;
            var wiggleTimeout = options.wiggle_timeout;
            container.wrap("<div class='ba-wrapper ba-" +
                sliderOrientation + "'></div>");
            container.append("<div class='ba-overlay'></div>");
            var beforeImg = container.find("img:first");
            var afterImg = container.find("img:last");
            container.append("<div class='ba-handle'></div>");
            var slider = container.find(".ba-handle");
            slider.append("<span class='ba-" + beforeDirection +
                "-arrow'></span>");
            slider.append("<span class='ba-" + afterDirection +
                "-arrow'></span>");
            container.addClass("ba-container");
            beforeImg.addClass("ba-before");
            afterImg.addClass("ba-after");
            var overlay = container.find(".ba-overlay");
            overlay.append("<div class='ba-before-label'></div>");
            overlay.append("<div class='ba-after-label'></div>");
            var calcOffset = function(dimensionPct)
            {
                var w = beforeImg.width();
                var h = beforeImg.height();
                return {
                    w: w + "px",
                    h: h + "px",
                    cw: (dimensionPct * w) + "px",
                    ch: (dimensionPct * h) + "px"
                };
            };
            var adjustContainer = function(offset)
            {
                if (sliderOrientation === 'vertical')
                {
                    beforeImg.css("clip", "rect(0," + offset
                        .w + "," + offset.ch +
                        ",0)");
                }
                else
                {
                    beforeImg.css("clip", "rect(0," + offset
                        .cw + "," + offset.h +
                        ",0)");
                }
                container.css("height", offset.h);
            };
            var adjustSlider = function(pct)
            {
                var offset = calcOffset(pct);
                slider.css((sliderOrientation === "vertical") ?
                    "top" : "left", (
                        sliderOrientation ===
                        "vertical") ? offset
                    .ch : offset.cw);
                adjustContainer(offset);
            }
            $(window).on("resize.ba", function(e)
            {
                adjustSlider(sliderPct);
            });
            var offsetX = 0;
            var imgWidth = 0;
            slider.on("movestart", function(e)
            {
                if (((e.distX > e.distY && e.distX < -e
                        .distY) || (e
                        .distX < e
                        .distY && e
                        .distX > -e
                        .distY)) &&
                    sliderOrientation !== 'vertical'
                )
                {
                    e.preventDefault();
                }
                else if (((e.distX < e.distY && e
                        .distX < -e
                        .distY) || (e
                        .distX > e
                        .distY && e
                        .distX > -e
                        .distY)) &&
                    sliderOrientation === 'vertical'
                )
                {
                    e.preventDefault();
                }
                container.addClass("active");
                offsetX = container.offset().left;
                offsetY = container.offset().top;
                imgWidth = beforeImg.width();
                imgHeight = beforeImg.height();
            });
            slider.on("moveend", function(e)
            {
                if (!moveOnHover)
                    container.removeClass("active");
            });
            slider.on("move", function(e)
            {
                if (container.hasClass("active"))
                {
                    sliderPct = (sliderOrientation ===
                            'vertical') ? (e
                            .pageY -
                            offsetY) /
                        imgHeight : (e.pageX -
                            offsetX) /
                        imgWidth;
                    if (sliderPct < 0)
                    {
                        sliderPct = 0;
                    }
                    if (sliderPct > 1)
                    {
                        sliderPct = 1;
                    }
                    adjustSlider(sliderPct);
                }
            });
            container.find("img").on("mousedown", function(event)
            {
                event.preventDefault();
            });
            if (moveOnHover)
            {
                container.on("mouseenter", function(event)
                {
                    container.addClass("active");
                    offsetX = container.offset()
                        .left;
                    offsetY = container.offset()
                        .top;
                    imgWidth = beforeImg.width();
                    imgHeight = beforeImg.height();
                });
                container.on("mouseleave", function(event)
                {
                    container.removeClass("active");
                });
                container.on("mousemove", function(event)
                {
                    if (container.hasClass(
                            "active"))
                    {
                        sliderPct = (sliderOrientation ===
                                'vertical'
                            ) ? (
                                event
                                .pageY -
                                offsetY
                            ) /
                            imgHeight : (
                                event
                                .pageX -
                                offsetX
                            ) /
                            imgWidth;
                        if (sliderPct < 0)
                        {
                            sliderPct = 0;
                        }
                        if (sliderPct > 1)
                        {
                            sliderPct = 1;
                        }
                        adjustSlider(sliderPct);
                    }
                });
            }
            $(window).trigger("resize.ba");

            function wiggle()
            {
                var default_pct = options.default_offset_pct;
                var offset = 0;
                var count = 0;
                var direction = 1;
                var step = 0.012;
                var max_offset = 0.06;

                function frame()
                {
                    if (container.hasClass("active"))
                    {
                        clearInterval(timer);
                    }
                    if (offset > max_offset)
                    {
                        direction = -1;
                        //step += 0.001;
                    }
                    if (offset < -max_offset)
                    {
                        direction = 1;
                        //step += 0.001;
                    }
                    offset += (step * direction);
                    pct = offset + default_pct;
                    if (pct < 0)
                    {
                        pct = 0;
                    }
                    if (pct > 1)
                    {
                        pct = 1;
                    }
                    adjustSlider(pct);
                    if (offset.toFixed(2) == 0)
                    {
                        count++;
                    }
                    if (count > 2)
                    {
                        clearInterval(timer);
                    }
                }
                var timer = setInterval(frame, 50)
            }
            if (isWiggle)
            {
                setTimeout(wiggle, wiggleTimeout);
            }
            slider.on("touchmove", function(event)
            {
                event.preventDefault();
            });
        });
    };
})(jQuery);
/********* Before-After Jquery End *********/
/********* Before-After Jquery Move Event Start *********/
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:     Page coordinates of pointer.
// startX:
// startY:    Page coordinates of pointer at movestart.
// distX:
// distY:     Distance the pointer has moved since movestart.
// deltaX:
// deltaY:    Distance the finger has moved since last event.
// velocityX:
// velocityY: Average velocity over last few events.
(function(fn)
{
    if (typeof define === 'function' && define.amd)
    {
        define([], fn);
    }
    else if ((typeof module !== "undefined" && module !== null) && module.exports)
    {
        module.exports = fn;
    }
    else
    {
        fn();
    }
})(function()
{
    var assign = Object.assign || window.jQuery && jQuery.extend;
    // Number of pixels a pressed pointer travels before movestart
    // event is fired.
    var threshold = 8;
    // Shim for requestAnimationFrame, falling back to timer. See:
    // see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    var requestFrame = (function()
    {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(fn, element)
            {
                return window.setTimeout(function()
                {
                    fn();
                }, 25);
            }
        );
    })();
    var ignoreTags = {
        textarea: true,
        input: true,
        select: true,
        button: true
    };
    var mouseevents = {
        move: 'mousemove',
        cancel: 'mouseup dragstart',
        end: 'mouseup'
    };
    var touchevents = {
        move: 'touchmove',
        cancel: 'touchend',
        end: 'touchend'
    };
    var rspaces = /\s+/;
    // DOM Events
    var eventOptions = {
        bubbles: true,
        cancelable: true
    };
    var eventsSymbol = Symbol('events');

    function createEvent(type)
    {
        return new CustomEvent(type, eventOptions);
    }

    function getEvents(node)
    {
        return node[eventsSymbol] || (node[eventsSymbol] = {});
    }

    function on(node, types, fn, data, selector)
    {
        types = types.split(rspaces);
        var events = getEvents(node);
        var i = types.length;
        var handlers, type;

        function handler(e)
        {
            fn(e, data);
        }
        while (i--)
        {
            type = types[i];
            handlers = events[type] || (events[type] = []);
            handlers.push([fn, handler]);
            node.addEventListener(type, handler);
        }
    }

    function off(node, types, fn, selector)
    {
        types = types.split(rspaces);
        var events = getEvents(node);
        var i = types.length;
        var type, handlers, k;
        if (!events)
        {
            return;
        }
        while (i--)
        {
            type = types[i];
            handlers = events[type];
            if (!handlers)
            {
                continue;
            }
            k = handlers.length;
            while (k--)
            {
                if (handlers[k][0] === fn)
                {
                    node.removeEventListener(type, handlers[k][1]);
                    handlers.splice(k, 1);
                }
            }
        }
    }

    function trigger(node, type, properties)
    {
        // Don't cache events. It prevents you from triggering an event of a
        // given type from inside the handler of another event of that type.
        var event = createEvent(type);
        if (properties)
        {
            assign(event, properties);
        }
        node.dispatchEvent(event);
    }
    // Constructors
    function Timer(fn)
    {
        var callback = fn,
            active = false,
            running = false;

        function trigger(time)
        {
            if (active)
            {
                callback();
                requestFrame(trigger);
                running = true;
                active = false;
            }
            else
            {
                running = false;
            }
        }
        this.kick = function(fn)
        {
            active = true;
            if (!running)
            {
                trigger();
            }
        };
        this.end = function(fn)
        {
            var cb = callback;
            if (!fn)
            {
                return;
            }
            // If the timer is not running, simply call the end callback.
            if (!running)
            {
                fn();
            }
            // If the timer is running, and has been kicked lately, then
            // queue up the current callback and the end callback, otherwise
            // just the end callback.
            else
            {
                callback = active ?
                    function()
                    {
                        cb();
                        fn();
                    } :
                    fn;
                active = true;
            }
        };
    }
    // Functions
    function noop()
    {}

    function preventDefault(e)
    {
        e.preventDefault();
    }

    function isIgnoreTag(e)
    {
        return !!ignoreTags[e.target.tagName.toLowerCase()];
    }

    function isPrimaryButton(e)
    {
        // Ignore mousedowns on any button other than the left (or primary)
        // mouse button, or when a modifier key is pressed.
        return (e.which === 1 && !e.ctrlKey && !e.altKey);
    }

    function identifiedTouch(touchList, id)
    {
        var i, l;
        if (touchList.identifiedTouch)
        {
            return touchList.identifiedTouch(id);
        }
        // touchList.identifiedTouch() does not exist in
        // webkit yet… we must do the search ourselves...
        i = -1;
        l = touchList.length;
        while (++i < l)
        {
            if (touchList[i].identifier === id)
            {
                return touchList[i];
            }
        }
    }

    function changedTouch(e, data)
    {
        var touch = identifiedTouch(e.changedTouches, data.identifier);
        // This isn't the touch you're looking for.
        if (!touch)
        {
            return;
        }
        // Chrome Android (at least) includes touches that have not
        // changed in e.changedTouches. That's a bit annoying. Check
        // that this touch has changed.
        if (touch.pageX === data.pageX && touch.pageY === data.pageY)
        {
            return;
        }
        return touch;
    }
    // Handlers that decide when the first movestart is triggered
    function mousedown(e)
    {
        // Ignore non-primary buttons
        if (!isPrimaryButton(e))
        {
            return;
        }
        // Ignore form and interactive elements
        if (isIgnoreTag(e))
        {
            return;
        }
        on(document, mouseevents.move, mousemove, e);
        on(document, mouseevents.cancel, mouseend, e);
    }

    function mousemove(e, data)
    {
        checkThreshold(e, data, e, removeMouse);
    }

    function mouseend(e, data)
    {
        removeMouse();
    }

    function removeMouse()
    {
        off(document, mouseevents.move, mousemove);
        off(document, mouseevents.cancel, mouseend);
    }

    function touchstart(e)
    {
        // Don't get in the way of interaction with form elements
        if (ignoreTags[e.target.tagName.toLowerCase()])
        {
            return;
        }
        var touch = e.changedTouches[0];
        // iOS live updates the touch objects whereas Android gives us copies.
        // That means we can't trust the touchstart object to stay the same,
        // so we must copy the data. This object acts as a template for
        // movestart, move and moveend event objects.
        var data = {
            target: touch.target,
            pageX: touch.pageX,
            pageY: touch.pageY,
            identifier: touch.identifier,
            // The only way to make handlers individually unbindable is by
            // making them unique.
            touchmove: function(e, data)
            {
                touchmove(e, data);
            },
            touchend: function(e, data)
            {
                touchend(e, data);
            }
        };
        on(document, touchevents.move, data.touchmove, data);
        on(document, touchevents.cancel, data.touchend, data);
    }

    function touchmove(e, data)
    {
        var touch = changedTouch(e, data);
        if (!touch)
        {
            return;
        }
        checkThreshold(e, data, touch, removeTouch);
    }

    function touchend(e, data)
    {
        var touch = identifiedTouch(e.changedTouches, data.identifier);
        if (!touch)
        {
            return;
        }
        removeTouch(data);
    }

    function removeTouch(data)
    {
        off(document, touchevents.move, data.touchmove);
        off(document, touchevents.cancel, data.touchend);
    }

    function checkThreshold(e, data, touch, fn)
    {
        var distX = touch.pageX - data.pageX;
        var distY = touch.pageY - data.pageY;
        // Do nothing if the threshold has not been crossed.
        if ((distX * distX) + (distY * distY) < (threshold * threshold))
        {
            return;
        }
        triggerStart(e, data, touch, distX, distY, fn);
    }

    function triggerStart(e, data, touch, distX, distY, fn)
    {
        var touches = e.targetTouches;
        var time = e.timeStamp - data.timeStamp;
        // Create a movestart object with some special properties that
        // are passed only to the movestart handlers.
        var template = {
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
            startX: data.pageX,
            startY: data.pageY,
            distX: distX,
            distY: distY,
            deltaX: distX,
            deltaY: distY,
            pageX: touch.pageX,
            pageY: touch.pageY,
            velocityX: distX / time,
            velocityY: distY / time,
            identifier: data.identifier,
            targetTouches: touches,
            finger: touches ? touches.length : 1,
            enableMove: function()
            {
                this.moveEnabled = true;
                this.enableMove = noop;
                e.preventDefault();
            }
        };
        // Trigger the movestart event.
        trigger(data.target, 'movestart', template);
        // Unbind handlers that tracked the touch or mouse up till now.
        fn(data);
    }
    // Handlers that control what happens following a movestart
    function activeMousemove(e, data)
    {
        var timer = data.timer;
        data.touch = e;
        data.timeStamp = e.timeStamp;
        timer.kick();
    }

    function activeMouseend(e, data)
    {
        var target = data.target;
        var event = data.event;
        var timer = data.timer;
        removeActiveMouse();
        endEvent(target, event, timer, function()
        {
            // Unbind the click suppressor, waiting until after mouseup
            // has been handled.
            setTimeout(function()
            {
                off(target, 'click', preventDefault);
            }, 0);
        });
    }

    function removeActiveMouse()
    {
        off(document, mouseevents.move, activeMousemove);
        off(document, mouseevents.end, activeMouseend);
    }

    function activeTouchmove(e, data)
    {
        var event = data.event;
        var timer = data.timer;
        var touch = changedTouch(e, event);
        if (!touch)
        {
            return;
        }
        // Stop the interface from gesturing
        e.preventDefault();
        event.targetTouches = e.targetTouches;
        data.touch = touch;
        data.timeStamp = e.timeStamp;
        timer.kick();
    }

    function activeTouchend(e, data)
    {
        var target = data.target;
        var event = data.event;
        var timer = data.timer;
        var touch = identifiedTouch(e.changedTouches, event.identifier);
        // This isn't the touch you're looking for.
        if (!touch)
        {
            return;
        }
        removeActiveTouch(data);
        endEvent(target, event, timer);
    }

    function removeActiveTouch(data)
    {
        off(document, touchevents.move, data.activeTouchmove);
        off(document, touchevents.end, data.activeTouchend);
    }
    // Logic for triggering move and moveend events
    function updateEvent(event, touch, timeStamp)
    {
        var time = timeStamp - event.timeStamp;
        event.distX = touch.pageX - event.startX;
        event.distY = touch.pageY - event.startY;
        event.deltaX = touch.pageX - event.pageX;
        event.deltaY = touch.pageY - event.pageY;
        // Average the velocity of the last few events using a decay
        // curve to even out spurious jumps in values.
        event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
        event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
        event.pageX = touch.pageX;
        event.pageY = touch.pageY;
    }

    function endEvent(target, event, timer, fn)
    {
        timer.end(function()
        {
            trigger(target, 'moveend', event);
            return fn && fn();
        });
    }
    // Set up the DOM
    function movestart(e)
    {
        if (e.defaultPrevented)
        {
            return;
        }
        if (!e.moveEnabled)
        {
            return;
        }
        var event = {
            startX: e.startX,
            startY: e.startY,
            pageX: e.pageX,
            pageY: e.pageY,
            distX: e.distX,
            distY: e.distY,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
            identifier: e.identifier,
            targetTouches: e.targetTouches,
            finger: e.finger
        };
        var data = {
            target: e.target,
            event: event,
            timer: new Timer(update),
            touch: undefined,
            timeStamp: e.timeStamp
        };

        function update(time)
        {
            updateEvent(event, data.touch, data.timeStamp);
            trigger(data.target, 'move', event);
        }
        if (e.identifier === undefined)
        {
            // We're dealing with a mouse event.
            // Stop clicks from propagating during a move
            on(e.target, 'click', preventDefault);
            on(document, mouseevents.move, activeMousemove, data);
            on(document, mouseevents.end, activeMouseend, data);
        }
        else
        {
            // In order to unbind correct handlers they have to be unique
            data.activeTouchmove = function(e, data)
            {
                activeTouchmove(e, data);
            };
            data.activeTouchend = function(e, data)
            {
                activeTouchend(e, data);
            };
            // We're dealing with a touch.
            on(document, touchevents.move, data.activeTouchmove, data);
            on(document, touchevents.end, data.activeTouchend, data);
        }
    }
    on(document, 'mousedown', mousedown);
    on(document, 'touchstart', touchstart);
    on(document, 'movestart', movestart);
    // jQuery special events
    //
    // jQuery event objects are copies of DOM event objects. They need
    // a little help copying the move properties across.
    if (!window.jQuery)
    {
        return;
    }
    var properties = ("startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY").split(
        ' ');

    function enableMove1(e)
    {
        e.enableMove();
    }

    function enableMove2(e)
    {
        e.enableMove();
    }

    function enableMove3(e)
    {
        e.enableMove();
    }

    function add(handleObj)
    {
        var handler = handleObj.handler;
        handleObj.handler = function(e)
        {
            // Copy move properties across from originalEvent
            var i = properties.length;
            var property;
            while (i--)
            {
                property = properties[i];
                e[property] = e.originalEvent[property];
            }
            handler.apply(this, arguments);
        };
    }
    jQuery.event.special.movestart = {
        setup: function()
        {
            // Movestart must be enabled to allow other move events
            on(this, 'movestart', enableMove1);
            // Do listen to DOM events
            return false;
        },
        teardown: function()
        {
            off(this, 'movestart', enableMove1);
            return false;
        },
        add: add
    };
    jQuery.event.special.move = {
        setup: function()
        {
            on(this, 'movestart', enableMove2);
            return false;
        },
        teardown: function()
        {
            off(this, 'movestart', enableMove2);
            return false;
        },
        add: add
    };
    jQuery.event.special.moveend = {
        setup: function()
        {
            on(this, 'movestart', enableMove3);
            return false;
        },
        teardown: function()
        {
            off(this, 'movestart', enableMove3);
            return false;
        },
        add: add
    };
});

/********* Gradient Button jQuery Start *********/
$('.gradient-effect').mousemove(function(e)
{
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
});
/********* Gradient Button jQuery End *********/
/********* Carousel JQuery Start *********/
var elementthree = 3;
(function()
{
    $('.carousel-three .carousel-item').each(function()
    {
        var itemToClone = $(this);
        for (var i = 1; i < elementthree; i++)
        {
            itemToClone = itemToClone.next();
            if (!itemToClone.length)
            {
                itemToClone = $(this).siblings(':first');
            }
            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-" + (i))
                .appendTo($(this));
        }
    });
}());
var elementfour = 4;
(function()
{
    $('.carousel-four .carousel-item').each(function()
    {
        var itemToClone = $(this);
        for (var i = 1; i < elementfour; i++)
        {
            itemToClone = itemToClone.next();
            if (!itemToClone.length)
            {
                itemToClone = $(this).siblings(':first');
            }
            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-" + (i))
                .appendTo($(this));
        }
    });
}());
var elementsix = 6;
(function()
{
    $('.carousel-six .carousel-item').each(function()
    {
        var itemToClone = $(this);
        for (var i = 1; i < elementsix; i++)
        {
            itemToClone = itemToClone.next();
            if (!itemToClone.length)
            {
                itemToClone = $(this).siblings(':first');
            }
            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-" + (i))
                .appendTo($(this));
        }
    });
}());
/********* Carousel JQuery End *********/
/*************** Team-carousel-team-29 **********************/
/*Show Card-body When clicked on carousel-item*/
jQuery(document).ready(function()
{
    /*Show Card-body When clicked on carousel-item*/
    $('.team-card-select').click(function(e)
    {
        // $(this).find('.card-body').each(function()
        // {
        //  if($(this).hasClass('showContent'))
        //     {
        //      $(this).removeClass('showContent');
        //     }
        // });
        $(this).find('.card-body').toggleClass('hideContent, showContent');
    });
    /*when clicked on carousel-item change opacity to visible state*/
    $('.team-card-select').click(function(e)
    {
        /*$('.team29').find('.blur').each(function()
        {
         if($(this).hasClass('fresh'))
         {
          $(this).removeClass('fresh');
         }
        })*/
        $(this).find('.blur').toggleClass('blur, fresh');
    })
});
/*************** Team-carousel-team-29 **********************/
/********* Tooltip jQuery Start *********/
$(function()
{
    $('[data-toggle="tooltip"]').tooltip()
});
/********* Tooltip jQuery End *********/
/********* Popover jQuery Start *********/
$(function()
{
    $('[data-toggle="popover"]').popover()
});
/********* Popover jQuery End *********/
/********* Counter jQuery Start *********/

/*$('.counter-count').each(function ()
{
  $(this).prop('Counter',0).animate(
  {
    Counter: $(this).text()
  },
    {
      duration: 4000,
      easing: 'swing',
        step: function (now)
          {
            $(this).text(Math.ceil(now));
          }
    });
});*/

(function($)
{
    $.fn.countTo = function(options)
    {
        options = options ||
        {};

        return $(this).each(function()
        {
            // set options for current element
            var settings = $.extend(
            {}, $.fn.countTo.defaults,
            {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') ||
                {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval)
            {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer()
            {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function')
                {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops)
                {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function')
                    {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value)
            {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.text(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings)
    {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(function($)
{

    // start all the timers
    $('.timer').each(count);

    // restart a timer when a button is clicked
    $(window).scroll(function()
    {
        //console.log($(window).scrollTop());
        if ($(window).scrollTop() > 300 && $(window).scrollTop() < 5500)
        {

            $('.timer').each(count);
        }
    });

    function count(options)
    {
        var $this = $(this);
        options = $.extend(
        {}, options ||
        {}, $this.data('countToOptions') ||
        {});
        $this.countTo(options);
    }
});


/********* Counter jQuery End *********/

/********* Portfolio Style 11 jQuery Start *********/
$('.tooltipLink').hover(function()
{
    var title = $(this).attr('data-title');
    $(this).data('tipText', title);
    if (title == '')
    {}
    else
    {
        $('<p class="tool"></p>').fadeIn(200).text(title).appendTo('body');
    }
}, function()
{
    $(this).attr('data-tooltip', $(this).data('tipText'));
    $('.tool').fadeOut(200);
}).mousemove(function(e)
{
    var mousex = e.pageX;
    var mousey = e.pageY;
    $('.tool').css(
    {
        top: mousey,
        left: mousex
    })
});
/********* Portfolio Style 11 jQuery End *********/
/********* Portfolio Style 10 Category jQuery Start *********/
$(document).ready(function()
{
    $('a#filter-a').click(function()
    {
        //hide all works by default 
        $(".work-one").addClass('filter-hide');
        //show slected works based on the menu clicked
        $(".work-one[data-filter='" + $(this).attr('data-filter') + "']")
            .removeClass(
                "filter-hide");
        //remove selected class to the link      
        $('a#filter-a').removeClass('is-checked');
        //add selected class to the active link
        $(this).addClass('is-checked');
        return false;
    });
    //show all works for "all" menu
    $('a[data-filter="*"]').click(function(event)
    {
        $(".work-one").removeClass('filter-hide');
        return false;
    });
});
/********* Portfolio Style 10 Category jQuery End *********/

/********* Pricing Table Style 13 Category jQuery Start *********/
$(".price-table-13 .price-table-section").on("mouseover", function()
{
    var animation = 'swing';
    $(".price-table-13 .price-table-section").removeClass("highlight");
    $(".price-table-13 .price-table-section .action").removeClass("animated " + animation);
    $(this).addClass("highlight")
    $(this).find(".action").addClass("animated " + animation);
});
/********* Pricing Table Style 13 Category jQuery End *********/
/********* Testimonial Style 13 jQuery Start *********/
$(document).ready(function()
{
    $(".hover-effect1").mouseenter(function()
    {
        $(this).css("box-shadow", "0 .5rem 1rem rgba(0,0,0,.15)");
        $(this).css("transition", "0.5s ease-in-out");
        $(".img1").css("border", "2px solid #28a745");
        $(".img1").css("transition", "0.5s ease-in-out");
    });
    $(".hover-effect1").mouseleave(function()
    {
        $(this).css("box-shadow", "none");
        $(".img1").css("border", "2px solid #eee");
    });
});
$(document).ready(function()
{
    $(".hover-effect2").mouseenter(function()
    {
        $(this).css("box-shadow", "0 .5rem 1rem rgba(0,0,0,.15)");
        $(this).css("transition", "0.5s ease-in-out");
        $(".img2").css("border", "2px solid #28a745");
        $(".img2").css("transition", "0.5s ease-in-out");
    });
    $(".hover-effect2").mouseleave(function()
    {
        $(this).css("box-shadow", "none");
        $(".img2").css("border", "2px solid #eee");
    });
});
/********* Testimonial Style 13 jQuery End *********/
/********* Testimonial Style 14 jQuery Start *********/
$(document).ready(function()
{
    $(".hover-effect3").mouseenter(function()
    {
        $(this).css("box-shadow", "0 .5rem 1rem rgba(0,0,0,.15)");
        $(this).css("transition", "0.5s ease-in-out");
        $(".img3").css("border", "2px solid #28a745");
        $(".img3").css("transition", "0.5s ease-in-out");
    });
    $(".hover-effect3").mouseleave(function()
    {
        $(this).css("box-shadow", "none");
        $(".img3").css("border", "2px solid #eee");
    });
});
$(document).ready(function()
{
    $(".hover-effect3").mouseenter(function()
    {
        $(this).css("box-shadow", "0 .5rem 1rem rgba(0,0,0,.15)");
        $(this).css("transition", "0.5s ease-in-out");
        $(".img3").css("border", "2px solid #28a745");
        $(".img3").css("transition", "0.5s ease-in-out");
    });
    $(".hover-effect3").mouseleave(function()
    {
        $(this).css("box-shadow", "none");
        $(".img3").css("border", "2px solid #eee");
    });
});
$(document).ready(function()
{
    $(".hover-effect4").mouseenter(function()
    {
        $(this).css("box-shadow", "0 .5rem 1rem rgba(0,0,0,.15)");
        $(this).css("transition", "0.5s ease-in-out");
        $(".img4").css("border", "2px solid #28a745");
        $(".img4").css("transition", "0.5s ease-in-out");
    });
    $(".hover-effect4").mouseleave(function()
    {
        $(this).css("box-shadow", "none");
        $(".img4").css("border", "2px solid #eee");
    });
});
$(document).ready(function()
{
    $(".hover-effect4").mouseenter(function()
    {
        $(this).css("box-shadow", "0 .5rem 1rem rgba(0,0,0,.15)");
        $(this).css("transition", "0.5s ease-in-out");
        $(".img4").css("border", "2px solid #28a745");
        $(".img4").css("transition", "0.5s ease-in-out");
    });
    $(".hover-effect4").mouseleave(function()
    {
        $(this).css("box-shadow", "none");
        $(".img4").css("border", "2px solid #eee");
    });
});
$(document).ready(function()
{
    $(".hover-effect5").mouseenter(function()
    {
        $(this).css("box-shadow", "0 .5rem 1rem rgba(0,0,0,.15)");
        $(this).css("transition", "0.5s ease-in-out");
        $(".img5").css("border", "2px solid #28a745");
        $(".img5").css("transition", "0.5s ease-in-out");
    });
    $(".hover-effect5").mouseleave(function()
    {
        $(this).css("box-shadow", "none");
        $(".img5").css("border", "2px solid #eee");
    });
});
$(document).ready(function()
{
    $(".hover-effect5").mouseenter(function()
    {
        $(this).css("box-shadow", "0 .5rem 1rem rgba(0,0,0,.15)");
        $(this).css("transition", "0.5s ease-in-out");
        $(".img5").css("border", "2px solid #28a745");
        $(".img5").css("transition", "0.5s ease-in-out");
    });
    $(".hover-effect5").mouseleave(function()
    {
        $(this).css("box-shadow", "none");
        $(".img5").css("border", "2px solid #eee");
    });
});
/********* Testimonial Style 14 jQuery End *********/
/********* Testimonial Style 22 jQuery Start *********/
$(document).ready(function()
{
    $(".hover-effect1-style21").mouseenter(function()
    {
        $(".img1-style21").css("border", "4px solid #8fb74a");
    });
    $(".hover-effect1-style21").mouseleave(function()
    {
        $(".img1-style21").css("border", "4px solid transparent");
    });
});
$(document).ready(function()
{
    $(".hover-effect2-style21").mouseenter(function()
    {
        $(".img2-style21").css("border", "4px solid #8fb74a");
    });
    $(".hover-effect2-style21").mouseleave(function()
    {
        $(".img2-style21").css("border", "4px solid transparent");
    });
});
$(document).ready(function()
{
    $(".hover-effect3-style21").mouseenter(function()
    {
        $(".img3-style21").css("border", "4px solid #8fb74a");
    });
    $(".hover-effect3-style21").mouseleave(function()
    {
        $(".img3-style21").css("border", "4px solid transparent");
    });
});
/********* Testimonial Style 22 jQuery End *********/
/********* Testimonial Style 23 jQuery Start *********/
$(document).ready(function()
{
    $(".testimonial-style23 .penta-1").mouseenter(function()
    {
        $(".testimonial-style23 .testimonial-item-10 .penta").addClass(
            "pentagon-shape");
    });
    $(".testimonial-style23 .penta-1").mouseleave(function()
    {
        $(".testimonial-style23 .testimonial-item-10 .penta").removeClass(
            "pentagon-shape");
    });
});
$(document).ready(function()
{
    $(".testimonial-style23 .hexa-1").mouseenter(function()
    {
        $(".testimonial-style23 .testimonial-item-10 .hexa-2").addClass(
            "hexagon-shape");
    });
    $(".testimonial-style23 .hexa-1").mouseleave(function()
    {
        $(".testimonial-style23 .testimonial-item-10 .hexa-2").removeClass(
            "hexagon-shape");
    });
});
$(document).ready(function()
{
    $(".testimonial-style23 .octa-1").mouseenter(function()
    {
        $(".testimonial-style23 .testimonial-item-10 .octa").addClass(
            "octagon-shape");
    });
    $(".testimonial-style23 .octa-1").mouseleave(function()
    {
        $(".testimonial-style23 .testimonial-item-10 .octa").removeClass(
            "octagon-shape");
    });
});
/********* Testimonial Style 23 jQuery End *********/

/********* Progress Bar jQuery Start *********/
(function($)
{
    $.fn.viewportOffset = function()
    {
        var offset = $(this).offset();
        return {
            top: offset.top + $(window).scrollTop()
        };
    };
    $.fn.readingbar = function(options)
    {
        if (($('.read-bar').length > 0) === false)
        {
            var defaults = {
                backgroundColor: '#50E3C2',
                height: 4,
                counter: true
            };
            settings = $.extend(
            {}, defaults, options);
            $('<div class="read-bar"></div>').appendTo('.article-start');
            $('.read-bar').css(
            {
                position: 'fixed',
                bottom: '0',
                left: '0',
                width: '0',
                maxWidth: '100%',
            });
            $('.read-bar').css(
            {
                height: settings.height + 'px',
                backgroundColor: settings.backgroundColor
            });
            if (settings.counter)
            {
                $('<span class="read-bar-text"></span>').appendTo('.article-start');
                $('.read-bar-text').css(
                {
                    position: 'fixed',
                    bottom: settings.height + 'px',
                    left: '0',
                    width: settings.height * 10 + 'px',
                    marginLeft: '-' + settings.height * 10 + 'px',
                    textAlign: 'right',
                    color: settings.backgroundColor,
                    fontSize: settings.height * 5 + 'px'
                });
            }
        }
        _ = $(this);
        var readHeight = _.outerHeight();
        var startPoint = _.offset().top * 1.65;
        var currentPos = 0;
        $(document).on('scroll', function()
        {
            readHeight = _.outerHeight();
            currentPos = (_.viewportOffset().top - startPoint) /
                readHeight * 100;
            $('.read-bar').css('width', currentPos + '%');
            $('.read-bar-text').css('left', currentPos + '%');
            if (currentPos > 100)
            {
                $('.read-bar').css('opacity', '1');
                $('.read-bar-text').css('opacity', '0');
            }
            else
            {
                $('.read-bar-text').text(Math.round(currentPos) + '%');
                $('.read-bar-text').css(
                {
                    opacity: 1,
                    bottom: '0'
                });
                $('.read-bar').css(
                {
                    opacity: 1,
                    height: settings.height + 'px'
                });
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function()
                {
                    $('.read-bar').animate(
                    {
                        opacity: 1,
                        height: settings
                            .height /
                            2 +
                            'px'
                    }, 150);
                    $('.read-bar-text')
                        .animate(
                        {
                            opacity: 0,
                            bottom: '-' +
                                settings
                                .height *
                                10 +
                                'px'
                        }, 140);
                }, 250));
            }
        });
    };
}(jQuery));
/********* Progress Bar jQuery End *********/

/********* Progress Semantic Bar jQuery Start *********/
(function($)
{
    $.fn.viewportOffset = function()
    {
        var offset = $(this).offset();
        return {
            top: offset.top + $(window).scrollTop()
        };
    };
    $.fn.semanticbar = function(options)
    {
        if (($('.read-bar-02').length > 0) === false)
        {
            var defaults = {
                backgroundColor: '#50E3C2',
                height: 4,
                counter: true
            };
            settings = $.extend(
            {}, defaults, options);
            $('<div class="read-bar-02"></div>').appendTo('.article-start');
            $('.read-bar-02').css(
            {
                position: 'fixed',
                bottom: '0',
                left: '0',
                width: '0',
                maxWidth: '100%',
            });
            $('.read-bar-02').css(
            {
                height: settings.height + 'px',
                backgroundColor: settings.backgroundColor
            });
            if (settings.counter)
            {
                $('<span class="read-bar-text-02"></span>').appendTo('.article-start');
                $('.read-bar-text-02').css(
                {
                    position: 'fixed',
                    bottom: settings.height + 'px',
                    left: '0',
                    width: settings.height * 10 + 'px',
                    marginLeft: '-' + settings.height * 10 + 'px',
                    textAlign: 'right',
                    color: settings.backgroundColor,
                    fontSize: settings.height * 5 + 'px'
                });
            }
        }
        _ = $(this);
        var readHeight = _.outerHeight();
        var startPoint = _.offset().top * 1.65;
        var currentPos = 0;
        $(document).on('scroll', function()
        {
            readHeight = _.outerHeight();
            currentPos = (_.viewportOffset().top - startPoint) /
                readHeight * 100;
            $('.read-bar-02').css('width', currentPos + '%');
            $('.read-bar-text-02').css('left', currentPos + '%');
            if (currentPos < 50)
            {
                $('.read-bar-02').css('background-color', 'red');
                $('.read-bar-text-02').text(Math.round(currentPos) +
                    '%');
                $('.read-bar-text-02').css(
                {
                    opacity: 1,
                    bottom: '0'
                });
                $('.read-bar-02').css(
                {
                    opacity: 1,
                    height: settings.height + 'px'
                });
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function()
                {
                    $('.read-bar-02')
                        .animate(
                        {
                            opacity: 0.8,
                            height: settings
                                .height /
                                2 +
                                'px'
                        }, 150);
                    $('.read-bar-text-02')
                        .animate(
                        {
                            opacity: 0,
                            bottom: '-' +
                                settings
                                .height *
                                10 +
                                'px'
                        }, 140);
                }, 250));
            }
            else if (currentPos < 80)
            {
                $('.read-bar-02').css('background-color', 'orange');
                $('.read-bar-text-02').text(Math.round(currentPos) +
                    '%');
                $('.read-bar-text-02').css(
                {
                    opacity: 1,
                    bottom: '0'
                });
                $('.read-bar-02').css(
                {
                    opacity: 1,
                    height: settings.height + 'px'
                });
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function()
                {
                    $('.read-bar-02')
                        .animate(
                        {
                            opacity: 0.8,
                            height: settings
                                .height /
                                2 +
                                'px'
                        }, 150);
                    $('.read-bar-text-02')
                        .animate(
                        {
                            opacity: 0,
                            bottom: '-' +
                                settings
                                .height *
                                10 +
                                'px'
                        }, 140);
                }, 250));
            }
            else if (currentPos <= 100)
            {
                $('.read-bar-02').css('background-color', 'green');
                $('.read-bar-text-02').text(Math.round(currentPos) +
                    '%');
                $('.read-bar-text-02').css(
                {
                    opacity: 1,
                    bottom: '0'
                });
                $('.read-bar-02').css(
                {
                    opacity: 1,
                    height: settings.height + 'px'
                });
                clearTimeout($.data(this, 'scrollTimer'));
                $.data(this, 'scrollTimer', setTimeout(function()
                {
                    $('.read-bar-02')
                        .animate(
                        {
                            opacity: 0.8,
                            height: settings
                                .height /
                                2 +
                                'px'
                        }, 150);
                    $('.read-bar-text-02')
                        .animate(
                        {
                            opacity: 0,
                            bottom: '-' +
                                settings
                                .height *
                                10 +
                                'px'
                        }, 140);
                }, 250));
            }
        });
    };
}(jQuery));
/********* Progress Semantic Bar jQuery End *********/

/********* Product JQuery Start  *********/
// Lift card and show Product-details on Mouseover
$('.product01').hover(function()
{
    $(this).addClass('animate');
}, function()
{
    $(this).removeClass('animate');
});
/********* Quantity Increase JQuery Start *********/
var incrementPlus;
var incrementMinus;
var buttonPlus = $(".cart-qty-plus");
var buttonMinus = $(".cart-qty-minus");
var incrementPlus = buttonPlus.click(function()
{
    var $n = $(this)
        .parent(".pd-qty-grp")
        .parent(".pd-qty")
        .find(".pd-expd");
    $n.val(Number($n.val()) + 1);
});
var incrementMinus = buttonMinus.click(function()
{
    var $n = $(this)
        .parent(".pd-qty-grp")
        .parent(".pd-qty")
        .find(".pd-expd");
    var amount = Number($n.val());
    if (amount > 0)
    {
        $n.val(amount - 1);
    }
});
/********* Quantity Increase JQuery End *********/
/********* On-Hover Image Zoom JQuery Start *********/
$(function()
{
    $('.zoom-image').each(function()
    {
        var originalImagePath = $(this).find('img').data('original-image');
        $(this).zoom(
        {
            url: originalImagePath,
            magnify: 4
        });
    });
});
$(function()
{
    $('.zoom-image01').each(function()
    {
        var originalImagePath = $(this).find('img').data('original-image');
        $(this).zoom(
        {
            url: originalImagePath,
            magnify: 1
        });
    });
});
/********* On-Hover Image Zoom JQuery End *********/
/********* Onclick Thambnail Image Seleted JQuery Start *********/
jQuery(document).ready(function($)
{
    $('.img-click-set').carousel(
    {
        interval: 2000
    });
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function()
    {
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('.img-click-set').carousel(id);
    });
    // When the carousel slides, auto update the text
    $('.img-click-set').on('slid.bs.carousel', function(e)
    {
        var id = $('.item.active').data('slide-number');
    });
});
/********* Onclick Thambnail Image Seleted JQuery End *********/
/********* Onclick Go To That Section JQuery Start *********/
jQuery('#anchor1').click(function()
{
    jQuery('html, body').animate(
    {
        scrollTop: jQuery(jQuery(this).attr('href')).offset().top
    }, 500);
    return false;
});
/********* Onclick Go To That Section JQuery End *********/
/********* Product JQuery End  *********/

/********* Responsive Blog Slider JQuery Start *********/
var swiper = new Swiper('.blog-slider',
{
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:
    {
        invert: false,
    },
    // autoHeight: true,
    pagination:
    {
        el: '.blog-slider-pagination',
        clickable: true,
    }
});
/********* Responsive Blog Slider JQuery End *********/

/********* Responsive Card Slider JQuery Start *********/
var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news-item');
var item = document.querySelector('.news-item');

function cLog(content)
{
    console.log(content);
}
if ($(window).width() > 800)
{
    $(document).on("mouseover", ".news-item", function(_event, _element)
    {
        var newsItem = document.querySelectorAll('.news-item');
        newsItem.forEach(function(element, index)
        {
            element.addEventListener('mouseover', function()
            {
                var x = this.getBoundingClientRect()
                    .left;
                var y = this.getBoundingClientRect()
                    .top;
                var width = this.getBoundingClientRect()
                    .width;
                var height = this
                    .getBoundingClientRect().height;
                $('.item-bg').addClass('active');
                $('.news-item').removeClass('active');
                // $('.news__item').removeClass('active');
                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x +
                    'px ) translateY(' + y +
                    'px)';
            });
            element.addEventListener('mouseleave', function()
            {
                $('.item-bg').removeClass('active');
                $('.news-item').removeClass('active');
            });
        });
    });
}

var swiper = new Swiper('.news-slider',
{
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect:
    {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints:
    {
        480:
        {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation:
    {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination:
    {
        el: '.news-slider-pagination',
        clickable: true
    },
    on:
    {
        init: function()
        {
            var activeItem = document.querySelector('.swiper-slide-active');
            var sliderItem = activeItem.querySelector('.news-item');
            $('.swiper-slide-active .news-item').addClass('active');
            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;
            $('.item-bg').addClass('active');
            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});
swiper.on('touchEnd', function()
{
    $('.news-item').removeClass('active');
    $('.swiper-slide-active .news-item').addClass('active');
});
swiper.on('slideChange', function()
{
    $('.news-item').removeClass('active');
});
swiper.on('slideChangeTransitionEnd', function()
{
    $('.news-item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');
    var sliderItem = activeItem.querySelector('.news-item');
    $('.swiper-slide-active .news-item').addClass('active');
    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;
    $('.item-bg').addClass('active');
    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});
/********* Responsive Card Slider JQuery End *********/

/********* Blog Scroll Slider Slider JQuery Start *********/
$(function()
{
    window.sr = ScrollReveal();
    if ($(window).width() < 768)
    {
        if ($('.timeline-content').hasClass('js--fadeInLeft'))
        {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass(
                'js--fadeInRight');
        }
        sr.reveal('.js--fadeInRight',
        {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    }
    else
    {
        sr.reveal('.js--fadeInLeft',
        {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
        sr.reveal('.js--fadeInRight',
        {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    }
    sr.reveal('.js--fadeInLeft',
    {
        origin: 'left',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });
    sr.reveal('.js--fadeInRight',
    {
        origin: 'right',
        distance: '300px',
        easing: 'ease-in-out',
        duration: 800,
    });
});
/********* Blog Scroll Slider Slider JQuery End *********/
/********* Tabs Style 04 JQuery Start *********/
$(".choose-tab").click(function()
{
    $(".choose-tab").find(".active");
    $("#line").addClass("one");
    $("#line").removeClass("two");
    $("#line").removeClass("three");
    $("#line").removeClass("four");
});
$(".pay-tab").click(function()
{
    $(".pay-tab").find(".active");
    $("#line").removeClass("one");
    $("#line").addClass("two");
    $("#line").removeClass("three");
    $("#line").removeClass("four");
});
$(".wrap-tab").click(function()
{
    $(".wrap-tab").find(".active");
    $("#line").removeClass("one");
    $("#line").removeClass("two");
    $("#line").addClass("three");
    $("#line").removeClass("four");
});
$(".ship-tab").click(function()
{
    $(".ship-tab").find(".active");
    $("#line").removeClass("one");
    $("#line").removeClass("two");
    $("#line").removeClass("three");
    $("#line").addClass("four");
});
/********* Tabs Style 04 JQuery End *********/
/********* Fixed Footer JQuery Start *********/
$(document).ready(function()
{
    // INITIATE THE FOOTER
    siteFooter();
    // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
    $(window).resize(function()
    {
        siteFooter();
    });

    function siteFooter()
    {
        var siteContent = $('.para-top-section');
        var siteContentHeight = siteContent.height();
        var siteContentWidth = siteContent.width();
        var siteFooter = $('.para-footer');
        var siteFooterHeight = siteFooter.height();
        var siteFooterWidth = siteFooter.width();
        /*console.log('Content Height = ' + siteContentHeight + 'px');
        console.log('Content Width = ' + siteContentWidth + 'px');
        console.log('Footer Height = ' + siteFooterHeight + 'px');
        console.log('Footer Width = ' + siteFooterWidth + 'px');*/
        siteContent.css(
        {
            "margin-bottom": siteFooterHeight + 50
        });
    };
});
/********* Fixed Footer JQuery End *********/
/********* CountDown jQuery Start *********/

$(document).ready(function()
{
    //
    (function(e)
    {
        e.fn.countdown = function(t, n)
        {
            function i()
            {
                eventDate = Date.parse(r.date) / 1e3;
                currentDate = Math.floor(e.now() / 1e3);
                //
                if (eventDate <= currentDate)
                {
                    n.call(this);
                    clearInterval(interval)
                }
                //
                seconds = eventDate - currentDate;
                days = Math.floor(seconds / 86400);
                seconds -= days * 60 * 60 * 24;
                hours = Math.floor(seconds / 3600);
                seconds -= hours * 60 * 60;
                minutes = Math.floor(seconds / 60);
                seconds -= minutes * 60;
                //
                days == 1 ? thisEl.find(".timeRefDays").text("Days") : thisEl.find(".timeRefDays").text(
                    "Days");
                hours == 1 ? thisEl.find(".timeRefHours").text("Hours") : thisEl.find(".timeRefHours")
                    .text("Hours");
                minutes == 1 ? thisEl.find(".timeRefMinutes").text("Minutes") : thisEl.find(
                    ".timeRefMinutes").text("Minutes");
                seconds == 1 ? thisEl.find(".timeRefSeconds").text("Seconds") : thisEl.find(
                    ".timeRefSeconds").text("Seconds");
                //
                if (r["format"] == "on")
                {
                    days = String(days).length >= 2 ? days : "0" + days;
                    hours = String(hours).length >= 2 ? hours : "0" + hours;
                    minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
                    seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
                }
                //
                if (!isNaN(eventDate))
                {
                    thisEl.find(".days").text(days);
                    thisEl.find(".hours").text(hours);
                    thisEl.find(".minutes").text(minutes);
                    thisEl.find(".seconds").text(seconds)
                }
                else
                {
                    errorMessage = "Invalid date. Example: 27 March 2015 17:00:00";
                    alert(errorMessage);
                    console.log(errorMessage);
                    clearInterval(interval)
                }
            }
            //
            var thisEl = e(this);
            var r = {
                date: null,
                format: null
            };
            //
            t && e.extend(r, t);
            i();
            interval = setInterval(i, 1e3)
        }
    })(jQuery);
    //
    $(document).ready(function()
    {
        function e()
        {
            var e = new Date;
            e.setDate(e.getDate() + 60);
            dd = e.getDate();
            mm = e.getMonth() + 1;
            y = e.getFullYear();
            futureFormattedDate = mm + "/" + dd + "/" + y;
            return futureFormattedDate
        }
        //
        $("#countdown-01").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-02").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-03").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-04").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-05").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-06").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-07").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-08").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-09").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-10").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });

        $("#countdown-11").countdown(
        {
            date: "19 March 2020 16:52:40", // change date/time here - do not change the format!
            format: "on"
        });


    });
});

/********* CountDown jQuery End *********/

