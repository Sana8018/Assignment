let magicians: string[] = ["Rameez", "Rafiq" , "Aqib"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the great`);
    });

return greatMagicians;
}

let greatMagicians = make_great(magicians.slice());  //Creates a new modified array
console.log('Original magicians:');
show_magicians(magicians);  //shows original names
console.log('Great magicians:');
show_magicians(greatMagicians);  //shows modified names






function show_magicians(magicians: string[]) {
    console.log(show_magicians)
 }

