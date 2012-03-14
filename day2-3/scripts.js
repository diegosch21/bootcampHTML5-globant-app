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
   
    var param = $("#alias").val();
    var resul = $("#result");
        
    $.post('api/dispatcher.php',
        {service: 'welcome.hello', params: {"name": ""+param+""}},
        function(res) {
            resul.html(res);
            resul.addClass('resultado');
            resul.removeClass('error');
        });
        
    $("#alias").val('');
    $("#alias").focus();
    
    resul.ajaxError(function(event, request, settings){
        $(this).html("Error en " + settings.url + ": "+ request.responseText);
        $(this).addClass('error');
        $(this).removeClass('resultado');
    });


});