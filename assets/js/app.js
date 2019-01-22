$(function() {
    moment.loadPersian({ usePersianDigits: true });
    $('.fixdate').each(function() {
        var m = $(this).attr('datetime');
        $(this).html(moment(m, "YYYY-M-D").format('dddd, jD jMMMM jYYYY'));
    });
});