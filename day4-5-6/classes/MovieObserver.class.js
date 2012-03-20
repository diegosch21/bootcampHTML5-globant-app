function MovieObserver () {

    this.handleSub = function(e,event,title) {
        if (event == 'playing')
            console.log('Playing '+title+'...');
        else if (event == 'stopped')
            console.log(title+' stopped.');
        
    }
    $.subscribe("movies",this.handleSub);
}


(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
   };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
   };

}(jQuery));
