/*Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 
1-100.

Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and
PM's) that will randomly add or subtract points to a student's grade. Math.random will help.

Add a graduate method to a student.
This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase 
their score.*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

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

    changeGrades(student){
        return student.grade + getRandomInt(-5, 10);
    }
}

class Student extends Lambdasian{
    constructor(object,grade){
        super(object);
        this.previousBackground = "study more";
        this.className = "CS234";
        this.favSubjects = ['HTML', 'CSS', 'JS'];
        this.grade = grade;
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

    graduate(instructor){
        while(this.grade < 70)
        {  
            this.grade = instructor.changeGrades(this);
            console.log(this.grade);
        }

        return "Congratulations, you are graduated!";
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
lamb = new Lambdasian(objeto);
instructor = new Instructor(lamb);
estudiante = new Student(objeto,60);
manager = new ProjectManager(objeto);