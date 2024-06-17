function make_shirt(size: string = "large" , message: string = "I love Typesript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
}

make_shirt(); //Default and large message
make_shirt("medium");   //Default message, medium size
make_shirt('small' , "Dive i n to coding"); // Custome message, small size