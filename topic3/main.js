/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var padrino = new Movie('The Godfather',10,1023);
console.log("Movie created. Title: "+padrino.getTitle() +", Rating: "+padrino.getRating()+", ID: "+padrino.getId() );
var reyLeon = new Movie('The Lion King',9,2581);
console.log("Movie created. Title: "+reyLeon.getTitle() +", Rating: "+reyLeon.getRating()+", ID: "+reyLeon.getId() );

var observer = new MovieObserver();
padrino.play();
padrino.stop();

reyLeon.setTitle("El Rey Leon");console.log("Title of \'The Lion King\' translated to spanish.");
reyLeon.play();

var xmen = new DownloadableMovie('X-Men', 8, 3685);
console.log("Downloadable movie created. Title: "+xmen.getTitle() +", Rating: "+xmen.getRating()+", ID: "+xmen.getId() );
xmen.download();

var ironman2 = new Movie();
ironman2.setTitle('Iron Man 2');
ironman2.share('V. Rivas');

var actor1 = new Actor('G. Francella');
var actor2 = new Actor('C. Chaplin');
var actor3 = new Actor('J. Travolta');

console.log('Actors: '+actor1.getName()+', '+actor2.getName()+', '+actor3.getName());
ironman2.setCast(['G. Francella',actor2,actor3]);
var arr = ironman2.getCast();
console.log(ironman2.getTitle()+" cast: "+arr[0]+", "+arr[1]+", "+arr[2]);