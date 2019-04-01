// Working with arrays: filter, map, reduce

// let numbers = [1,7,4,5,2,3];

// let lessThanFiveFilter = (number) => number < 5;
// let lessThanFive = numbers.filter(lessThanFiveFilter);
// console.log(lessThanFive);

// let lessThanFive = numbers.filter((number) => number < 5);
// console.log(lessThanFive);

// let myNums = numbers.filter((number) => true);
// console.log(myNums);

// let myNums = numbers.filter((number) => false);
// console.log(myNums);

// let myNums = numbers.filter((number) => number == 7);
// console.log(myNums);

console.log("Practice: Make an array of letters, some of which repeat, then filter only the vowels into a new array.")
console.log(" ")
let letters = ['a','b','c','d','e']
let vowels = ['a','e','i','o','u']
let vowelArray = letters.filter((letter) =>
    {return vowels.includes(letter)}
);
console.log(vowelArray)

// let numbers = [1,7,4,5,2,3];

// let myNums = numbers.map((number) => number + 1);
// console.log(myNums);

// let myNums = numbers.map((number) => number * number);
// console.log(myNums);

// let myNums = numbers.map((number) => 1);
// console.log(myNums);
console.log(" ")
console.log("Practice: Map your array of letters to uppercase each letter (or lowercase if you did them in uppercase).")
console.log(" ")
let upperVowels = vowelArray.map((letter) => letter.toUpperCase());
console.log(upperVowels);
// let myNums = numbers
// .filter((number) => number < 5)
// .map((number) => number + 1);
// console.log(myNums);

// let myNums = numbers
// .filter((number) => number < 5)
// .map((number) => number + 1)
// .filter((number) => number < 5);
// console.log(myNums);

// Practice: Filter all the vowels, then map them to uppercase.

// let movies = [{
//   title: 'Aliens',
//   genre: 'Science Fiction'
// },{
//   title: 'Jack and Jill',
//   genre: 'Comedy'
// },{
//   title: 'Ex Machina',
//   genre: 'Science Fiction'
// }];

// let sciFiFilter = (movie) => movie.genre == 'Science Fiction';
// let sciFiMovies = movies.filter(sciFiFilter);
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => movie.genre == 'Science Fiction');
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => true);
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => false);
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => movie.genre);
// console.log(sciFiMovies);

// let sciFiMovies = movies.filter((movie) => movie.genre == 'Science Fiction');
// sciFiMovieTitles = sciFiMovies.map((movie) => movie.title);
// console.log(sciFiMovieTitles);

// let titles = movies
// .filter((movie) => movie.genre == 'Science Fiction')
// .map((movie) => movie.title);
// console.log(titles);

// let titles = movies
// .filter((movie) => movie.genre == 'Science Fiction')
// .map((movie) => movie.title)
// .filter((title) => title.indexOf(' ') >= 0)
// console.log(titles);

// let genres = movies
// .filter((movie) => movie.genre == 'Science Fiction')
// .map((movie) => movie.genre);
// console.log(genres);

// let titles = movies
// .filter((movie) => movie.genre == 'Science Fiction')
// .map((movie) => movie.title[0]);
// console.log(titles);

// Practice

// Array.reduce()