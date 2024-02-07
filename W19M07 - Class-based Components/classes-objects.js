
/* const alex = {
    firstName: 'Alex',
    lastName: 'Miller',
    age: 25
}; */

class Person{
    constructor(firstName, lastName, age){
        // Attributes
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    printInfo = () => {
        console.log("Name:", this.firstName, this.lastName);
        console.log("Age:", this.age);
    }

    printTwo = () => {
        this.printInfo();
    }
}

const martha = new Person('Martha', 'Smith', 28);
//const alex = new Person('Alex', 'Miller', 25);

martha.printInfo();
martha.printTwo();

class Student extends Person{
    constructor(fN, lN, age, specialty){
       super(fN, lN, age);
       this.specialty = specialty; 
    }

    printStudentInfo = () => {
        this.printInfo();
        console.log("Specialty:", this.specialty);
    }
}

const roger = new Student('Roger', 'Anderson', 23, 'Web Development');
roger.printStudentInfo();
console.log(roger.firstName);


const alex = {
    firstName: 'Alex',
    lastName: 'Miller',
    age: 25,
    printInfo: () => {
        console.log(this.firstName, this.lastName, this.age);
    } 
}

alex.printInfo();