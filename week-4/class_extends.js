class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songDate) {
        super(songDate);
        this.artist = songDate.artist;
    }
}

const mySong = new Song({
    artist: 'Queen',
    name: 'Bohemian Rhapsody',
    publishDate: '1975-10-31'
});

console.log(mySong.artist); // Output: Queen
console.log(mySong.name); // Output: Bohemian Rhapsody
console.log(mySong.publishDate); // Output: 1975-10-31