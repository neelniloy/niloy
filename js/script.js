/*====================================
|   |   |   |   Preloader
=================================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*====================================
|   |   |   |   Progress Bars
=================================== */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});


/* =========================================
               Magnifier
============================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});