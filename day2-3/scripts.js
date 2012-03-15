

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

$("#sample").click(function() {
    
    $.mobile.loadPage( "pages/sample1.php", {
	pageContainer: $("#result")
	});
})