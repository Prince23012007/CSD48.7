<<<<<<< HEAD
const pi = 3.142
console.log(pi);


//Variadic function
console.log("the sum of these functionsis", 10+20, ". The product of these two numbers is", 5 + 6 + 7 )


//Value type
console.log(typeof 5);

let age="14";
console.log(typeof age);
console.log(typeof false);
console.log(typeof 0);

let i;
console.log(typeof i);

// let j = null;
// console.log(typeof j);

//comparison operators
//equal to opreator(value) ==
let age1 =50; let age2 = 20;
xy = age1 == age2;
console.log(xy);

console.log(12=='12');

// equal to operator(both value and data type) ===
console.log(12 === "12");

//equal to operator(both value and data type) !==
console.log(12 !== 12);

//create a simple calculator where you have two variables with values 
//and apply the arithmetic and logical operators to them


let a = 10;
let b = 20;
let c = a + b ;
console.log(c);
console.log(a + b ==c);

console.log(b - a);
console.log(c !== (b - a));


//<,>,<=,
console.log(70 > 70);
console.log(70 >= 70);
//Logical Operators
//AND, OR, NOT
// Anytime you have an OR operator between values, the true takes precedence over the false
//OR
var1 = 5;
var2 = 10;
console.log(var1 >3 || var2 < 2);
//AND
console.log(var1 <6 && var2 <1)


//String concatenation(+, template literals(`))
let firstName = "Kido";
let middleName = "Champ";
let lastName = "Kay";

console.log(firstName + middleName +lastName);
console.log(firstName + " " + middleName +lastName);
console.log(firstName + " " + middleName + " " +lastName);

console.log("Welcome", firstName);
console.log(`Welcome, ${firstName} ${middleName} ${lastName}`);
console.log("Kido" + 1);
console.log("2" * 5);
console.log(typeof("43" * 2));

//String Properties And Methods
console.log("Scholarstica".length);
console.log(firstName.toUpperCase());

console.log(firstName.toLowerCase());
console.log(" Jeff Walter ".trim());

//Slice
console.log("JavaScript".slice(0,4));

//Replace
console.log("I love JavaScript".replace("JavaScript", "Python"));

//Maths Object
let D = 9.9;
console.log('the rounded value is:', Math.round(D));

//let A = prompt("Enter a number");
// console.log(A);
console.log(Math.floor(6.4));
console.log(Math.ceil(6.4));
console.log(Math.random());

let Dice = Math.floor(Math.random()*6) + 1;
console.log(Dice);

//Type conversion
 age1 = 50;
age1str = String(age1);
console.log(typeof age1str);

age2 = "65";
ageNum = Number(age2);
console.log(typeof ageNum);

//Write a program to ask a user his or her name in the browser 
//  trim it and convert to uppercase, also display "HELLO, (name entered)"

//let C = prompt("Enter Your Name").trim();

//console.log(`HELLO, ${C.toUpperCase()}`);


//Augmented Operators
let A = 9;
//A += 1;
A -= 4;
console.log(A);

let B = 1;
B +=3;
B++;



//Control Flow(Conditions & Loops)
//Keywords:
// if, else if, else, for, while, end, do...while, break, continue
let Age = 90;
if (Age < 50){
    console.log("I am a youth");
}

let temperature = 29;
if (temperature <30){
    console.log("I am cold");
} else {
    console.log("I am Hot");
}

 temperature = 29;
 if (temperature <25){
    console.log("I am cold");
 } else if(temperature == 29){
 console.log("It's room temperature")
 } else{
    console.log("I am hot")
 }

     age = 19;
     let ID = true;

     if (age < 18){
        console.log("Not eligible");
     } else if(age >= 18){
        console.log("Eligible");
     } else if (age >= 18 && !ID){
        console.log("Get an ID");
     } else {
        console.log("Provide supporting documents");
     }
    
     //let N = prompt("Enter Your Username");
     //let M = prompt("Enter Your Email");
     N = true
     M = true
     
      if(N == true && M == true){
        console.log("verified");
     } else if(M == true && N != true){
        console.log("not verified");
    }  else if ( M != true && N== true){
        console.log("Not verified");
    } else {
        console.log("Try Again");
    }
        
      
    // For Loop
    // for (initialization: condition: update)
    // Execution:
    for (let i = 1; i <= 5; i++){
        console.log("Count is:", i);
    }

//   Personal Findout:
let coding = ["JavaScript", "Python", "C++"];
for (let h = 0; h < coding.length; h++){
    console.log(coding[h]);
}

let o = 0;
do{
    console.log (o);
o++
} while(o < 9);


for(let p = 5; p <= 10; p++){
if( p == 7){
    break;
}
console.log(p);
}

for(let p = 5; p <= 10; p++){
if( p == 7){
    continue;
}
console.log(p);}

