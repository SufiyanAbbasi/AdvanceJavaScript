//types of variables--------------------------->
// var --- in case of var we can reassign and redeclare the variables which is not good practice , var scope is global
var x = "hello";
var x = "hi"; //redeclare
x = "hola"; //reassign
// console.log(x);

//let ---- in case of var we cant redeclare it but  we can reassign it , let scope is block
let y = "yes";
y = "no"; //reassign
// console.log(y);

//const ---- in this case neither we redeclare it nor we reassign, const scope is block
const pi = 2.34;
// console.log(pi);


//Template Strings
let user = "Sufiyan";
let company = "brt"
// document.write(`Hello ${user} your voice is not clear and you have been selected in ${company}, congrats `)


//Arrows Function
let welcome = (name) => {
    return `Welcome to the club ${name}`;
}
// console.log(welcome('Bilal'));

//Rest Operators
function sum(name, ...args){
    // console.log(arguments);
    let sum =0;
    for(let i in args){
        sum += args[i]
    }
    // console.log(sum);
}
sum("sufiyan",20,30);
// sum(20, 30, 40);


//Spread Operators
function add(name, ...args){
    // console.log(arguments);
    let add =0;
    for(let i in args){
        add += args[i]
    }
    // console.log(add);
}
var arr =[10,5,20]
add("sufiyan", ...arr);


//Objects Literals
let fname = "Sufiyan";
let age = 20;

// var obj = {
//    fname: fname,
//    age: age
// }

// also can be wriiten as in case of same names
var obj = {
    fname,
    age
}

// console.log(obj);


//Destructuring Array
let users = ["Sufiyan", 22, "Atd"];
let [dname, ages, city] = users
// console.log(dname);
// console.log(ages);
// console.log(city);

//Modules