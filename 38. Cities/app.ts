function describe_city(nameOfCity: string, country: string = "Pakistan"){
    return `${nameOfCity} is in ${country}`;
}

// 4 cities
let city1 = describe_city("south Africa, Cape town");
let city2 = describe_city("India, Delhi");
let city3 = describe_city("Pakistan, Hyderabad");
let city4 = describe_city("Dubai, UAE");



console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);




function describe_city1(nameOfCity: string, country: string = "Pakistan"){
    return `${nameOfCity} is in ${country}`;
}

describe_city("Karachi");
describe_city("Lahor");
describe_city("Islamabad");
describe_city("India, Delhi");