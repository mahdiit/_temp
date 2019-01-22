$(function() {
    $('.fixdate').each(function() {
        var m = $(this).attr('data-date');
        $(this).innerHtml(moment(m, "YYYY-M-D").format('jYYYY/jM/jD'));
    });
});