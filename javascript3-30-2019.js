// Random!

// from 0 to 1, not including 1
// let randomFloat = Math.random();
// console.log(randomFloat);
// for(let i = 0; i < 100; i++) {
//   randomFloat = Math.random();
//   console.log(randomFloat);
// }

// 0 to 4, inclusive
// let randomInt = Math.floor(Math.random() * 5);
// let randomInt = parseInt(Math.random() * 5);
// console.log(randomInt);
// for(let i = 0; i < 10; i++) {
//   randomInt = Math.floor(Math.random() * 5);
//   console.log(randomInt);
// }

// 0 to 5, inclusive (VERY unlikely to get zero)
// let randomInt = Math.ceil(Math.random() * 5);
// console.log(randomInt);
// for(let i = 0; i < 10; i++) {
//   randomInt = Math.ceil(Math.random() * 5);
//   console.log(randomInt);
// }

// from 1 to 5, inclusive
// let randomInt = parseInt(Math.random() * 5) + 1;
// console.log(randomInt);
// for(let i = 0; i < 10; i++) {
//   randomInt = parseInt(Math.random() * 5) + 1;
//   console.log(randomInt);
// }
// 0------10------20-------30
// let fromInt = 20;
// let toInt = 30;
// // Practice: Generate a random integer from fromInt to toInt, inclusive of both.
// for(let i = 0; i < 20; i++) {
//   let range = toInt - fromInt + 1;
//   //console.log('range ' + range);
//   let randomRange = Math.floor(Math.random() * range);
//   //console.log('randomRange ' + randomRange);
//   let randomNumber = randomRange + fromInt;
//   console.log(`${randomRange} ${randomNumber}`);
// }

// let cars = ['mazda', 'ford', 'hyundai', 'toyota', 'mercedes'];
// // let mazdaCount = 0;
// // let fordCount = 0;
// let counts = {};
// for(let i = 0; i < 20; i++) {
//   var sizeOfArray = cars.length;
//   var index = parseInt(Math.random() * sizeOfArray);
//   //console.log(cars[index]);
//   let car = cars[index];
//   if(!counts[car])
//     counts[car] = 0;
//   counts[car]++;

//   //if(car === 'mazda') mazdaCount++;
// }
// console.log(counts);

// Practice: Pick a random car.

let word = 'javascript';
// Practice: Pick a random letter in this word.
// Hint: Use split function
wordSize = word.length
for(i=0;i<10;i++){
    var wordIndex = parseInt(Math.random() * wordSize);
    console.log(word.charAt(wordIndex))
}

let sentence = 'This is a fun class';
// Practice: Pick a random word in this sentence.
sentenceArray = sentence.split(' ')
sentenceLength = sentenceArray.length;
for(j=0;j<10;j++){
    var sentenceIndex = parseInt(Math.random()*sentenceLength)
    console.log(sentenceArray[sentenceIndex])
}
console.log(sentenceArray)
// Practice: Pick a random word in this sentence, 20 times, and push your random picks to an array.

// Practice: Scramble the sentence so that its words appear in a new order in a randomly-generated sentence.

// Practice: Pick a random substring in this sentence.

// Practice: Write a function that takes one parameter, an array, and returns a random item from that array.  Try it on the previous practices.

// $('body').css('background-color','red');

// $('#title').text('My fancy page');

// $('.section').css('color','yellow');
// $('.section').text('This is a section of my page.');

// $('.section').first().text('This is a section of my page.');

// $('.section').eq(1).text('This is a section of my page.');

// Practice: In jQuery, cause the body of the page to have blue text color.

// Practice: Make an array of colors, red, green, blue, etc., and cause the body of the page to have a random color.

// Practice: Make an array of adjectives.  Make the title of the page use a random adjective in the form 'My xxxxx page';
