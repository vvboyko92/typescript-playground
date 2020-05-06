var User = /** @class */ (function () {
    function User(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
    return User;
}());
function greetings(person) {
    return "Hello, " + person.firstName + ". Nice to see you on typescript board";
}
var user = new User('Vitalii', 'j', 'Boiko');
document.body.textContent = greetings(user);
