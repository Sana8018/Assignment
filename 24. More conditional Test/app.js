var car = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
// **String Tests**
//Test 1: Equality (True)
console.log("Is car == 'subaru' ? I predict True.");
console.log(car == 'subaru');
//Test 2: Strict Equality (False)
console.log("Is car === 'subaru' ? I predict False.");
console.log(car === 'subaru');
//Test 3: Inequality (True)
console.log("Is car != 'subaru' ? I predict True.");
console.log(car != 'subaru');
//Test 4: Inequality (False)
console.log("Is car !== 'subaru' ? I predict False.");
console.log(car !== 'subaru');
//**Lowercase Function Tests**
//Test 5: Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru' ? I predict True.");
console.log(car.toLowerCase() == 'subaru');
//Test 6: Lowercase conversion (False)
console.log("Is car.toLowerCase() ==='subaru' ? I predict Flase.");
console.log(car.toLowerCase() === 'subaru');
//**Numerical tests**
//Test 7: Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25);
//Test 8: Inequality (False)
console.log("Is age != 30? I predict False.");
console.log(age != 30);
//Test 9: Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30);
//Test 10: Less tahn or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25);
//**Logical Operators**
//Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 20 && age < 30);
//Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict False.");
console.log(age > 30 || age < 18);
//**Array Tests**
//Test 13: In Array (True)
console.log("Is 3 in numbers? I predict True.");
console.log(3 in numbers);
//Test 14: Not in Array (False)
console.log("Is 5 in numbers? I predict False.");
console.log(5 in numbers);
