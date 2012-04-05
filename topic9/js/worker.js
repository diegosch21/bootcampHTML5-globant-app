var msj = 1;

postMessage("Web worker started ["+(new Date()).toUTCString()+"]");
setInterval(function() { 
    postMessage("Message #"+msj+": Web worker is working ["+(new Date()).toUTCString()+"]");
    ++msj;
},60000);
    


