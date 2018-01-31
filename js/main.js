console.log('JS Logic Loops');

if('foo' === 'foo'){
	console.log('Of course these strings are equal');
}

if(5 > 10){
	console.log('You will NEVER see this');
} else {
	console.log('You will ALWAYS see this');
}


// write a new if statement that checks if a number stored in a var is greater
// than 100
var numberHigh = 110;
var numberLow = 15;

if(numberHigh > 100){
	console.log('This number is greater than 100');
}

if(numberLow > 100){
	console.log('This number is less than 100');
} else {
	console.log('15 will NEVER be greater than 100');
}

var numberList = [1, 20, 50, 99, 200];

if(numberList[4] > 100){
	console.log('This value is greater than 100');
}

if(numberList[2] > 100){
	console.log('This will never happen');
} else {
	console.log(numberList[2] + ' ' + 'is not greater than 100');
}

// testing if strings are equal to each others
var name = 'Nick'
var lastName = 'Hughes'

if(name === lastName){
	console.log('The strings are the same!');
} else {
	console.log(name + ' ' + 'is not the same as' + ' ' + lastName);
}

// the else if statement
if(5 < 4){
	console.log('you will not end up here');
} else if(5 >= 5){
	console.log('you will end up here');
} else {
	console.log('you will not end up here either');
}


// a function that returns something
function topSpeed(){
	return (75 + 5); // return the number 80
}

console.log(topSpeed()); // logs the number 80


// write a function that accepts arguments
// this now means that we are required to provide values for those args
// when we invoke the func
function addNumbers(num1, num2){
	return (num1 + num2); // the values of my args are now used as vars inside my func
}
console.log(addNumbers(100, 3000)); // logs 3100 to the console

// returns true
if(addNumbers(50, 50) === 100){
	console.log('Congrats!!');
}


// this func does not return anything, we just 'do something' immediately
// this is a named func
function fullName(fName, lName){
	console.log(fName + ' ' + lName);
}

fullName('Nick', 'Hughes'); // invokes fullName func

// we can also create a func and store it in a var
// it's an anonymous func, stored in a var (anon because it has no name)
var myGreatFunc = function(){
	console.log('function stored in var');
}

myGreatFunc();

// 1) Write a func that accepts an arg
function door(prize){
	//based on the value of prize
	if(prize === 'Teddy Bear'){
		console.log('You won the teddy bear!');
	} else if(prize === 'Goldfish'){
		console.log('You won the goldfish!');
	} else if(prize === 'Candy'){
		console.log('You won the candy!');
	}
}

door('Teddy Bear');

var foo = {
	color: 'red'
};
console.log(typeof foo.color);

var cartoons = ['Garfield', 'Heathcliff', 'Snoopy'];
console.log(cartoons.length); // log 3

