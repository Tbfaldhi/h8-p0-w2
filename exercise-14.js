function dataHandling2(){


//data.splice
var input =   ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca " ] ;
input.splice(4, 2, "Pria","SMA Internasional Metro");

console.log(input);

//data split  and switch

var tgl = input[3];
var bulan = tgl.split("/");
switch (bulan[1]) {
     case '01': {console.log( ' Januari ' ); break;}
      case '02':{console.log(' februari ' );break;}
      case '03':{console.log(  ' maret' );break;}
      case '04':{console.log( ' april ');break;}
      case '05':{console.log( ' mei ');break;}
      case '06':{console.log( ' juni ');break;}
      case '07':{console.log( ' juli');break;}
      case '08':{console.log( ' agustus ');break;}
      case '09':{console.log(' september ');break;}
      case '10':{console.log(' oktober ');break;}
      case '11':{console.log(' november ');break;}
      case '12':{console.log(' desember ');break;}
      default: {console.log('input bulan anda ajaib');}
}

//DESCENDING tanggal

bulan.sort(function(value1, value2, value3){
return value1<value3<value2

});
console.log(bulan);

// JOIN dengan -
var joinarray = bulan.join([separator = '-']);
console.log(joinarray)

//membatasi string 15

var string = String(input[1]);
var batas15 = string.slice(0, 15);

console.log(batas15)
}

dataHandling2()
