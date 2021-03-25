const _ = require('lodash');

var users = [
    { id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male" },
    { id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

function getUsers() {
    var output = " ";
}

function findUserById(id) {
    try {
        var user = _.user(users);
        var iFindUser = id + " - " + firstName + " " + lastName + " is " + age + ", " + gender;
    } catch (error) {
        return iFindUser;
        console.log(user);
    }
}

getUsers();
findUserById(users);

module.exports = findUserById;