var obj;


$(document).ready(function() {
  // alert("Sitio cargado");
   $("#alias").focus();

});

$("#alias").keypress(function(event) {
    if (event.which == 13) {
        $("#btn").click();
 
    }
});

$(document).keyup(function(event) {
    if (event.which ==27) {
        $.mobile.hidePageLoadingMsg();
        $("#alias").val('');
        
    }
});

$("#btn").click(function() {
   
    $.mobile.showPageLoadingMsg();
    var param = $("#alias").val();
    var resul = $("#result");
    var alia = $("#alias");
    url = 'api/dispatcher.php';
        
    $.post(url,
        {service: 'welcome.hello', params: {"name": ""+param+""}},
        function(res) {
            resul.html(res);
            resul.addClass('resultado');
            resul.removeClass('error');
        });
        
    alia.val('');
    alia.focus();
    
    resul.ajaxError(function(event, request, settings){
        $(this).html("Error en " + settings.url + ": "+ request.responseText);
        $(this).addClass('error');
        $(this).removeClass('resultado');
    });

});

    $("body").on("click",".load",function() {
        $.mobile.showPageLoadingMsg();
        url = 'api/dispatcher.php';
        $.ajax( url, {
            type: 'POST', 
            
            data: {service: 'movie.getTop', params: {'name': 'null'}},
            dataType: 'json' , 
            success: function(res) {
               
                obj = res;
                var html = "";
                var i = 0;

                while (obj[i]!= null) {
                    html += "<li><a href='#dialogPeli' data-identity='"+i+"' data-rel='dialog'><img src='"+obj[i].BoxArt.SmallUrl+"'/>";
                    html += "<h3>"+obj[i].Name+"</h3>";
                    html += "<p>"+obj[i].ShortSynopsis+"</p></a></li>";
                    ++i;
                } 
                var pelis = $("#pelis");
                pelis.html(html)
                    .listview('refresh');
                $.mobile.hidePageLoadingMsg();
            }
        });
    });

    $("#lista").on("click","li", function() {
        var i = $(this).index();
        var html = "<h2>"+obj[i].Name+"</h2>";
        html += "<div style='float:left; padding-right: 6px'> <img src='"+obj[i].BoxArt.LargeUrl+"'  width='110px' height='150px'/></div>";
        html += "<p class='info'><i>Year:</i> "+obj[i].ReleaseYear+"</p><p class='info'><i>Synopsis:</i> "+obj[i].Synopsis+"</p>";
        $("#infoPeli").html(html);
    });