// Lectures:
let ii = 3;
while(ii <= 7 ){
   
    console.log("The numbers are:", ii)
     ii++
}
// do...while
let T = 4
do{
console.log("New count:", T)
T--;
} while(T >=4)
    //break
for( T = 5; T <= 10; T++){
    if(T===8){
        break
    }
    console.log(T)
}

// continue
for( T = 5; T <= 10; T++){
    if(T==8) {continue
    }
    console.log(T)
}

// Write a program to print out only even numbers
// between 1  - 10
for(let K =1;  K <=10; K++){
    if(K % 2 === 0) 
    console.log(K) 
}

// Functions

function greet () {
    console.log("Yo! What's Up?");
}      greet();

// function sayHELLO (){
    // alert("AKWAABA😀");
// }
// sayHELLO();


// Function Parameters And Arguments
function sayMyName (Name){
console.log(`Hello, ${Name}`);    
}      sayMyName("BOUNCER");

function Name(firstName){
    console.log(`Hello, ${firstName}`)
}   Name(firstName);

// Default Function Value
function sayWelcome(newName = "Guest"){
    console.log(`Welcome, ${newName}`);
}     sayWelcome();

// Multiple Parameters
function myProfile(Name1 , Age5){
console.log(`My name is ${Name1} and I am ${Age5} years old`);
}   myProfile(firstName , 18);
//Create a function with 3 parameters and ues the "alert"

//function key(PIN1, PIN2, PIN3){

 //alert(`PIN1 is ${PIN1} , PIN2 is ${PIN2}, PIN3 is ${PIN3}`)}

//key(0, 1, 2);

// Return Values
function addNumber(x , y){
    return x + y;
} let res = (addNumber(5, 5));
console.log(res);

// Function Expressions
const Calc = function (U , V){
    return U / V;
} 
let Res = Calc(10, 5)
console.log(Res);

//Arrow Functions
const subtractNumbers = (ee , ff) => {
    console.log(ee - ff);
}   
subtractNumbers( 20, 5);

// Function Scope
function MyAge(){
    let MyAge = "Hello World!";
    console.log(MyAge);
} 
MyAge();


// Personal Findings
//  Arrays:
let arr =[1 , 2, 3];
console.log(arr);
 const z =[`meat, fish, cheese`];
 console.log(z);

 let G = [ "Orange" , "Banana" , "Mango"];
//  G[3]= ("Guava");
 
 console.log(G[0]);
 console.log(G[1]);
 console.log(G[2]);
//  console.log(G[3]);
  

 let l = [ "Orange" , "Banana" , "Mango"];
// l.push("Lime") pushes Lime to the end
// l.pop(); removes the last element
// l.unshift("Apple") adds apple to the beginning
// l.shift("Apple") revoves apple from the beginning
 console.log(l[0]);
 console.log(l[1]);
 console.log(l[2]);
//  console.log(l[3]);
let index = l.indexOf("Orange");
console.log(index);
//   Lectures:

// Arrays:
let students = ["Vic", "Gift" , "Chief" , "Flex" , "Mike"];
  console.log(students);

  let H = ["Kivo" , "H&H" , "Rio" , "Beije"]
      console.log(H[0]);
      console.log(H[1]);

    //Changing Array Values
 let School = ["Vic", "Gift" , "Chief" , "Flex" , "Mike"];
  School[2]=("Mark");
  console.log(School);

//   Adding And Removing Arrays


School.push("Joan");
console.log(School);

console.log(School.unshift("Man"));
console.log(School);

console.log(School.splice(4, 0, "Biney"));
console.log(School);

console.log(School.pop())
console.log(School);

console.log(School.shift("Man"));
console.log(School);

console.log(School.splice(4, 2));
console.log(School);
console.log(School.splice(2, 1));
console.log(School);

// Looping through an Array



let Mo = ["Yaw", "Akosua", "Maame", "OB", "Mensah"];
for(let F = 0;  F < Mo.length; F++){
    console.log(Mo[F], )
}

// Object
let food = {
    goesWith : "Stew",
    NameofFood : "Banku", 
    price : 5,
    Taste : "Taste Delicious",
    Colour : "White OR Yellow",
    portionSize : "Medium"
}
console.log (food);
console.log (food.price);
// Updating And Adding Properties

food.Colour = "Brown";
console.log(food);

food.Taste = "Femented";
console.log(food);

// Deleting a Property
delete food.Colour;
console.log(food);

// Looping Throughout An Object
for(let key in food)[
    console.log(key + ':' + food[key])
];

// Array Of Objects
let aRRay = [
    { Address : "Carlifonia",
        Gender : "Female"
    },
    { Address : "Tall",
       Gender : "Fair"

    }    
]
=======
const pi = 3.142
console.log(pi);


