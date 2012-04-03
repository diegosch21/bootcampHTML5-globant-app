$(document).ready(function() {

    var area = $("#code");

    /* Exercise 1: execute script form a textarea */
    $("#run").click(function () {
        var code = area.val();
        eval(code);
    });

    /* Exercise 2: Persist code in local storage */
    area.keyup(function () {
        if ($('#localstorage').is(':checked')) {
            window.localStorage.setItem('code', area.val());
        }
    })
    area.val(window.localStorage['code']);

    $("#localstorage").change(function(){
        if ($(this).is(':checked')) {
            window.localStorage.setItem('code', area.val());
        }
        else {
            window.localStorage.clear();
        }
    });


    /* Exercise 3: Drop files */ 

    $.event.props.push('dataTransfer');

    var dropZone = $('#dropzone');
    dropZone.bind('dragover',function(evt) { 
        evt.stopPropagation();
        evt.preventDefault();
        dropZone.addClass('dragover');
    });
    dropZone.bind('dragleave',function(evt) { 
        evt.stopPropagation();
        evt.preventDefault();
        dropZone.removeClass('dragover');
    });

    dropZone.bind('drop',function(evt) { 
        evt.stopPropagation();
        evt.preventDefault();
        dropZone.removeClass('dragover');
        $('#files').addClass('disp');
        var html = '';
        $.each(evt.dataTransfer.files, function(i,file){
            html+= '<li>'+file.name+' <i>('+file.type+', '+file.size+' bytes)</i></li>';
        }); 
        $('#list').html(html);
    });

    /*Exercise 4: Geolocation */
    $("#geo").click(function () {
    
        var latBBca = new google.maps.LatLng(-38.717,-62.266);
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map;
        var initialLocation;
        var infowindow = new google.maps.InfoWindow();
        var contentString;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, onError);
            // also monitor position as it changes
            navigator.geolocation.watchPosition(showPosition);
        } else {
            onError();
        }

        function showPosition(position) {
            map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            initialLocation = new google.maps.LatLng(lat, lng);
            map.setCenter(initialLocation);

            infowindow.setContent("Your current position is: "+lat + " " + lng+" [approx.]");
            infowindow.setPosition(initialLocation);
            infowindow.open(map);
        }

        function onError() {
            if (navigator.geolocation) {
                initialLocation = latBBca;
                contentString = "Error: The Geolocation service failed.";
            } else {
                initialLocation = latBBca;
                contentString = "Error: Your browser doesn't support geolocation.";
            }
            mapOptions.zoom = 4;
            map = new google.maps.Map(document.getElementById("content"), mapOptions);
            map.setCenter(initialLocation);
            infowindow.setContent(contentString);
            infowindow.setPosition(initialLocation);
            infowindow.open(map);
        }
        
    });
    
    /* Exercise 5: Web worker */
    var msg = $("#worker_msg");
    $("#create_worker").click(function() {
        var worker = new Worker('js/worker.js');
        worker.onmessage = function (event) { 
            msg.html(msg.html()+'<br/>'+event.data); 
        }; 
    });
    
    /* Exercise 6: web socket */
    var log = $("#log");
    var ws;
    $("#create_socket").click(function() {
        if ("WebSocket" in window) {
            ws = new WebSocket("ws://echo.websocket.org");
            ws.onopen = function() {
                $("#connect").addClass("connected");
                log.html('WebSocket connected with ws://echo.websocket.org')
            };
            ws.onmessage = function (evt) {
                log.html(log.html()+'<br/>Receive: '+ evt.data);
            };
            ws.onclose = function() { 
                log.html(log.html()+'<br/>websocket is closed.');
                $("#connect").removeClass("connected");
            };
        } else {
            log.html('The browser doesn\'t support WebSocket');
        }
    });
    $("#send").click(function() {
        var msg = $("#msg_send").val();
        ws.send(msg);
        log.html(log.html()+'<br/>Send : '+ msg);
        $("#msg_send").val('');
    });
    
    /* 
     * Exercise 7 */
    
    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            window.applicationCache.swapCache();
                if (confirm('A new version of this site is available. Load it?')) {
                    window.location.reload();
            }
        }
    }, false);
  
});

    
 
    


    


