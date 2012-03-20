function Actor(name) {
    var myName = name;
    var myBiography;
    
    this.setBiography= function(biography) {myBiography = biography;}
    
    this.getName= function() {return myName;}
    this.getBiography= function() {return myBiography;}
    
 
}

Actor.prototype.toString= function() { return this.getName(); }

