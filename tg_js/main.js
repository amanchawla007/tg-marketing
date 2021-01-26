/*function sub_form() {
    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var company = $('#company').val();
    var location = $('#location').val();
    var service = $('#service').val();
    var budget = $('#budget').val();
    var message = $('#message').val();
    if (name.trim() == "" || phone.trim() == "" || email.trim() == "") {
        alert("Please Ensure all the fields are correctly filled..!!");
    } else {
        var data = $("#contact-form").serialize()+"&ref=form_data";
        //alert(data);
        $.ajax({
            type: "post",
            url: "thankyou.php",
            data: data,
            success: function(msg) {
                //alert(msg);
                if (msg == '1') {
                    alert('Thank You for your valuable time. We will get back to you soon..!!'); 
                    window.location.href = 'index.php';
                } else if (msg == '0') {
                    alert('Something Went Wrong. Please try again later.');
                    window.location.href = 'index.php';
                } 
            }
        });
    }
}
*/

// vertical service form JS //

function sub_form() {
    var fname = document.forms["service_form"]["name"].value;
    if (fname == "") {
        alert("Name must be filled out");
        //fname.focus();
        return false;
    }

    var fphone = document.forms["service_form"]["phone"].value;
    if (fphone == "") {
        alert("Please fill 10 digits mobile number");
        // fphone.focus();
        return false;
    }

    var femail = document.forms["service_form"]["email"].value;
    if (femail == "") {
        alert("Email Id is Required");
        //femail.focus();
        return false;
    }
}

// end vertical service form JS //


// contact us form validation //

function service_sub() {

    var sname = document.forms["service_enq"]["name"].value;
    if (sname == "") {
        alert("Please enter your name");
        return false;
    }

    var sphone = document.forms["service_enq"]["phone"].value;
    if (sphone == "") {
        alert("Please enter Valid Mobile Number");
        return false;
    }

    var semail = document.forms["service_enq"]["email"].value;
    if (semail == "") {
        alert("Please enter Valid Email Id");
        return false;
    }

    var scompany = document.forms["service_enq"]["company"].value;
    if (scompany == "") {
        alert("Company Name is Required");
        return false;
    }

    var slocation = document.forms["service_enq"]["location"].value;
    if (slocation == "") {
        alert("Please Enter your Company Location");
        return false;
    }

    var sservice = document.forms["service_enq"]["services"].value;
    if (sservice == "") {
        alert("Please tell us for which service are you looking for");
        return false;
    }

    var sbudget = document.forms["service_enq"]["budget"].value;
    if (sbudget == "") {
        alert("Please enter the project budget");
        return false;
    }

    var sbusiness_challenges = document.forms["service_enq"]["business_challenges"].value;
    if (sbusiness_challenges == "") {
        alert("Please Share your Business Challenges");
        return false;
    }

}
// end contact us form validation //


// Free analysis form validation //

function free_analysis() {

    var user_name = document.forms["freeanalysis"]["name"].value;
    if (user_name == "") {
        alert("Please enter your name");
        return false;
    }

    var user_email = document.forms["freeanalysis"]["email"].value;
    if (user_email == "") {
        alert("Please enter your Valid Email Id");
        return false;
    }

    var user_contact = document.forms["freeanalysis"]["user_contact"].value;
    if (user_contact == "") {
        alert("Please enter your 10 Digits Mobile Number");
        return false;
    }

    var user_url = document.forms["freeanalysis"]["user_url"].value;
    if (user_url == "") {
        alert("Please enter Valid Website URL");
        return false;
    }

}
// End Free analysis form validation //

