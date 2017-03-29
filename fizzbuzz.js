// Place your FizzBuzz code here.
function fizzBuzz(value) {
  for (var i = 1; i <= value; i++) {
    if (i % 5 === 0 && i % 3 === 0){
    console.log("FizzBuzz");  //Should show if number is divisable by 3 && 5
    }  else if(i % 3 === 0) {
    console.log("Fizz"); //Should show if number divides by 3
    } else if(i % 5 === 0){
    console.log("Buzz"); //Should show if number divides by 5
    }  else {
    console.log(i); //default for all other numbers
    }
  }
}

function swiFizz(value) {
  for (var i =1; i <= value; i++) {
    switch(true) {
    case (i % 5 == 0 && i % 3 == 0): //Should calculate for 3 and 5 divisable numbers
     console.log("FizzBuzz"); //Should print FizzBuzz if above statement is true
     break;
    case (i % 5 == 0): //Should calculate for the number to dive by 5 with 0 in remainder
     console.log("Buzz"); //Should print Buzz if above is true
     break;
    case (i % 3 == 0): //Should calculate for the number to divide by 3 with 0 in remainder
     console.log("Fizz"); //Should Fizz if above is true
     break;
    default:
    console.log(i) //Will print the whole number if all above statements are false
     break;
   }
  }
}

function cleanFizz(value) {
  var retu = ""; //variable setting the return function to blank it will be filled in by the output
  for (var i = 1; i <= value; i++) {
    var output = ""; //this is setting output to blank to be filled in by below arguments
    if (i % 3 == 0) { //this should divide i by 3 looking for a remainder of 0
    output = "Fizz"; //this will add Fizz to the blank output if the above is true
  } if (i % 5 == 0) { //this should divide i by 5 looking for a remainder of 0
    output += "Buzz";
//this will add Buzz to the output if above is true. If Fizz is already in output it will then create FizzBuzz
  } retu += (output || i) + "<br/>";
//this will add the output to retu's blank "" if one of the statements is true or it will add i's value to retu's blank ""
    //console.log (output || i);
  }
  return retu; //this will return whatever is in retu's ''
}

var test = 20;
var test2 = 100;
var test3 = 1000;

//swiFizz(test);

//alert (test);
