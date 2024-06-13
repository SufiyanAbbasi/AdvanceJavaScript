// console.log("This is oop section");
//class
 class hello{
    //methods
    message(){
        console.log("Hello Everyone!");
    }
    sorry(){
        console.log("Sorry Everyone!");
    }
 }
//object
 let a = new hello();
//  a.message();
//  a.sorry();

class student{
    //contstructor-methods automatically called when an object is created
    constructor(){
        console.log("Constructor Functions");
    }
}
//object
// let sufi = new student();


//Inheritance
class Employee{
    constructor(){
        console.log("Constructor : Employee");
    }
}

// for inheritance we use extends keyword
class Manager extends Employee{
   emp(){
        console.log("Manager class inherited from employee");
    }
}

//object created with manager class can inherited value of Employee class
let waqasemp = new Manager();
waqasemp.emp();