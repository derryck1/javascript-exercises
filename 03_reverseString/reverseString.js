

const reverseString = function(string) {
    let length = string.length;
    let reversed = "";

    for (i = length; i >= 0;  i--) { 
        reversed += string.charAt(i);
    }
    return reversed;
}



// Do not edit below this line
module.exports = reverseString;

//get a string
// get the length of the string
// take the last character of the string and add it to a new variable until
// theres no items left