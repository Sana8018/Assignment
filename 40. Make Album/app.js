function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = make_album("Ali", "Rang-e-Muhabbat");
var album2 = make_album("Madad", "Roshan Andhera");
var album3 = make_album("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//Number of tracks
function make_album2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = make_album2("Ali", "dil hai", 30);
var album5 = make_album2("Madad", "ajeeb kahani", 55);
var album6 = make_album2("Ayaz", "o mahi", 72);
console.log(album4);
console.log(album5);
console.log(album6);
