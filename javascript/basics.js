//---------------------------------- DATA TYPES =---------------------------------------------------------------


// String
let name = "Arjun";


// Number 
let age = 24;
let temperatur = 36.6;


// Boolean
let isStudent = true;


// Undefined 
let n;
// console.log(n);


// Null
let y = null;



// Symbol
let sym = Symbol("unique");



// BigInt
let bigInt = 1234567890123456789012345678901234567890n;



// Object 
let person = {
    name: "Arjun",
    age: 24,
    isStudent: true
}



// Array 
let colors = ["red", "green", "blue"];





// Valid
// let name = "Alice";
// let _count = 10;
// let $value = 5;
// let userName123 = "John";
// let camelCaseVar = "example";




// let 123name = "Alice";  // Invalid: starts with a digit
// let user-name = "Bob";  // Invalid: hyphen not allowed
// let let = "something";  // Invalid: 'let' is a reserved keyword






// if (!false) console.log('false is falsy');
// if (!0) console.log('0 is falsy');
// if (!'') console.log('Empty string is falsy');
// if (!null) console.log('null is falsy');
// if (!undefined) console.log('undefined is falsy');
// if (!NaN) console.log('NaN is falsy');






// if (true) console.log('true is truthy');
// if (1) console.log('1 is truthy');
// if ('hello') console.log('Non-empty string is truthy');
// if ({}) console.log('Object is truthy');
// if ([]) console.log('Array is truthy');
// if (Symbol()) console.log('Symbol is truthy');





//----------------------------------VARIABLES AND SCOPING =---------------------------------------------------------------

// var function-scoped or global scoped
// var x = 30;
function exampleFunctionScoped(){
    if(true){
        var x = 10;
    }

    console.log("var function scopped inside the function" + x) // gives 10
}
// console.log("var function scopped outside function " + x); // gives undefined
// exampleFunctionScoped();





// let and const block scoped
function exampleBlockScoped(){
    if(true){
        let y = 20;
        const z = 30;
    }
    console.log(y) // gives null
}

exampleBlockScoped()








//---------------------------------- OPERATORS  =---------------------------------------------------------------------------------

// Arithemetic Operators
let a = 5 + 3; // 8
let b = 10 -2; // 8
let c = 4 * 2; // 8
let d = 16/2;  // 8
let e = 17 % 3; // 2 remainder





// Logical Operators 
let f = true && false; // false
let g = true || false; // true
let h = !true; // false





// Comparison Operators 
let i = 5 == "5"; // true (loose equality)
let j = 5 === "5"; // false (strict equality)
let k = 5 != 6; // true
let l = 5 !== "5";





// Assignment Operators
let m = 10;
m += 5;  // like this we can use -=, *=, /= , =








//---------------------------------- CONTROL FLOW  =---------------------------------------------------------------------------------

// If/Else
let aged = 18;
if(aged >= 18){
  console.log("You are an adult.");
}else{
    console.log("You are a minor");
}







// Switch
let fruit = "Apple";

switch(fruit){
    case "Apple":
        console.log("Apple selected");
        break;
    case "Banana":
        console.log("Banana selected");
        break;
    default: 
        console.log("No fruits selected");
}










//---------------------------------- LOOPS =---------------------------------------------------------------------------------

// For loop
for(let i = 0; i < 5; i++){
    // console.log(i)
}






// While loop
let o = 0;
while(o < 5){
    // console.log(o);
    o++
}






// Do...While loop
let p = 0; 
do{
    // console.log(p)
    p++
}while(p < 5);













//---------------------------------- FUNCTIONS =---------------------------------------------------------------------------------

// Function declaration 
function geet1(name){
    return "Hello " + name
}

// console.log(geet1("Arjun"));






// Function Expression 
const greet2 = function(name){
    return "Hello, " + name
}

// console.log(greet2("Arjun"));









// Arrow Functions
const greet3 = (name)=>{
    // console.log("Hello, ," + name);
}
greet3("Arjun");








// Closure
function outer(){
    let x = 10;

    function inner(){
        console.log(x)
    }

    return inner;
}

const innerFunction = outer();
innerFunction() // gives 10;








//  Error handling
try {
    // let x = undefinedVsariable;
} catch (error) {
    console.log("An error occured:  " + error.message);
}finally{
    // console.log("This will run regrdless of an error");
}














//---------------------------------- ADVANCED JAVASCRIPT CONCEPTS =---------------------------------------------------------------------------------

// Callbacks
function fetchData(callback){
    setTimeout(()=>{
        callback("Data recieved");
    },1000);
}

fetchData((message)=>{
    // console.log(message + "  haaii")
})








// Promises
let promise = new Promise((resolve, reject)=>{
    let success = "true";

    if(success){
        resolve("Operations sucessfull");
    }else{
        reject("Operation failed");
    }
});

promise.then((message) => {
    // console.log(message); // Operation successfull
})
.catch((error)=> {
    console.log(error.message);
});










// Async/Await
async function fetchData2() {
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("Data recieved awaitt "), 1000);
    });

    let result = await promise;
    console.log(result)
}

// fetchData2();














// Hoisting
// console.log(hoistedVar);  // gives Undefined

hoistedFunction(); // I'm a hoisted function !