//Variadic function
console.log("the sum of these functionsis", 10+20, ". The product of these two numbers is", 5 + 6 + 7 )


//Value type
console.log(typeof 5);

let age="14";
console.log(typeof age);
console.log(typeof false);
console.log(typeof 0);

let i;
console.log(typeof i);

// let j = null;
// console.log(typeof j);

//comparison operators
//equal to opreator(value) ==
let age1 =50; let age2 = 20;
xy = age1 == age2;
console.log(xy);

console.log(12=='12');

// equal to operator(both value and data type) ===
console.log(12 === "12");

//equal to operator(both value and data type) !==
console.log(12 !== 12);

//create a simple calculator where you have two variables with values 
//and apply the arithmetic and logical operators to them


let a = 10;
let b = 20;
let c = a + b ;
console.log(c);
console.log(a + b ==c);

console.log(b - a);
console.log(c !== (b - a));


//<,>,<=,
console.log(70 > 70);
console.log(70 >= 70);
//Logical Operators
//AND, OR, NOT
// Anytime you have an OR operator between values, the true takes precedence over the false
//OR
var1 = 5;
var2 = 10;
console.log(var1 >3 || var2 < 2);
//AND
console.log(var1 <6 && var2 <1)


//String concatenation(+, template literals(`))
let firstName = "Kido";
let middleName = "Champ";
let lastName = "Kay";

console.log(firstName + middleName +lastName);
console.log(firstName + " " + middleName +lastName);
console.log(firstName + " " + middleName + " " +lastName);

console.log("Welcome", firstName);
console.log(`Welcome, ${firstName} ${middleName} ${lastName}`);
console.log("Kido" + 1);
console.log("2" * 5);
console.log(typeof("43" * 2));

//String Properties And Methods
console.log("Scholarstica".length);
console.log(firstName.toUpperCase());

console.log(firstName.toLowerCase());
console.log(" Jeff Walter ".trim());

//Slice
console.log("JavaScript".slice(0,4));

//Replace
console.log("I love JavaScript".replace("JavaScript", "Python"));

//Maths Object
let D = 9.9;
console.log('the rounded value is:', Math.round(D));

//let A = prompt("Enter a number");
// console.log(A);
console.log(Math.floor(6.4));
console.log(Math.ceil(6.4));
console.log(Math.random());

let Dice = Math.floor(Math.random()*6) + 1;
console.log(Dice);

//Type conversion
 age1 = 50;
age1str = String(age1);
console.log(typeof age1str);

age2 = "65";
ageNum = Number(age2);
console.log(typeof ageNum);

//Write a program to ask a user his or her name in the browser 
//  trim it and convert to uppercase, also display "HELLO, (name entered)"

//let C = prompt("Enter Your Name").trim();

//console.log(`HELLO, ${C.toUpperCase()}`);


//Augmented Operators
let A = 9;
//A += 1;
A -= 4;
console.log(A);

let B = 1;
B +=3;
B++;



//Control Flow(Conditions & Loops)
//Keywords:
// if, else if, else, for, while, end, do...while, break, continue
let Age = 90;
if (Age < 50){
    console.log("I am a youth");
}

let temperature = 29;
if (temperature <30){
    console.log("I am cold");
} else {
    console.log("I am Hot");
}

 temperature = 29;
 if (temperature <25){
    console.log("I am cold");
 } else if(temperature == 29){
 console.log("It's room temperature")
 } else{
    console.log("I am hot")
 }

     age = 19;
     let ID = true;

     if (age < 18){
        console.log("Not eligible");
     } else if(age >= 18){
        console.log("Eligible");
     } else if (age >= 18 && !ID){
        console.log("Get an ID");
     } else {
        console.log("Provide supporting documents");
     }
    
     //let N = prompt("Enter Your Username");
     //let M = prompt("Enter Your Email");
     N = true
     M = true
     
      if(N == true && M == true){
        console.log("verified");
     } else if(M == true && N != true){
        console.log("not verified");
    }  else if ( M != true && N== true){
        console.log("Not verified");
    } else {
        console.log("Try Again");
    }
        
      
    // For Loop
    // for (initialization: condition: update)
    // Execution:
    for (let i = 1; i <= 5; i++){
        console.log("Count is:", i);
    }

//   Personal Findout:
let coding = ["JavaScript", "Python", "C++"];
for (let h = 0; h < coding.length; h++){
    console.log(coding[h]);
}

let o = 0;
do{
    console.log (o);
o++
} while(o < 9);


for(let p = 5; p <= 10; p++){
if( p == 7){
    break;
}
console.log(p);
}

for(let p = 5; p <= 10; p++){
if( p == 7){
    continue;
}
console.log(p);}

