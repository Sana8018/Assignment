function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
// 4 cities
var city1 = describe_city("south Africa, Cape town");
var city2 = describe_city("India, Delhi");
var city3 = describe_city("Pakistan, Hyderabad");
var city4 = describe_city("Dubai, UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
function describe_city1(nameOfCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
describe_city("Karachi");
describe_city("Lahor");
describe_city("Islamabad");
describe_city("India, Delhi");
