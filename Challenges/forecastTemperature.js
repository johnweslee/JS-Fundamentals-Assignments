// Codiing challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example : [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

TEST DATA 1 : [17, 21, 23]
TEST DATA 2 : [12, 5, -5, 0, 4] 
*/

// solution

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
    let displayString = '... '
    for(let i = 0; i <= arr.length - 1; i++){
        displayString = displayString.concat(` ${arr[i]}°C in ${i+1} days ...`);
    }
    return displayString;
}

console.log(printForecast(arr1));
console.log(printForecast(arr2));