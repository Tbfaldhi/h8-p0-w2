membalikString('hello world!');


console.log('hello world! jadi '+ membalikString('hello world!'));

function membalikString(str) {
        var ubahString = "";
        for (var i = str.length - 1; i >= 0; i--) {
        ubahString = ubahString + str[i];
    }
   return ubahString;
}
