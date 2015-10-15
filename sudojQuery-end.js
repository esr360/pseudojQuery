// Safely use .ready() before including jQuery
// http://writing.colin-gourlay.com/safely-using-ready-before-including-jquery/

(function ($, doc) {
    $.each(readyQ, function (index, handler) {
        $(handler);
    });
    $.each(bindReadyQ, function (index, handler) {
        $(doc).bind("ready", handler);
    });
})(jQuery, document);