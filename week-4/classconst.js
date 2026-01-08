class Song {
    constructor(title, artist) {
        this.title = title;
        this.author = artist;
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
console.log(mySong);
console.log(typeof mySong);