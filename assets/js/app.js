$(function() {
    moment.loadPersian({ usePersianDigits: true });
    $('.fixdate').each(function() {
        var m = $(this).attr('data-date');
        $(this).html(moment(m, "YYYY-M-D").format('dddd, jD jMMMM jYYYY'));
    });
});