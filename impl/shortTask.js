(function () {
    'use strict';

    window.shortTask = {
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
        alphabetOrder: function (str) {
            return this.returnOnlyLetter(str.toLowerCase().split("").sort().join());
        },
        upperCase:function(str)
        {
            var tempArray = str.split(" ");
            var outputArray = [];

            for (var i = 0; i < tempArray.length; i++) {
                outputArray.push(tempArray[i].charAt(0).toUpperCase() + tempArray[i].slice(1));
            }
            return outputArray.join(" ");
        }

    };
})();