var Mobil1 = 'Sébastien Loeb';
var Mobil2 = 'Tommi Mäkinen';
var spekmobil1 =[ 'mesin menggunakan turbo charge', 'ban pirelli', 'citroen C4 WRC'];
var spekmobil2 = ['mesin menggunakan NOS', 'ban bridgesstone', 'Misubishi Lancer evo XIII'];

for(var angka = 1; angka <= 100; angka++) {
  console.log('LAP KE ' + angka);
  var a = kecepatan1();
  var b = kecepatan2();
    if(a>b){
        console.log(Mobil1 +' memimpin dengan kecepatan ' +  kecepatan1() )
        console.log('');
      }else{if(a<b){console.log(Mobil2 +' memimpin dengan kecepatan ' + kecepatan2());
        console.log('');
                    }
       }
    }

if (angka > 100 && a>b ){
  console.log(Mobil1+' menang berikut detail spek mobil yang digunakan: ')
  var i = 0;
  while (i<spekmobil1.length ) {
  i++;
  }
  console.log('mesin menggunakan'+spekmobil1[0])
  console.log('ban menggunakan'+spekmobil1[1])
  console.log('merek mobil '+spekmobil1[2])
 }else{console.log(Mobil2+' menang berikut detail spek mobil yang digunakan: ')
      var i = 0;
      while (i<spekmobil1.length ) {
      i++;
        }
  console.log('mesin menggunakan'+spekmobil2[0])
  console.log('ban menggunakan'+spekmobil2[1])
  console.log('merek mobil '+spekmobil2[2])
          }

function kecepatan1(kecepatanMobil1){
  kecepatanMobil1=Math.floor(Math.random() * ((100-2)+1) + 80);
  return(kecepatanMobil1);
}

function kecepatan2(kecepatanMobil2){
  kecepatanMobil2=Math.floor(Math.random() * ((100-2)+1) + 80);
  return(kecepatanMobil2);
} 
