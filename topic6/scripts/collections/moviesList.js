define(["underscore","backbone","localStorage","models/Movie"],
    function(_, Backbone,localstorage,Movie) {
        var MovieList = Backbone.Collection.extend({
            model: Movie,
            
            localStorage: new Store("movies") 
        })

        return MovieList;    

    });

