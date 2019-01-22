$(function() {
    $('.fixdate').each(function() {
        var m = $(this).attr('data-date');
        $(this).html(moment(m, "YYYY-M-D").format('jYYYY/jM/jD'));
    });
});