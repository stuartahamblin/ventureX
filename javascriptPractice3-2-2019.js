// Arrow Functions!
// ... but first, let's review traditional functions

// function sayItAgain(saying) {
//   return `${saying} ${saying}`;
// }

// let sayTwice = sayItAgain('hello');
// console.log(sayTwice);

// let sayTwice = function(saying) {
//   return `${saying} ${saying}`;
// };

// console.log(sayTwice);
// console.log(sayTwice());
// console.log(sayTwice('hello'));

// Practice: Write a function that takes a number and returns twice that number.  Call your function and console.log the result.
console.log("PRACTICE 1");
twice = function(inputN){
    return 2*inputN
};
console.log(twice);
console.log(twice());
console.log(twice(2));

// let sayTwice = saying => `${saying} ${saying}`;

// console.log(sayTwice);
// console.log(sayTwice('hello'));

// let sayTwice = saying => {
//   console.log(`${saying} ${saying}`);
// };

// sayTwice('hello');

// let sayTwice = saying => {
//   if(!saying) {
//     return 'You did not say anything';
//   }
//   return `${saying} ${saying}`;
// };

// console.log(sayTwice());
// console.log(sayTwice('hello'));

// Practice: Write an arrow function that does the same thing as your traditional function above.
console.log(" ");
console.log("PRACTICE 2");
let double = doubleMe => {
    return 2*doubleMe;
}

console.log(double);
console.log(double());
console.log(double(6));

// let twice = 5;    //will get error if we redefine with let(!var)
// console.log(5);

// let sayMore = (saying, times) => `${saying} `.repeat(times);

// console.log(sayMore('hello', 12));

// let saySomething = () => 'something';

// console.log(saySomething);
// console.log(saySomething());

// Practice: Write an arrow function that takes two numbers and multiplies them.
console.log(" ")
console.log("PRACTICE 3")

let itTakesTwo = (maria,mark) => {
    return maria*mark
}
console.log(itTakesTwo(2,5))

// Know this: no this!

// let doMorningTasks = function() {
//   this.time = 7;

//   let drinkCoffee = function() {
//     console.log(`Drinkin coffee at ${this.time}`);
//   }

//   drinkCoffee.call({time:10});
// };

// doMorningTasks();   // prints Drinkin coffee at 10

// let doMorningTasks = function() {
//   this.time = 7;

//   let drinkCoffee = () => {
//     console.log(`Drinkin coffee at ${this.time}`);
//   };

//   drinkCoffee.call({time:10});
// };

// doMorningTasks();   //prints Drinkin coffee at 7

// console.log(() => 'hello');

// console.log((() => 'hello')());  //immediately

// let nested = () => () => 'hello';

// console.log(nested);
// console.log(nested());
// console.log(nested()());

// Practice: Write a nested arrow function that has two levels of nesting.  Each function takes a number, adds 1 to it, and returns it.  Call your function and console.log the result.

// let brushTeeth = () => {
//   console.log('Brushed teeth');
// };
// let drinkCoffee = () => {
//   console.log('Drank coffee');
// };
// let dressUp = () => {
//   console.log('Got dressed');
// };

// let morningTasks = { dressUp, brushTeeth, drinkCoffee }

// console.log(morningTasks['dressUp']);
// morningTasks['dressUp']();
// morningTasks.dressUp();

// console.log(Object.keys(morningTasks));
// console.log(Object.values(morningTasks));

// Practice: Write some arrow functions for various weekend chores and put them all in an array.  Loop through the array and do all your chores!