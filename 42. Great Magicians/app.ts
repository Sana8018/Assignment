let magicians: string[] = ["Rameez", "Rafiq" , "Aqib"];

function make_great(magicians: string[]){
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians [i] + "the Great";
    }
}

make_great(magicians); //Modifies the original array
//show_magicians(magicians); // shows modified names
