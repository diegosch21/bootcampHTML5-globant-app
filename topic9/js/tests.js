$(function(){

    if(!Modernizr.mq('only all'))
    {
        alert("This browser doesn't support media queries.");
        $("body").html("<h1>This page cannot be loaded</h1>")

    }
    else {


        yepnope({
            test: Modernizr.geolocation,
            nope: ['js/polyfills/gears_init.js', 'js/polyfills/geolocation.js'],
            callback: function (url, result, key) {
                alert("This browser doesn't support native geolocation. "+url+" has loaded");
            }
        });

        yepnope({
            test: Modernizr.draganddrop,
            nope: ['js/polyfills/dropfile.js'],
            callback: function (url, result, key) {
                alert("This browser doesn't support native drag'n'drop of files. "+url+" has loaded");
            }
        });

        yepnope({
            test: Modernizr.webworkers,
            nope: ['js/polyfills/fakeworker-0.1.js'],
            callback: function (url, result, key) {
                alert("This browser doesn't support native web workers. "+url+" has loaded");
            }
        });

        yepnope({
            test: Modernizr.websockets,
            nope: ['js/polyfills/swfobject.js','js/polyfills/web_socket.js'],
            callback: function (url, result, key) {
                WEB_SOCKET_SWF_LOCATION = "WebSocketMain.swf";
                alert("This browser doesn't support native web sockets. "+url+" has loaded");
            }
        });
    }

});
