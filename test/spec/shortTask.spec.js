describe('short task', function () {
    'use strict';
    var answers = window.shortTask;

    //reverseNumber()
    iit('should return a revers number', function () {
        expect(answers.reverseNumber(1234)).toEqual(4321);
    });
    it('should return a revers number from "number string"', function () {
        expect(answers.reverseNumber('1234')).toBe(4321);
    });
    it('should not return a string', function () {
        expect(answers.reverseNumber(1234)).not.toBe('4321');
    });
    it('should not accept not number argument', function () {
        expect(answers.reverseNumber('abcs')).toBe(false);
    });
    //returnOnlyLetter()
    it('should return only letter', function () {
        expect(answers.returnOnlyLetter('a4l1f5a')).toBe('a,l,f,a');
    });

    it('should return only letter', function () {
        expect(answers.returnOnlyLetter('a4l1f5a')).toBe('a,l,f,a');
    });

    //alphabetOrder()
    it('should return letters in alphabetical order', function () {
        expect(answers.alphabetOrder('alfa')).toBe('a,a,f,l');
    });

    it('should return lower case letters in alphabetical order', function () {
        expect(answers.alphabetOrder('AlfA')).toBe('a,a,f,l');
    });

    it('should return lower case letters in alphabetical order', function () {
        expect(answers.alphabetOrder('A123LFa')).toBe('a,a,f,l');
    });

    it('should return only letters in alphabetical order', function () {
        expect(answers.alphabetOrder('a1l2f3a')).toBe('a,a,f,l');
    });

    it('should return only letters in alphabetical order', function () {
        expect(answers.alphabetOrder('A1l62f3a')).toBe('a,a,f,l');
    });

    //upperCase()
    it('should converts the first letter each word in upper case ', function () {
        expect(answers.upperCase('That is hard to understand')).toBe('That Is Hard To Understand');
    });

    it('should not change upper case letter',function(){
        expect(answers.upperCase('ThatIs Hard')).toBe('ThatIs Hard');
    });

    //vovelCount
    it('should return count of vovel', function () {
        expect(answers.vovelCount('One Two ThreeE')).toBe(6);
    });
    it('should return count of vovel', function () {
        expect(answers.vovelCount('EAioioi23123123uyI')).toBe(10);
    });
    //theLongestWord
    it('should return the longest word at the string', function () {
        expect(answers.findTheLongestWord('This is the end of the world')).toBe(['world']);
    });

    it('should return the longest word at the string', function () {
        expect(answers.findTheLongestWord('This,i...i the@world of the world world')).toBe(['world', 'world', 'world']);
    });

});
