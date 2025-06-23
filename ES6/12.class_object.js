class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log(`${this.name} is teaching ${this.subject}`);
    }
}
const tapan = new Teacher('Tapon sir', 'Physics');
console.log(tapan);
tapan.lecture();
