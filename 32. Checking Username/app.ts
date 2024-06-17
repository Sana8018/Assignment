let current_users : string [] = ['umar' , 'admin' , 'aqib' , 'arif' , 'saif'];
let new_users : string [] = ['umaiz' , 'asif' , 'sana' , 'admin' , 'saba'];


new_users.forEach((newUser) => {
if (
    current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )

){
    console.log(`${newUser} will need to enter a new username.`);
} else {
    console.log(`${newUser} is available`);
}
});
