var deretMaju = 1;
var jumlahMaju = 0;


while(deretMaju <= 100) {
 jumlahMaju += 1;
 deretMaju++; 
 hasilBagi = (jumlahMaju % 2)

 if( hasilBagi !== 0 ){
 console.log('counter sekarang '+ jumlahMaju + ' ganjil')
 }else console.log('counter sekarang '+ jumlahMaju + ' genap' );
}

console.log('')
console.log('---------------------------')
console.log('')

console.log('PERULANGAN 1');
for(var deret = 1; deret <= 100; deret+=2){
 if( deret % 3 === 0){console.log(deret + ' kelipatan 3');
}else console.log(deret)
}

console.log('')
console.log('---------------------------')
console.log('')


console.log('PERULANGAN 2');
for(var deret = 1; deret <= 100; deret+=5){
 if( deret % 6 === 0){console.log(deret + ' kelipatan 6');
}else console.log(deret)
}

console.log('')
console.log('---------------------------')
console.log('')

console.log('PERULANGAN 3');
for(var deret = 1; deret <= 100; deret+=9){
 if( deret % 10 === 0){console.log(deret + ' kelipatan 10');
}else console.log(deret)
}
