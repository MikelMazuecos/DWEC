/*Write an Instructor class extending Lambdasian.
Its constructor takes a single argument - an object with the following keys:
All the keys used to initialize instances of Lambdasian.
specialty: what the instance of Instructor is good at, i.e. 'redux'
favLanguage: i.e. 'JavaScript, Python, Elm etc.'
catchPhrase: i.e. Don't forget the homies.

The constructor calls the parent constructor passing it what it needs.

The constructor should also initialize specialty, favLanguage and catchPhrase 
properties on the instance.

Instructor instances have the following methods:
demo receives a subject string as an argument and returns the phrase 'Today we are 
learning about {subject}' where subject is the param passed in.
grade receives a student object and a subject string as arguments and returns 
'{student.name} receives a perfect score on {subject}'*/

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

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(alumno,subject){
        return `{alumno.name} receives a perfect score on {subject}`
    }
}

o = new object("Mikel", 20,"Granada");
lam = new Lambdasian(o);
ins = new Instructor(lam);
alumno = new object("Carlos", 30,"Madrid");