// Lectures:
let ii = 3;
while(ii <= 7 ){
   
    console.log("The numbers are:", ii)
     ii++
}
// do...while
let T = 4
do{
console.log("New count:", T)
T--;
} while(T >=4)
    //break
for( T = 5; T <= 10; T++){
    if(T===8){
        break
    }
    console.log(T)
}

// continue
for( T = 5; T <= 10; T++){
    if(T==8) {continue
    }
    console.log(T)
}

// Write a program to print out only even numbers
// between 1  - 10
for(let K =1;  K <=10; K++){
    if(K % 2 === 0) 
    console.log(K) 
}

// Functions

function greet () {
    console.log("Yo! What's Up?");
}      greet();

// function sayHELLO (){
    // alert("AKWAABA😀");
// }
// sayHELLO();


// Function Parameters And Arguments
function sayMyName (Name){
console.log(`Hello, ${Name}`);    
}      sayMyName("BOUNCER");

function Name(firstName){
    console.log(`Hello, ${firstName}`)
}   Name(firstName);

// Default Function Value
function sayWelcome(newName = "Guest"){
    console.log(`Welcome, ${newName}`);
}     sayWelcome();

// Multiple Parameters
function myProfile(Name1 , Age5){
console.log(`My name is ${Name1} and I am ${Age5} years old`);
}   myProfile(firstName , 18);
//Create a function with 3 parameters and ues the "alert"

//function key(PIN1, PIN2, PIN3){

 //alert(`PIN1 is ${PIN1} , PIN2 is ${PIN2}, PIN3 is ${PIN3}`)}

//key(0, 1, 2);

// Return Values
function addNumber(x , y){
    return x + y;
} let res = (addNumber(5, 5));
console.log(res);

// Function Expressions
const Calc = function (U , V){
    return U / V;
} 
let Res = Calc(10, 5)
console.log(Res);

//Arrow Functions
const subtractNumbers = (ee , ff) => {
    console.log(ee - ff);
}   
subtractNumbers( 20, 5);

// Function Scope
function MyAge(){
    let MyAge = "Hello World!";
    console.log(MyAge);
} 
MyAge();


// Personal Findings
//  Arrays:
let arr =[1 , 2, 3];
console.log(arr);
 const z =[`meat, fish, cheese`];
 console.log(z);

 let G = [ "Orange" , "Banana" , "Mango"];
//  G[3]= ("Guava");
 
 console.log(G[0]);
 console.log(G[1]);
 console.log(G[2]);
//  console.log(G[3]);
  

 let l = [ "Orange" , "Banana" , "Mango"];
// l.push("Lime") pushes Lime to the end
// l.pop(); removes the last element
// l.unshift("Apple") adds apple to the beginning
// l.shift("Apple") revoves apple from the beginning
 console.log(l[0]);
 console.log(l[1]);
 console.log(l[2]);
//  console.log(l[3]);
let index = l.indexOf("Orange");
console.log(index);
//   Lectures:

// Arrays:
let students = ["Vic", "Gift" , "Chief" , "Flex" , "Mike"];
  console.log(students);

  let H = ["Kivo" , "H&H" , "Rio" , "Beije"]
      console.log(H[0]);
      console.log(H[1]);

    //Changing Array Values
 let School = ["Vic", "Gift" , "Chief" , "Flex" , "Mike"];
  School[2]=("Mark");
  console.log(School);

//   Adding And Removing Arrays


School.push("Joan");
console.log(School);

console.log(School.unshift("Man"));
console.log(School);

console.log(School.splice(4, 0, "Biney"));
console.log(School);

console.log(School.pop())
console.log(School);

console.log(School.shift("Man"));
console.log(School);

console.log(School.splice(4, 2));
console.log(School);
console.log(School.splice(2, 1));
console.log(School);

// Looping through an Array



let Mo = ["Yaw", "Akosua", "Maame", "OB", "Mensah"];
for(let F = 0;  F < Mo.length; F++){
    console.log(Mo[F], )
}

// Object
let food = {
    goesWith : "Stew",
    NameofFood : "Banku", 
    price : 5,
    Taste : "Taste Delicious",
    Colour : "White OR Yellow",
    portionSize : "Medium"
}
console.log (food);
console.log (food.price);
// Updating And Adding Properties

food.Colour = "Brown";
console.log(food);

food.Taste = "Femented";
console.log(food);

// Deleting a Property
delete food.Colour;
console.log(food);

// Looping Throughout An Object
for(let key in food)[
    console.log(key + ':' + food[key])
];

// Array Of Objects
let aRRay = [
    { Address : "Carlifonia",
        Gender : "Female"
    },
    { Address : "Tall",
       Gender : "Fair"

    }    
]
>>>>>>> 97a596b21b6bb950ec4e413480872204d187e1ea
console.log(aRRay);