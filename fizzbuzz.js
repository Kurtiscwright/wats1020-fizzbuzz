// Place your FizzBuzz code here.
function fizzBuzz(value) {
  for (var i = 1; i <= value; i++) {
    if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");  //Should show if number is divisable by 5 & 3
    }  else if(i % 3 === 0) {
    console.log("Fizz"); //Should show if number divides by 3
    } else if(i % 5 === 0){
    console.log("Buzz"); //Should show if number divides by 5
    }  else {
    console.log(i); //default for all other numbers
    }
  }
}

function cleanFizz(value) {
  for (var i =1; i <= value; i++) {
    var output = "";
    if (i % 3 == 0)
     output = Fizz;
    if (i % 5 == 0)
     output += Buzz;
    console.log (output || i);
  }
}

var test = 10
var test2 = 100

cleanFizz (test);
