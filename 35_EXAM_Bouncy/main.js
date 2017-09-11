;(function($){

    $(function () {

        /********MASONRY*********/
/*
        $('.grid').masonry({
            // options
            itemSelector: '.grid-item'
        });*/

        /********ISOTOPE*********/

        $('.main-iso').isotope({
            itemSelector: '.item'
        });
        $('.iso-nav ul li').click(function () {
            $('.iso-nav ul li').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $('.main-iso').isotope({
                filter: selector,
                gutter: 10
            });
            return false;
        });

        /**********SLICK-SLIDER*************/

        $('.slider').slick({
            autoplay: true,
            dots: true,
            dotsClass: 'dots',
            infinite: true,
            arrows: false
        });

        /*******GOOGLE MAP*********/

        var map,
            point = {lat: 50.4501473, lng: 30.5211465};
        map = new google.maps.Map(document.getElementById('map'), {
            center: point,
            zoom: 9
        });
        var marker = new google.maps.Marker({
            position: {lat: 50.4501473, lng: 30.5211465},
            map: map,
            animation: google.maps.Animation.DROP,
            icon: "images/Marker.png"
        });

        /***********SCROLL***************/

        $('.menu-link_portfolio').on('click', function () {
            $( 'body').animate({'scrollTop': $('#portfolio').offset().top}, 800);
            return false
        });
        $('.menu-link_team').on('click', function () {
            $( 'body').animate({'scrollTop': $('#team').offset().top}, 800);
            return false
        });
        $('.menu-link_contact').on('click', function () {
            $( 'body').animate({'scrollTop': $('#contact-us').offset().top}, 800);
            return false
        });
        $('.scroll-item').on('click', function () {
            $( 'body').animate({'scrollTop': $('#portfolio').offset().top}, 800);
            return false
        });
    });
})(jQuery);