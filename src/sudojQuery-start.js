// Safely use .ready() before including jQuery
// https://github.com/esr360/sudojQuery
// http://writing.colin-gourlay.com/safely-using-ready-before-including-jquery/

(function (w, d, u) {

    // Define two queues for handlers
    w.readyQ = [];
    w.bindReadyQ = [];

    // Push a handler into the correct queue
    function pushToQ(x, y) {
        if (x == "ready") {
            w.bindReadyQ.push(y);
        } else {
            w.readyQ.push(x);
        }
    }

    // Define an alias object (for use later)
    var alias = {
        ready: pushToQ,
        bind: pushToQ
    }

    // Define the fake jQuery function to capture handlers
    w.$ = w.jQuery = function (handler) {
        if (handler === d || handler === u) {
            // Queue $(document).ready(handler), $().ready(handler)
            // and $(document).bind("ready", handler) by returning
            // an object with alias methods for pushToQ
            return alias;
        } else {
            // Queue $(handler)
            pushToQ(handler);
        }
    }

})(window, document);