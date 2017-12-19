var deretMaju = 1;
var deretMundur = 10;
var jumlahMaju = 0;
var JumlahMundur = 22;

console.log('looping pertama');

while(deretMaju <= 10) { // Loop akan terus berjalan selama nilai deret masih di bawah 10
  jumlahMaju += 2; // Menambahkan nilai variable jumlah dengan angka deret
  deretMaju++; // Mengubah nilai deret dengan Menambahkan 1
  console.log(jumlahMaju + ' - I love coding')
}

console.log('looping kedua');

while(deretMundur >= 1 ) { // Loop akan terus berjalan selama nilai deret masih di atas 1
  JumlahMundur -= 2; // mengurangi nilai variable jumlah dengan angka deret
  deretMundur--; // Mengubah nilai deret dengan mengurangi 1
  console.log(JumlahMundur + ' - I will become fullstack developer ')
}
