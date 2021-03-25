const _ = require('lodash');

var users = [
    { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

function getUsers() {
    var output = " ";

    for (var i = 0; i < users.length; i++) {
        output = users;
    }
    return output;
}

function findUser(lastName, gender) {

    try {
        var user = _.user(users);
        var iFindUser = firstName + " " + lastName + " is " + age + ", " + gender;
    } catch (error) {
        return iFindUser;
        console.log(user);
    }
}

getUsers();
findUser(users);

module.exports = findUser;