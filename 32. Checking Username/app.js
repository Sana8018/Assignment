var current_users = ['umar', 'admin', 'aqib', 'arif', 'saif'];
var new_users = ['umaiz', 'asif', 'sana', 'admin', 'saba'];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
