const removeFromArray = function(array, value, value2, value3, value4) {
let i2;

    for (i = 0; i < array.length; i++) {
        if (array[i] === value) {
            i2 = i
            array.splice(i2, 1)
        }
    }

    for (i = 0; i < array.length; i++) {
        if (array[i] === value2) {
            i2 = i
            array.splice(i2, 1)
        }
    }

    for (i = 0; i < array.length; i++) {
        if (array[i] === value3) {
            i2 = i
            array.splice(i2, 1)
        }
    }

    for (i = 0; i < array.length; i++) {
        if (array[i] === value4) {
            i2 = i
            array.splice(i2, 1)
        }
    }

    return array;
}





//[1, 2, 3, 4] , 3

//0 array[0](1) == 3? no
//1 array[1](2) == 3? no
//2 array[2](3) == 3? no
//3 array[3](4) == 3? no

// Do not edit below this line
module.exports = removeFromArray;

//go through array
// find value of array in array
//slice out value
//splice array together