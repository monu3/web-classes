document.title = " javascript unit 4";

// Variables

console.log(a2);
// console.log(a);
let a = "monu"; //doesn't support hoisting
let roll = 25; //number
const a1 = "monu";
const country = "Nepal"; //String
var a2 = "diwash"; // supporting hoisting

// String
let abc = "string 1";
let bc = "string 2";
let c = `string 3 ${abc}`;
console.log(c);
console.log(c + abc);

//trick

let num = 20;
console.log(num - "20"); // it gives 0 result
console.log(num + "20"); // it gives concatination of 2020

//Number

let num2 = 20;
let num3 = 20.02;
console.log(num2 + num3);

//boolean
let isMale = true;
let isHoliday = false;
//console.log(isHoliday<isMale);

//Function

//Named function
//with parameter
function getDay(greetText) {
  return greetText + "Friday";
}

let today = getDay("Hi today is ");
console.log(today);

//with multiple parameter
function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(30, 30);
console.log(sum(10, 20) + result);

//Annonymous function

let addition = (num1, num2) => {
  return num1 + num2;
};

console.log(addition(10, 10));

let getSth = () => {
  return "something";
};
console.log(getSth());

let getNth = () => {
  return sum(100, 100);
};
console.log(getNth());

let getNNth = () => {
  return "My name is smonu siddiki.";
};
console.log(getNNth());


//Scope 

// let phone = "9876543210";  //global scope
// function getSth(){
//     let val ="2345678"; //function scope 
//     if(1===1){
//         let val2="dfghjrtyui"; // block scope
//     }
//     console.log(val2);
// }
// let n = prompt("Enter your number to check : ");
function checkEven(n){
    if(n%2===0){
        console.log(n+" is a even number.");
    }else{
        console.log(n + "  is odd number.");
    }
}

checkEven(100);

function isStudentQualified(attendance,marks){
  if(attendance>75 && marks>40){
    return "Qualified !!";
  }
  return "NQ !!";
}

console.log(isStudentQualified(80,50));

//double and triple equal 
function checkIfEqual(first,second){
  if(first===second){
    return 'Both values and type are equal';
  }
  else if(first==second){
    return 'Only value is equal ';
  }
  return 'Both Not equal ';
}

console.log(checkIfEqual("ram","ram"));   //both values and type is equal
console.log(checkIfEqual(20,"20"));  //only values are equal
console.log(checkIfEqual(25,25));



// let count=0;

// setInterval(()=>{
//   count++;
//   console.log(count);
// },1000)



// FLow control

function getDayOfWeek(day){
  let val;
    switch(day){
      case 0:
        val='Sunday';
        break;
      case 1:
        val =  'Monday';
        break;
      case 2:
        return 'Tueday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thuesday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return 'Invalid input !!';
    }
    return val;
}

console.log(getDayOfWeek(3));



//Flow control

// for(let i=10;i>0;i--){
//     console.log("I love you !");
// }

// let mon = 100;
// while(mon>0){
//   console.log("I love You !");
//   mon--;
// }


// ARRAY
// for each
let students = ["Monu","Megha","diwash","Arjun",1,2,true,"Sabin","Sumit","Subhod","Savu","Moni"];
students.forEach((student,index)=>{
  console.log(index,student);
})


//Objects

let student25 = {
  roll:25,
  name:"Monu siddiki",
  address:"kapan",
  age:20,
  subjects:['Maths','Science','Social'],
  isMarried:true,
  favColor:(isDay)=>{
    return isDay?'Red':'Black';
  }
}

console.log(student25);
console.log(student25.age);
console.log(student25.favColor(true));
console.log(student25.favColor(new Date().getHours()<18));


 //by using for in loop 
console.log(":::::::::for in started:::::::::::");
 for(let student in student25){
  console.log(student,student25[student]);
 }

