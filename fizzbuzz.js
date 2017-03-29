// Place your FizzBuzz code here.
function fizzBuzz(value) {
  for (var i = 1; i <= value; i++) {
    if (i % 15 === 0){
    console.log("FizzBuzz");  //Should show if number is divisable by 15
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
  var retu = "";
  for (var i =1; i <= value; i++) {
    var output = "";
    if (i % 3 == 0){
     output = "Fizz";}
    if (i % 5 == 0){
     output += "Buzz";}
    retu += (output || i) + "<br/>";
    //console.log (output || i);
  }
  return retu;
}

function swiFizz(value) {
  for (var i =1; i <= value; i++) {
    switch(true) {
    case (i % 15 == 0):
     console.log("FizzBuzz");
     break;
    case (i % 5 == 0):
     console.log("Buzz");
     break;
    case (i % 3 == 0):
     console.log("Fizz");
     break;
    default:
    console.log(i)
     break;
   }
  }
}

var test = 10
var test2 = 100

cleanFizz (test2);

//alert (test);
