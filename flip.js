const prompt = require('prompt-sync')();

let heads = 0;
let tails = 1;
let flip = Math.random();
let result = 0;
 
const flips = prompt('How many flips do you want to test');
const side = prompt('Pick a number 0 for heads or 1 for tails');+

while (result <= flips) {
    if (Math.round(flip) === side) {
        result++;
        console.log('I found your side in ${result}');
    } else {
        result++;
    }
}

