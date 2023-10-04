const math = require('./1-math');
const assert = require('assert');


// Adding 50 and 70, expecting as result 120. Calling the addTwoNumbers function.
const result1 = math.addTwoNumbers(50, 70)
const expectedValue1 = 120;
assert.equal(result1, expectedValue1);

// Adding -20 and 15, expecting as results -5. Calling the addTwoNumbers function.
const result2 = math.addTwoNumbers(-20, 15);
const expectedValue2 = -5;
assert.equal(result2, expectedValue2);

// Adding all the numbers in the array [1,2,3,4,5,6,7,8,9,10], expecting as result 55.
// Calling the addNumbersInArray function.
const result3 = math.addNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9,10]);
const expectedValue3 = 55;
assert.equal(result3, expectedValue3);

// Adding 50 and 'hello', expecting as result 'The values cannot be added'. Calling the addTwoNumbers function.
const result4 = math.addTwoNumbers(50, 'hello');
const expectedValue4 = 'The values cannot be added';
assert.equal(result4, expectedValue4);
