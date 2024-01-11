//values and variables

const country = 'India';
const continent = 'Asia';
let population;

population = 143554646;

console.log(`Country: ${country}, Continent: ${continent}, Population: ${population}`);

//data types

let isIsland = true;

//let, const, var
const language = 'Tamizh';

console.log(typeof isIsland, typeof population, typeof country, typeof language);

//basic operators
let halfCountry = population / 2;
console.log(`Half the population of ${country} is ${halfCountry}`);

population += 1;

let finlandPopulation = 6000000;
console.log(`Finland has a population of ${finlandPopulation}. Does ${country} have more people than Finland - ${population > finlandPopulation}`);

let avgPopulation = 33000000;
console.log(`Does ${country} have less people than the average country - ${population < avgPopulation}`);

//Strings and Template Literals
let description = `${country} is in ${continent}, and its ${halfCountry} people speak ${language}`;
console.log(description);