/*Write a ProjectManager class extending Instructor.

Its constructor takes a single argument - an object with the following keys:
All the keys used to initialize instances of Instructor.
gradClassName: i.e. CS1
favInstructor: i.e. Sean

Its constructor calls the parent constructor passing to it what it needs.

The constructor should also initialize gradClassName and favInstructor properties on the instance.

ProjectManager instances have the following methods:
standUp a method that takes in a slack channel and returns {name} announces to {channel}, @channel standy times!
debugsCode a method that takes in a student object and a subject and returns {name} debugs {student.name}'s code on 
{subject}*/

class object{
    constructor(name,age,location){
        this.name = name;
        this.age = age;
        this.location = location;
    }
}

class Lambdasian{
    constructor(object){
        this.name = object.name;
        this.age = object.age;
        this.location = object.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Lambdasian{
    constructor(lambdasian){
        super(lambdasian);
        this.specialty = "redux";
        this.favLanguage = "javascript";
        this.catchPhrase = "Bros before hoes";
    }

}

class Student extends Lambdasian{
    constructor(object){
        super(object);
        this.previousBackground = "study more";
        this.className = "CS234";
        this.favSubjects = ['HTML', 'CSS', 'JS'];
    }

    listSubjects(){
        return this.favSubjects.toString();
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(object){
        super(object);
        this.gradClassName = "C1";
        this.favInstructor = "Blas";
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

objeto = new object("Mikel",20,"Granada");
lam = new Lambdasian(objeto);
instructor = new Instructor(lam);
estudiante = new Student(objeto);
manager = new ProjectManager(objeto);