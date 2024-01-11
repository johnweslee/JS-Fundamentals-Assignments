// //Part 1

// //values and variables

// const country = 'India';
// const continent = 'Asia';
// let population;

// population = 143554646;

// console.log(`Country: ${country}, Continent: ${continent}, Population: ${population}`);

// //data types

// let isIsland = true;

// //let, const, var
// const language = 'Tamizh';

// console.log(typeof isIsland, typeof population, typeof country, typeof language);

// //basic operators
// let halfCountry = population / 2;
// console.log(`Half the population of ${country} is ${halfCountry}`);

// population += 1;

// let finlandPopulation = 6000000;
// console.log(`Finland has a population of ${finlandPopulation}. Does ${country} have more people than Finland - ${population > finlandPopulation}`);

// let avgPopulation = 33000000;
// console.log(`Does ${country} have less people than the average country - ${population < avgPopulation}`);

// //Strings and Template Literals
// let description = `${country} is in ${continent}, and its ${halfCountry} people speak ${language}`;
// console.log(description);

// //taking decisions : if/else statements
// if(population > 33000000){
//     console.log(`${country}'s population is above avarage`);
// }else{
//     console.log(`${country}'s population is ${population} million below average`);
// }

// let population1 = 13000000;
// if(population1 > 33000000){
//     console.log(`${country}'s population is above avarage`);
// }else{
//     console.log(`${country}'s population is ${population1} million below average`);
// }

// let population2 = 130000000
// if(population2 > 33000000){
//     console.log(`${country}'s population is above avarage`);
// }else{
//     console.log(`${country}'s population is ${population2} million below average`);
// }

// //Type Conversion and Coercion
// console.log(`Output for the operation - '9'-'5', expected: 4, actual:${'9'-'5'}`);
// console.log(`Output for the operation - '19'-'13'+'17', expected: 617, actual:${'19'-'13'+'17'}`);
// console.log(`Output for the operation - '19'-'13'+17, expected: 23, actual:${'19'-'13'+17}`);
// console.log(`Output for the operation - '123'<57, expected: false, actual:${'123'<57}`);
// console.log(`Output for the operation - 5+6+'4'+9-4-2, expected: 1143, actual:${5+6+'4'+9-4-2}`);

// //equality operators: == vs ===
// //let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// let numNeighbours = 9;
// console.log(`How many neighbours does your country have?`);
// if(numNeighbours === 1){
//     console.log(`Only ${numNeighbours} border`);
// }else if(numNeighbours > 1){
//     console.log(`More than 1 border`);
// }else{
//     console.log(`No borders`);
// }

// //logical operators
// //Sarah's criteria
// if(population < 50000000 && language === 'English' && !isIsland){
//     console.log(`You should live in ${country}`);
// }else{
//     console.log(`${country} does not meet your criteria :(`);
// }

// //Ternary operator
// let result = population > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`;
// console.log(result);
// let population3 = 130000000
// result = population3 > 33000000 ? `${country}'s population is above average` : `${country}'s population is below average`;
// console.log(result);

// //switch statement
// switch(language){
//     case 'Mandarin':
//     case 'Chinese':
//         console.log(`MOST number of native speakers!`);
//         break;
//     case 'Spanish':
//         console.log(`2nd place in number of native speakers`);
//         break;
//     case 'English':
//         console.log(`3rd place`);
//         break;
//     case 'Hindi':
//         console.log(`Number 4`);
//         break;
//     case 'Arabic':
//         console.log(`5th most spoken language`);
//         break;
//     default:
//         console.log(`Great language too :D`);
//         break;
// }

// Part 2

// Functions
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million population and it's capital city is ${capitalCity}`;
}

let country1 = describeCountry('India', 1, 'Delhi');
let country2 = describeCountry('China', 2, 'Beijing');
let country3 = describeCountry('France', 3, 'Paris');

console.log(country1, country2, country3);

//function declarations vs expressions
function percentageOfWorld1(population){
    return population * 100 / 7900;
}

let chinaPopulationPercentage = percentageOfWorld1(2000);
let indiaPopulationPercentage = percentageOfWorld1(1500);
let australiaPopulationPercentage = percentageOfWorld1(500);

console.log(chinaPopulationPercentage, indiaPopulationPercentage, australiaPopulationPercentage);

const percentageOfWorld2 = function (population){
    return population * 100 / 7900;
}

chinaPopulationPercentage = percentageOfWorld2(2000);
indiaPopulationPercentage = percentageOfWorld2(1500);
australiaPopulationPercentage = percentageOfWorld2(500);

console.log(chinaPopulationPercentage, indiaPopulationPercentage, australiaPopulationPercentage);

//Arrow functions
const percentageOfWorld3 = (population) => population * 100 / 7900;
chinaPopulationPercentage = percentageOfWorld3(2000);
indiaPopulationPercentage = percentageOfWorld3(1500);
australiaPopulationPercentage = percentageOfWorld3(500);

console.log(chinaPopulationPercentage, indiaPopulationPercentage, australiaPopulationPercentage);