define(function() {
    function Director (name) {
        //Private variables
        var myName= name? name : '';
        var quotes = [];
        
        //Privileged methods (setters and getters)
        this.getName= function() {return myName;}
        this.setName= function(name) {myName = name;}
        this.setQuotes= function(quotes) {actors = quotes;}
        this.getQuotes= function() {return actors;}
    }
    // Public methods
    Director.prototype.speak = function() {
        var q = this.getQuotes();
        var who = this.getName() + " says: ";
        var quote = q[Math.floor(Math.random() * q.length)];
        console.log(who+quote);
        $("#who").html(who);
        $("#quote").html(quote);
    }
    Director.prototype.toString = function() {
        return this.getName();
    }
    
    return (Director);
});


