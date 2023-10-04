const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const math = require('./../1-math');

describe('Testing the isOdd function', function(){
    it('should return true if the number is 1', function(){
        const result1 = math.isOdd(1);
        const expectedResult1 = true;
        expect(result1).equal(expectedResult1);
    });

    it('should return false if the number is 2', function(){
        const result2 = math.isOdd(2);
        const expectedResult2 = false;
        expect(result2).equal(expectedResult2);
    });

    it('should return null if the number is 2.4', function(){
        const result3 = math.isOdd(2.4);
        const expectedResult3 = null;
        expect(result3).equal(expectedResult3);
    });

    it('should return null if the parameter is "hello"', function(){
        const result4 = math.isOdd('hello');
        const expectedResult4 = null;
        expect(result4).equal(expectedResult4);
    });

    it('should return true if the parameter is an array with [1,3,5]', function(){
        const result5 = math.isOdd([1,3,5]);
        const expectedResult5 = true;
        expect(result5).equal(expectedResult5);
    });

    it('should return false if the parameter is an array with [1,4,5]', function(){
        const result6 = math.isOdd([1,4,5]);
        const expectedResult6 = false;
        expect(result6).equal(expectedResult6);
    });


})