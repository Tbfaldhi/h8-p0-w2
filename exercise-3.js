var tanggal = 30; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 13; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1998; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal >= 1 && tanggal <= 31) {
  if (tahun >= 1900 && tahun <= 2200) {
    switch (bulan) {
      case 1: {
        console.log(tanggal + ' Januari ' + tahun);
        break;
      }
      case 2: {
        console.log(tanggal + ' februari ' + tahun);
        break;
      }
      case 3: {
        console.log(tanggal + ' maret' + tahun);
        break;
      }
      case 4: {
        console.log(tanggal + ' april ' + tahun);
        break;
      }
      case 5: {
        console.log(tanggal + ' mei ' + tahun);
        break;
      }
      case 6: {
        console.log(tanggal + ' juni ' + tahun);
        break;
      }
      case 7: {
        console.log(tanggal + ' juli' + tahun);
        break;
      }
      case 8: {
        console.log(tanggal + ' agustus ' + tahun);
        break;
      }
      case 9: {
        console.log(tanggal + ' september ' + tahun);
        break;
      }
      case 10: {
        console.log(tanggal + ' oktober ' + tahun);
        break;
      }
      case 11: {
        console.log(tanggal + ' november ' + tahun);
        break;
      }
      case 12: {
        console.log(tanggal + ' desember ' + tahun);
        break;
      }
      default: {
        console.log('input bulan anda ajaib');
      }
    }
  } else {
    console.log('input tangal atau tahun anda ajaib');
  }
} else {
  console.log('input tanggal atau tahun anda ajaib');
}
