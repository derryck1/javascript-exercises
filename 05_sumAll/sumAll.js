const sumAll = function(num1, num2) {
    let x = 0;

    if (((typeof num1) != 'number') || ((typeof num2) != 'number')) {
        x = 'ERROR';
    } else if ((num1 < 0) || (num2 < 0)) {
        x = 'ERROR';
    } else if (num1 > num2) {
        let holder;
        holder = num1;
        num1 = num2;
        num2 = holder;

        for (let i = 1; i <= num2; i++) {
            x += i;
        }
    } else {
    for (let i = 1; i <= num2; i++) {
        x += i;
    }
}
    return x;
}

// Do not edit below this line
module.exports = sumAll;

//Read both integers (1,4)
//Set X = to first integer
//loop x = x + (x+1)
