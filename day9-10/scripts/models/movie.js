define(["underscore","backbone"],
    function(_, Backbone) {
        var Movie = Backbone.Model.extend({
            defaults: function() {
                return {
                    title: 'title',
                    year: 'year',
                    genre: 'genre',
                    synopsis: 'synopsis'
                };
            },

            initialize: function() {
                if (!this.get("title")) {
                    this.set({"title": this.defaults.title});
                }
                if (!this.get("year")) {
                    this.set({"year": this.defaults.title});
                }
                if (!this.get("genre")) {
                    this.set({"genre": this.defaults.title});
                }
                if (!this.get("synopsis")) {
                    this.set({"synopsis": this.defaults.title});
                }
                console.log("Movie created: "+this.get("title")+' ['+this.get("year")+', '+this.get("genre")+' ]');
            },
            
            clear: function() {
                this.destroy();
            } 

        })

        return Movie;    

    });
            
            
 