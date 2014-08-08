/**
 *Write a JavaScript function that accepts a string as a parameter
 *and converts the first letter of each word of the string in upper case.
 */

(function ()
{
    'use strict';

    window.upperCase = {
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