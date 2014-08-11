(function () {
    'use strict';

    window.regularExp = {
        /*Check the first character of a word in the string is uppercase or not.[1]*/
        checkFirstUpperCase: function (str) {
            var upperCase = /^[A-Z]/;
            return (upperCase.test(str)) == true || false;

        },
        /*Write a function to check a credit card number ( format 9999-9999-9999-9999 ).[2]*/
        checkCreditCard: function (num) {/*
         var pattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
         if(pattern.test(num)){
         return true;
         }
         else {
         return false;
         }*/

            var pattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
            return (pattern.test(num)) == true || false;

        },
        /*Write a pattern that matches e-mail addresses[3]*/
        checkEmail: function (email) {
            var pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
            return (pattern.test(email)) == true || false;
        }
        /*Write a function to search a date (format dd/dd/dddd) within a string*/
//        findDate: function(str){
//            var pattern = /(\d\d?)\/(\d\d?)\/(\d{4})/;
//            if(pattern.test(str)){
//                return str.match(pattern)[0];
//            }
//            else{
//                return false
//            }
//
//        }
    };
})();