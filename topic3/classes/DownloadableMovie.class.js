DownloadableMovie.prototype = new Movie();
DownloadableMovie.prototype.constructor = DownloadableMovie;

function DownloadableMovie(title,rating,id) {
    //Constructor
    this.superConstructor = Movie;
    this.superConstructor(title,rating,id);
}
//Public method
DownloadableMovie.prototype.download = function() {
    MovieDownloader.download(this.getTitle());
}


