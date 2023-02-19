/* const num1 = 2
const num2 = 3
const sumNumber = diffTwoNumber(num1, num2)
console.log(sumNumber)

function diffTwoNumber(a, b) {
    return a - b
}
*/

import { strict as assert } from 'assert';

assert.equal(sum(2,2), 5)

function sum(a, b) {
    return a + b
}