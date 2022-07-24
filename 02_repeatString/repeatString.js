const repeatString = function(string, num) {
    let rep = "";
    if (num >= 0 ) {
   
        for (i = 0; i  < num; i++) {
        rep += string;
    }
 } else rep = 'ERROR';
    return rep;
    }
    
    //0 < 10  rep = "" + hey == hey
    //1 < 10  rep = hey + hey = heyhey
    //2 < 10  rep = heyhey + hey = heyheyhey 
    //3 < 10  rep = heyheyhey + hey = heyheyheyhey
    //4 < 10  rep = heyheyheyhey + hey = heyheyheyheyhey
    //5 < 10  rep = heyheyheyheyhey + hey = heyheyheyheyheyhey
    //6 < 10  rep = heyheyheyheyheyhey + hey = heyheyheyheyheyheyhey
    //7 < 10  rep = heyheyheyheyheyheyhey + hey = heyheyheyheyheyheyheyhey
    //8 < 10  rep = heyheyheyheyheyheyheyhey + hey = heyheyheyheyheyheyheyheyhey
    //9 < 10  rep = heyheyheyheyheyheyheyheyhey + hey = heyheyheyheyheyheyheyheyheyhey
    //10 < 10 rep =
    //11 < 10 rep =
    //12 < 10 rep = 
    //13 < 10
// Do not edit below this line
module.exports = repeatString;