function hoistedFunction(){
    // console.log("I'm a hoisted function !")
}









// This keyword
console.log(this);









// Object Method
const person1 = {
    name: "Arjun",
    greet: function(){
        console.log(this.name);
    }
}

// person1.greet();










// Arrow Functions
const person2 = {
    name2: "Arjun kumar vs",
    greet2: ()=>{
        console.log(person2.name2)
        // console.log(this.name2) gives undefined
    }
}

// person2.greet2();







//  Prototypes and inheritance 
//  Prototype Chain

function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    console.log("Hello, ", this.name);
}

const arjun = new Person("Arjun");
// arjun.greet();













//  Inheritance 
function Developer(name, language){
    Person.call(this, name);
    this.language = language;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function(){
    console.log(this.name + " is coding in " + this.language);
};


const dev = new Developer("Arjun kumar vs ", "Javascript");
// dev.greet();
// dev.code();















// Closures

function Counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

const increment = Counter();
increment();
increment();























//---------------------------------- JAVASCRIPT OBJECT MODEL =---------------------------------------------------------------------------------

// Object Properties 
let person4 = {
 name: "Arjun vs",
 age: 24
}




// Property Descriptors
let persons = {};
Object.defineProperty(persons, "name", {
    value: "Arjun kumar vsss",
    writable: false,
    enumerable: true,
    configurable: true
})
// console.log(persons.name);






// Getters and Setters
let person5 = {
    firstName: "Arjun",
    lastName: "Kumar",

    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    set fullName(name){
        [this.firstName, this.lastName] = name.split(" ");
    }
}

// console.log(person5.fullName);
// person5.fullName = "Aleen Arjun";
// console.log(person5.fullName)














//---------------------------------- OBJECT ORIENTED PROGRAMMING =---------------------------------------------------------------------------------

class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hello " + this.name)
    }
}


class Developer2 extends Person2{
    constructor(name, age, language){
        super(name,age);
        this.language = language;
    }

    code(){
        console.log(this.name + " is coding in " + this.language);
    }

}

const dev2 = new Developer2("Arjun", 24, "Javascript");

// dev2.code();
// dev2.greet();










//---------------------------------- DESTRUCTURING =---------------------------------------------------------------------------------
// Arrays
const colors1 = ["red", "green", "blue"];

const [first, second, third] = colors1;
// console.log(third)







// Object
const person6 = {
    name1: "Arjun kumar",
    age1: 24
}
const { name1, age1 } = person6;
// console.log(name1)








// Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
// console.log(newNumbers)








// Rest Operator
function sum(...args){
    return args.reduce((a, b)=> a + b , 0);
}
// console.log(sum(1, 2, 3));






















//---------------------------------- JAVASCRIPT IN BROWSER =---------------------------------------------------------------------------------
// const element = document.getElementById("id");
// element.textContent = "new text";
// element.addEventListener("click", ()=>{
//     alert("clicked");
// });
// const newElement = document.createElement("div");
// document.body.appendChild(newElement);


// navigator.


// navigator.geolocation.getCurrentPosition((position)=>{
//     console.log(position)
// })





















// Escape sequences


// \n: Represents a newline character.
// \t: Represents a tab character.
// \': Represents a single quote character (').
// \": Represents a double quote character (").
// \\: Represents a backslash character (\).
// \b: Represents a backspace character.
// \r: Represents a carriage return character.
// \f: Represents a form feed character.
// \uXXXX: Represents a Unicode character with the hexadecimal code XXXX.

console.log("Hello \n World");
console.log("Hello \t World");

console.log('She said, "hello"');
console.log("He's happy");

console.log("Path: C:\\Users\\Username");
console.log("\u03A9")














const obj = { name: "John", age: 30 };
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); 



const obj1 = JSON.parse(jsonStr);
console.log(obj1); 


const clonedObj = JSON.parse(JSON.stringify(obj1));
console.log(clonedObj);

let nestedArray = [1, 2, 3, [4, 5, [6, 7, [8]], 9]];

while (nestedArray.some((num) => Array.isArray(num))) {
    nestedArray = nestedArray.reduce((acumulator, number) => {
        return acumulator.concat(number);
    }, []);
}

console.log(nestedArray);







(function(a, b) {
console.log(this)

    return console.log(a + b)
})(10, 70);

// console.log(result);  // Outputs: 15


console.log(this)



const arr = [1, 2,[ 3, 4,], [5, 6,], 7];

const newArray = arr.reduceRight((acc, curr)=>
    acc.concat(curr)
,[]);

console.log(newArray)


const compose = (...functions) => (input) =>
    functions.reduceRight((acc, fn) => fn(acc), input);

const add = (x) => x + 1;
const multiply = (x) => x * 2;
const square = (x) => x * x;

const composedFunction = compose(square, multiply, add);

console.log(composedFunction(5)); 





// let user = {
//     name: 'Alice',
//     address: "velliii",
//     city: {
//         place: 'ekm'
//     }
// };


// const newObj = JSON.parse(JSON.stringify(user))

// newObj.city.place = "heyyyyyy"
// console.log(user)


// console.log(newObj)
const weakSet = new WeakSet();
const obj11 = {};
const obj2 = {};

weakSet.add(obj11);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet); // true

console.log(typeof undefined)
