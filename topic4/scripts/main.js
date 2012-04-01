require.config({
    paths: {
        jQuery: 'lib/jquery',
        jQueryMobile: 'lib/jquery.mobile'
    }
});



require(["modules/Movie","modules/Director","order!jQuery","order!jQueryMobile"],
    function(Movie,Director) {

        var log = '<p>';
        var padrino = new Movie('The Godfather',10,1023);
        log += "Movie created. Title: "+padrino.getTitle() +", Rating: "+padrino.getRating()+", ID: "+padrino.getId();
        log += '<br/>'
        var simpsons = new Movie('The Simpsons Movie',9,2581);
        log += "Movie created. Title: "+simpsons.getTitle() +", Rating: "+simpsons.getRating()+", ID: "+simpsons.getId();
        log += '<br/>'
        log += padrino.play()+'<br/>';
        log += padrino.stop();
        log+='</p>';

        var director = new Director('Matt Groening');
        director.setQuotes(['Eat my shorts', 'Me fail English? That’s unpossible. ','Oh, so they have Internet on computers now!','Don’t kid yourself, Jimmy. If a cow ever got the chance, he’d eat you and everyone you care about!','Uh, no, they’re saying \"Boo-urns, Boo-urns.\"']);
        log+= '<p>Director created. Name: '+director.getName()+'<br/>';
        simpsons.setDirector(director); 
        log+= "Director of "+simpsons.getTitle()+": "+simpsons.getDirector()+"</p>";
        $("#log").html(log);
        
        $(".speak").click(function(){
            var quote = simpsons.getDirector().speak();
            $("#who").html(quote[0]);
            $("#quote").html(quote[1]);
        })
    }
);

