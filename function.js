//conventional function or function declaration 
function addNumbers(number1, number2, number3) {
    return (number1 + number2 - number3);
}

//arrow function
var lessNumbers = (number1, number2, number3) => {
    return number1 + number2 - number3;
}

//function expression
var lessNumbers = function(number1, number2, number3){
    return number1 + number2 - number3
}

//CLASS WORK
//Arrow function
var myName = (name) => {
    return "my name is" + name;
}
//Function expression
var myName = function(name){
    return "my name is" + name;
}