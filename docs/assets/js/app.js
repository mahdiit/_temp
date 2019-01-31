$(function() {
    moment.loadPersian();
    $('.fixdate').each(function() {
        var m = $(this).attr('datetime');
        $(this).html(moment(m, "YYYY-M-D").format('dddd, jD jMMMM jYYYY'));
    });


    $(".owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      nav : true,
      rtl: true,
      navText: ['<i class="fas fa-chevron-circle-right slider-btn"></i>',
    '<i class="fas fa-chevron-circle-left slider-btn"></i>'],
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    });
});
