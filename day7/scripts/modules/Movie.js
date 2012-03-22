define(["./Director"],function(Director) {
    function Movie (title,rating,id) {
        //Private variables
        var myTitle= title? title : '';
        var myRating = rating? rating : 0;
        var myId = id? id : 0;
        var actors = [];
        var myDirector;
        
        //Privileged methods (setters and getters)
        this.getTitle= function() {return myTitle;}
        this.setTitle= function(title) {myTitle = title;}
        this.getRating= function() {return myRating;}
        this.setRating= function(rating) {myRating = rating;}
        this.getId= function() {return myId;}
        this.setId= function(id) {myId = id;}
        this.setCast= function(cast) { actors = cast;   }
        this.getCast= function() { return actors; }

        this.setDirector= function(director) { myDirector = director;   }
        this.getDirector= function() { return myDirector; }
    }
    // Public methods
       
    Movie.prototype.play = function(){ 
        var msg = 'Playing '+this.getTitle()+'...';
        console.log(msg);
        return msg;
        //$.publish("movies",['play',this.getTitle()]);
    }
    Movie.prototype.stop = function() {
        var msg = this.getTitle()+' stopped.';
        console.log(msg);
        return msg;
        //$.publish("movies",['stop',this.getTitle()]); 
    }
    
    
    return (Movie);
});




