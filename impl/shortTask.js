(function () {
    'use strict';

    window.shortTask = {
        /*Write function that reverse a number.[1]*/
        reverseNumber: function (num) {
            if (isNaN(num)) {
                return false;
            }
            num = num + "";
            return parseInt(num.split("").reverse().join(""));

        },

        returnOnlyLetter: function (str) {

            var temp = str.split(""),
                ob = /^[a-z]/,
                outputArray = [];

            for (var i = 0, x = temp.length; i < x; i++) {
                if (ob.test(temp[i])) {
                    outputArray.push(temp[i]);
                }
            }
            return outputArray.join();
        },
        /*Write function that returns a passed string with letters in alphabetical order[4]*/
        alphabetOrder: function (str) {
            return this.returnOnlyLetter(str.toLowerCase().split("").sort().join());
        },
        /*Write function that converts the first letter of each word of the string in upper case[5]*/
        upperCase: function (str) {
            var tempArray = str.split(" ");
            var outputArray = [];

            for (var i = 0; i < tempArray.length; i++) {
                outputArray.push(tempArray[i].charAt(0).toUpperCase() + tempArray[i].slice(1));
            }
            return outputArray.join(" ");
        },
        /*Write function that find the longest word within the string*/
        findTheLongestWord: function (str) {
            var inputArray = str.match(/\w[a-z]{0,}/gi),
                tempLength = inputArray[0].length,
                outputArray = inputArray[0];

            for (var i = 1, x = inputArray.length; i < x; i++) {
                if (inputArray[i].length > tempLength) {
                    outputArray = [];
                    outputArray.push(inputArray[i]);
                    tempLength = inputArray[i].length;
                }
                else if (inputArray[i].length == tempLength) {
                    outputArray.push(inputArray[i]);
                }
            }
            return outputArray;

        },
        /*Write a function that counts the number of vowels within the string[7]*/
        vovelCount: function (str) {
            var vovelList = 'aeiouyAEIOUY',
                vovelC = 0;
            for (var i = 0, x = str.length; i < x; i++) {
                if (vovelList.indexOf(str[i]) !== -1) {
                    vovelC++;
                }
            }
            return vovelC;
        }


    };
})();