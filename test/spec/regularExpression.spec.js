describe('short task', function () {
    'use strict';
    var answers = window.regularExp;

    //firstUpperCase()
    it('"Abcd" should return true', function () {
        expect(answers.checkFirstUpperCase('Abcd')).toBeTruthy();
    });

    it('"Abcd Abcd" should return true', function () {
        expect(answers.checkFirstUpperCase('Abcd Abcds')).toBeTruthy();
    });

    it('"Abcd abcds" should return true', function () {
        expect(answers.checkFirstUpperCase('Abcd abcds')).toBeTruthy();
    });

    it('"abcds" should return false', function () {
        expect(answers.checkFirstUpperCase('abcds')).toBeFalsy();
    });

    //checkCreditCard()
    it('should check "1234-1234-1234-1234" and return true', function () {
        expect(answers.checkCreditCard('1234-1234-1234-1234')).toBeTruthy();
    });
    it('should check "123-1234-1234-1234" and return false', function () {
        expect(answers.checkCreditCard('123-1234-1234-1234')).toBeFalsy();
    });
    //checkEmail()
    it('should check "costam_sasd@o2.pl" and return true', function () {
        expect(answers.checkEmail('costam_sasd@o2.pl')).toBeTruthy();
    });

    //findDate()
//    iit('should find date in the string',function(){
//        expect(answers.findDate('Ala ma koty dna 12/12/2013')).toEqual('12/12/2013');
//    });
//
//    iit('should find date in the string',function(){
//        expect(answers.findDate('Ala ma koty dna 12/12/2013 13/12/2013')).toEqual('a12/12/2013');
//    });
//
//
//    iit('should not find  date in the string',function(){
//        expect(answers.findDate('Ala ma koty')).toBeFalsy();
//    });


});