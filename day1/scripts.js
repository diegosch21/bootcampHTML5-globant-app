/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
   alert("Sitio cargado");
   $("#alias").focus();
});

$("#alias").keypress(function(event) {
    if (event.which == 13) {
        $("#btn").click();
    }
});

$("#btn").click(function(event) {
   
   event.preventDefault();
    var param = $("#alias").val();
        
    $.post('api/dispatcher.php',
        {service: 'welcome.hello', params: {"name": ""+param+""}},
        function(res) {
            $("#result").html(res);
            $("#result").addClass('resultado');
            $("#result").removeClass('error');
            highlightMyName();
        });
        
    $("#alias").val('');
    $("#alias").focus();
    
    $("#result").ajaxError(function(event, request, settings){
        $(this).html("Error en el pedido a" + settings.url); // + ": "+ request.responseText);
        $(this).addClass('error');
        $(this).removeClass('resultado');
        
    });
});

function highlightMyName() {
    $("#result:contains('Diego')").css("background-color", "yellow");
}


$("#movie").click(function() {
    url = 'api/dispatcher.php';
    $.ajax( url, {
        type: 'POST', 
        crossDomain: 'true',
        data: {service: 'movie.getTop', params: {'name': 'null'}},
        dataType: 'json' , 
        success: function(res) {
            
            $("#pelis").html('<i>Cargando lista...</i>');
            
            var obj = res;
            var html = '<h2>Lista de películas</h2>';
            var i = 0;
            
            while (obj[i]!= null) {
                html += "<div class='peli'><h3><b>"+obj[i].Name+"</b> <i>["+obj[i].ReleaseYear+"]</i></h3>";
                html += "<img src='"+obj[i].BoxArt.SmallUrl+"' />";
                html += "<p>"+obj[i].Synopsis+"</p></div>";
                ++i;
            } 
            $("#pelis").html(html);
            
        }
        
    }
    )
});