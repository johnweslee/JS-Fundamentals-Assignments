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

//taking decisions : if/else statements
if(population > 33000000){
    console.log(`${country}'s population is above avarage`);
}else{
    console.log(`${country}'s population is ${population} million below average`);
}

let population1 = 13000000;
if(population1 > 33000000){
    console.log(`${country}'s population is above avarage`);
}else{
    console.log(`${country}'s population is ${population1} million below average`);
}

let population2 = 130000000
if(population2 > 33000000){
    console.log(`${country}'s population is above avarage`);
}else{
    console.log(`${country}'s population is ${population2} million below average`);
}

//Type Conversion and Coercion
console.log(`Output for the operation - '9'-'5', expected: 4, actual:${'9'-'5'}`);
console.log(`Output for the operation - '19'-'13'+'17', expected: 617, actual:${'19'-'13'+'17'}`);
console.log(`Output for the operation - '19'-'13'+17, expected: 23, actual:${'19'-'13'+17}`);
console.log(`Output for the operation - '123'<57, expected: false, actual:${'123'<57}`);
console.log(`Output for the operation - 5+6+'4'+9-4-2, expected: 1143, actual:${5+6+'4'+9-4-2}`);