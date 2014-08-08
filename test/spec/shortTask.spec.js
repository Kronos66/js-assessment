describe('short task', function () {
    'use strict';
    var answers = window.shortTask;

    //reverseNumber()
    it('should return a revers number', function () {
        expect(answers.reverseNumber(1234)).toBe(4321);
    });
    it('should return a revers number', function () {
        expect(answers.reverseNumber('1234')).toBe(4321);
    });
    it('should not return a string', function () {
        expect(answers.reverseNumber(1234)).not.toBe('4321');
    });
    it('should not accept string', function () {
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
    iit('should converts the first letter each word in upper case ',function(){
        expect(answers.upperCase('That is hard to understand')).toBe('That Is Hard To Understand');
    });

    it('should not change upper case letter',function(){
        expect(answers.upperCase('ThatIs Hard')).toBe('ThatIs Hard');
    });


});
