var magicians = ["Rameez", "Rafiq", "Aqib"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); //Creates a new modified array
console.log('Original magicians:');
show_magicians(magicians); //shows original names
console.log('Great magicians:');
show_magicians(greatMagicians); //shows modified names
function show_magicians(magicians) {
    console.log(show_magicians);
}
