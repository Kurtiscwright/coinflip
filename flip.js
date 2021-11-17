const prompt = require('prompt-sync')();

let heads = 0;
let tails = 1;
let flip = Math.random();
let result = 0;
 
const flips = prompt('How many flips do you want to test \n');
const side = prompt('Pick a number 0 for heads or 1 for tails \n');

//add start timer and timer + input time.
let start = new Date;
console.log('The current time is: ',start);

while (result <= flips) {
    if (Math.round(flip) === side) {
        result++;
        return console.log('I found your side in %s flips ', result);
    } else {
        result++;
    }
}

return console.log('I did not find your side in %s flips ', result);