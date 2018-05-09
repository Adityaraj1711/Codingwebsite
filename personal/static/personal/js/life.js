(function($) {
	
	
    // WINDOW.LOAD FUNCTION start
    $(window).load(function() {
        "use strict";
		
        // flexSlider
        $(".flexslider, .flexslider-quotes").flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false,
            slideshowSpeed: 3800,
            animationSpeed: 1000
        });
        $(".flexslider-the-sea, .flexslider-time").flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false,
            slideshowSpeed: 4800,
            animationSpeed: 1000
        });
		
        // screen loader
        $('.screen-loader').fadeOut('slow');
	
    });
    // WINDOW.LOAD FUNCTION end
	
	
    // DOCUMENT.READY FUNCTION start
    $(document).ready(function() {
        "use strict";
		
        // preload
        $('#preload').css({
            display: 'table'
        });
        // preload.Timeout
        setTimeout(function() {
            $('#preload').delay(250).fadeOut(1400);
            $('.fireOT-inner').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
            $('#ui-layer').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
            $('.borders-left, .borders-right').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
			$('.clouds, .film-grain, .weather, #snow, #particles-holder').delay(1400).css({
                display: 'none'
            }).fadeIn(2400);
        });
		
        // kenburnsy
        $("#kenburnsy-bg").kenburnsy({
            fullscreen: true
        });
		
        // countdown setup start
        $("#countdown").countdown({
            date: "24 March 2018 9:00:00", // countdown target date settings
            format: "on"
        }, function() {
            // callback function
        });
		
        // magnificPopup
        $('.popup-photo').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                tPrev: '',
                tNext: '',
                tCounter: '%curr% / %total%'
            },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
		
        // owlCarousel
        $(".services-gallery-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
            autoHeight: true,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
		
        // menu active state
        $('a.menu-state').on("click", function() {
            $('a.menu-state').removeClass("active");
            $(this).addClass("active");
        });
		
        // YTPlayer
        $(function() {
            $(".player").mb_YTPlayer();
        });
		
        // imagesLoaded
        $('#kenburnsy-bg').imagesLoaded(function() {
            // images have loaded
        });
		
		// snow
		$(function() {
            $("#snow").each(function() {
                snowBind();
            });
        });
		
		// styleswitch [for demonstration purposes only]
		$(".corner").on("click", function() {
            $('#customizer').toggleClass('s-open');
		});
		function swapStyleSheet(sheet) {
            document.getElementById('general-css').setAttribute('href', sheet);
		}
	
    });
    // DOCUMENT.READY FUNCTION end
	
	
    // MOBILE DETECT start
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // MOBILE DETECT end


})(jQuery);


// GOOGLE ANALYTICS start
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3033286-18']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
// GOOGLE ANALYTICS end