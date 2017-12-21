var input = [
                ['0001', 'Roman Alamsyah', 'Bandar Lampung',' 21/05/1989', 'Membaca'],
                ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
                ['0003', 'Winona', 'Ambon','25/12/1965', 'Memasak'],
                ['0004', 'Bintang Senjaya', 'Martapura',' 6/4/1970', 'Berkebun']
            ]

var form = [
            ['nomor id: ','Nama lengkap: ','TTL: ','hobi: '],
            ['nomor id: ','Nama lengkap: ','TTL: ','hobi: '],
            ['nomor id: ','Nama lengkap: ','TTL: ','hobi: '],
            ['nomor id: ','Nama lengkap: ','TTL: ','hobi: ']
            ]

function dataHandling(){
for (var i = 0; i<input.length; i++) {
        for (var j=0; j<form[i].length; j++) {
    }

    for (var i=0; i<form.length; i++) {
        for (var j=0; j<input[i].length; j++) {
    }
      console.log(  form[i][0]+input[i][0]);
      console.log(  form[i][1]+input[i][1]);
      console.log(  form[i][2] +input[i][2] +''+ input[i][3]);
      console.log(  form[i][3]+input[i][4]);



        }
      }
}
dataHandling();