function career_sub() {
    var cname = document.forms["career-form"]["cname"];
    var cemail = document.forms["career-form"]["cemail"];
    var cphone = document.forms["career-form"]["cphone"];
    var cposition = document.forms["career-form"]["cposition"];
    var attachment = document.forms["career-form"]["attachment"];
    if (cname.value.trim() == "") {
        window.alert("Please enter your name.");
        cname.focus();
        return false;
    }
    if ((cemail.value.trim() == "") || (cemail.value.indexOf("@", 0) < 0)) {
        window.alert("Please enter proper valid email address.");
        cemail.focus();
        return false;
    }
    if (cphone.value.trim() == "") {
        window.alert("Please enter your 10 Digits mobile number.");
        cphone.focus();
        return false;
    }
    if (cposition.value.trim() == "") {
        window.alert("Please enter the position you applied for.");
        cposition.focus();
        return false;
    }
    if (attachment.value == "") {
        window.alert("Please attach your CV.");
        attachment.focus();
        return false;
    }
}
$(function($) {
    "use strict";
    if ($(window).width() < 991) {
        $(".navbar-nav li a").on("click", function() {
            $(this).parent("li").find(".dropdown-menu").slideToggle();
            $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
        });
    }
    $(".tw-hero-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        dots: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        mouseDrag: false,
        smartSpeed: 1100,
        navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],
    });
    $(".tw-testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        mouseDrag: false,
        smartSpeed: 900,
    });
    if ($(".testimonial-slider").length > 0) {
        $(".testimonial-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
            smartSpeed: 900,
        });
    };
    if ($(".testimonial-carousel-gray").length > 0) {
        $(".testimonial-carousel-gray").owlCarousel({
            items: 2,
            margin: 20,
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
            smartSpeed: 900,
        });
    };
    if ($(".testimonial-box-carousel").length > 0) {
        $(".testimonial-box-carousel").owlCarousel({
            items: 3,
            margin: 20,
            loop: true,
            autoplay: true,
            nav: false,
            dots: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
            responsiveClass: true,
            smartSpeed: 900,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        });
    };
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
    $(".clients-carousel").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause: true,
        mouseDrag: false,
        smartSpeed: 900,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.back-to-top button').fadeIn();
        } else {
            $('.back-to-top button').fadeOut();
        }
    });
    $(".back-to-top button").on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    if ($('.video-popup').length > 0) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    };
    $('.mission-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        mouseDrag: false,
        smartSpeed: 900,
        animateOut: 'animated slideInRight',
        animateIn: 'animated slideInRight',
    });
    if ($('#map').length > 0) {
        var contactmap = {
            lat: -37.816218,
            lng: 144.964068
        };
        $('#map').gmap3({
            zoom: 12,
            center: contactmap,
            scrollwheel: false,
            mapTypeId: "shadeOfGrey",
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            }
        }).styledmaptype("shadeOfGrey", [{
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }], {
            name: "HQ"
        }).marker({
            position: contactmap,
            icon: './images/icon/map_marker.png'
        }).infowindow({
            position: contactmap,
            content: "16122 Collins Street West. Victoria"
        }).then(function(infowindow) {
            var map = this.get(0);
            var marker = this.get(1);
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        });
    };
    $('#contact-form').submit(function() {
        var $form = $(this),
            $error = $form.find('.error-container'),
            action = $form.attr('action');
        $error.slideUp(750, function() {
            $error.hide();
            var $name = $form.find('.form-name'),
                $phone = $form.find('.form-phone'),
                $email = $form.find('.form-email'),
                $subject = $form.find('.form-subject'),
                $message = $form.find('.form-message');
            $.post(action, {
                name: $name.val(),
                phone: $phone.val(),
                email: $email.val(),
                subject: $subject.val(),
                message: $message.val()
            }, function(data) {
                $error.html(data);
                $error.slideDown('slow');
                if (data.match('success') != null) {
                    $name.val('');
                    $phone.val('');
                    $email.val('');
                    $subject.val('');
                    $message.val('');
                }
            });
        });
        return false;
    });
    if ($(".service-list-carousel").length > 0) {
        $(".service-list-carousel").owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            autoplay: true,
            nav: true,
            navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
            dots: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
            responsiveClass: true,
            smartSpeed: 900,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                    margin: 5,
                }
            }
        });
    };
    $(".timeline-wrapper .row").hover(function() {
        $(".timeline-item").find(".timeline-badge").removeClass("active");
        $(this).find(".timeline-badge").addClass("active");
    });
    $(".timeline-wrapper .row").hover(function() {
        $(".timeline-item").find(".timeline-date").removeClass("active");
        $(this).find(".timeline-date").addClass("active");
    });
    $(".tw-search i, .tw-offcanvas-menu i").on('click', function() {
        $(".search-bar").addClass('active');
    });
    $(".search-bar i.fa-close").on('click', function() {
        $(".search-bar").removeClass('active');
    });
    $(".tw-menu-bar").on("click", function() {
        $(".offcanvas-wrapper").addClass('active');
        $(".offcanvas-menu-overlay").addClass('menu-show');
    });
    $(".menu-close-btn, .offcanvas-menu-overlay").on("click", function() {
        $(".offcanvas-wrapper").removeClass('active');
        $(".offcanvas-menu-overlay").removeClass('menu-show');
    });
    new WOW().init();

    function toggleIcon(e) {
        $(e.target).prev('.card-header').find(".faq-indicator").toggleClass('fa-minus fa-plus');
    }
    $('#accordion').on('hidden.bs.collapse', toggleIcon);
    $('#accordion').on('shown.bs.collapse', toggleIcon);
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 400) {
            $('.tw-head, .tw-header').addClass('navbar-fixed');
        } else {
            $('.tw-head, .tw-header').removeClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 400) {
            setTimeout(() => {
                $('header').removeClass('off-canvas');
            }, 0);
        } else {
            setTimeout(() => {
                $('header').addClass('off-canvas');
            }, 0);
        }
    });
});