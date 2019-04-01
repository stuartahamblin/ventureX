var kitchen = {};
console.log(kitchen);

// var kitchen = {
//   microwave: 'whirlpool'
// };
// console.log(kitchen);
// console.log(kitchen.microwave);
// console.log(kitchen['microwave']);

// var applianceType = 'microwave';
// console.log(kitchen[applianceType]);

// var microwave = kitchen.microwave;
// console.log(microwave);

// Exercise: Create a netflixFavorites object, that has a movie genre as a property, and a particular movie in that genre as the value.  Print out the value.

// var kitchen = {
//   microwave: 'whirlpool',
//   oven: 'samsung',
//   dishwasher: 'maytag',
//   refrigerator: 'samsung'
// };
// console.log(kitchen);
// console.log(Object.entries(kitchen));
// console.log(Object.keys(kitchen));
// console.log(Object.values(kitchen));

// for(appliance in kitchen) {
//   console.log(appliance);
// }

// for(appliance in kitchen) {
//   console.log("My " + appliance + " is a " + kitchen[appliance] + ".");
// }

// for(appliance in kitchen) {
//   console.log(`My ${appliance} is a ${kitchen[appliance]}.`);
// }

// Exercise: Expand your netflixFavorites library to include multiple genres, each with a favorite movie.  Print out all the genres as movies in the form "My favorite netflix horror movie is Get Out".

// nested objects
// var kitchen = {
//   microwave: {
//     brand: 'whirlpool',
//     yearsOld: 6,
//     parts: {
//       door: 'working',
//       magnetron: 'working',
//       turntable: 'broken'
//     }
//   }
// };
// console.log(kitchen);
// console.log(kitchen.microwave.brand);
// console.log(kitchen.microwave.yearsOld);
// console.log(kitchen.microwave.parts);
// console.log(kitchen.microwave.parts.door);

// console.log(kitchen['microwave']['parts']['door']);
// console.log(kitchen['microwave'].parts['door']);

// Exercise: Update your netflixFavorites library to include, for each movie, its name, director, year released, and the lead actor.  Print out your library.

// var kitchen = {
//   microwave: {
//     brand: 'whirlpool',
//     yearsOld: 6,
//     parts: [
//       { name: 'door', status: 'working' },
//       { name: 'magnetron', status: 'working' },
//       { name: 'turntable', status: 'broken' },
//     ]
//   }
// };
// console.log(kitchen.microwave.parts);
// console.log(kitchen.microwave.parts[1]);

// for(let i = 0; i < kitchen.microwave.parts.length; i++) {
//   console.log(kitchen.microwave.parts[i]);
// }

// var parts = kitchen.microwave.parts;

// for(let i = 0; i < parts.length; i++) {
//   console.log(parts[i]);
// }

// for(let i = 0; i < parts.length; i++) {
//   if(parts[i].status == 'broken') {
//     console.log(parts[i]);
//   }
// }

// var kitchen = [
//   {
//     type: 'microwave',
//     brand: 'whirlpool',
//     yearsOld: 6,
//     parts: [
//       { name: 'door', status: 'working' },
//       { name: 'magnetron', status: 'working' },
//       { name: 'turntable', status: 'broken' },
//     ]
//   },
//   {
//     type: 'refrigerator',
//     brand: 'samsung',
//     yearsOld: 4,
//     parts: [
//       { name: 'main door', status: 'working' },
//       { name: 'freezer door', status: 'working' },
//       { name: 'compressor', status: 'broken' },
//     ]
//   }
// ];

// for(let i = 0; i < kitchen.length; i++) {
//   let appliance = kitchen[i];
//   let parts = appliance.parts;
//   for(let j = 0; j < parts.length; j++) {
//     let part = parts[j];
//     console.log(`The ${part.name} on the ${appliance.brand} ${appliance.type} is ${part.status}.`);
//   }
// }

// Exercise: Instead of a lead actor for each movie, have an array for the entire cast.  Each cast member should have an object containing their name, years active, and Oscars won.  Print out all the cast members of all the movies in your library.