/**
 *Write a JavaScript function that accepts a string as a parameter
 *and converts the first letter of each word of the string in upper case.
 */

describe('upperCase', function ()
{
    'use strict';

    var answers = window.upperCase;
    iit('should converts the first letter each word in upper case ',function()
    {
        expect(answers.upperCase('That is hard to understand')).toBe('That Is Hard To Understand');
    });

    iit('should not change upper case letter',function()
    {
        expect(answers.upperCase('ThatIs Hard')).toBe('ThatIs Hard');
    });


});