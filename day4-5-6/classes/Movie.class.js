/*
 * Movie Class (refactored as a Module)
 */

var Movie = (function (title,rating,id) {
    return function(title,rating,id) {
        
        //Private variables
        var myTitle= title? title : '';
        var myRating = rating? rating : 0;
        var myId = id? id : 0;
        var actors = [];
        
        //Privileged methods (setters and getters)
        this.getTitle= function() {return myTitle;}
        this.setTitle= function(title) {myTitle = title;}
        this.getRating= function() {return myRating;}
        this.setRating= function(rating) {myRating = rating;}
        this.getId= function() {return myId;}
        this.setId= function(id) {myId = id;}

        this.setCast= function(cast) { actors = cast;   }
        this.getCast= function() { return actors; }
    }
    
})();

// Public methods
Movie.prototype.play = function(){ 
    //console.log('Playing '+this.getTitle()+'...');
    $.publish("movies",['play',this.getTitle()]);
}
Movie.prototype.stop = function() {
    //console.log(this.getTitle()+' stopped.')
    $.publish("movies",['stop',this.getTitle()]); 
}

socialMixin.call(Movie.prototype);