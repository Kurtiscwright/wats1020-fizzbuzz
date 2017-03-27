// Place your FizzBuzz code here.
function fizzBuzz(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
    }  else if(i % 3 === 0) {
    console.log("Fizz");
    } else if(i % 5 === 0){
    console.log("Buzz");
    }  else {
    console.log(i);
    }
  }
}

var test = 10
var test2 = 100

fizzBuzz (test);
