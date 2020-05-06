class User {
    fullName: string;

    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string,
    ) {
        this.fullName = `${this.firstName} ${this.middleInitial} ${this.lastName}`
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greetings(person: Person) {
    return `Hello, ${person.firstName}. Nice to see you on typescript board`;
}

const user = new User('Vitalii', 'j', 'Boiko');

document.body.textContent = greetings(user);