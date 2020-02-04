var tanggal=3; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan=2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun=2019; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)


switch (bulan) {
  case 1:
    bulan = "January";
    break;
  case 2:
    bulan = "February";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case  6:
    bulan = "Juni";
    break;
  case  7:
    bulan = "Juli";
    break;
  case  8:
    bulan = "Agustus";
    break;
  case  9:
    bulan = "September";
    break;
  case  10:
    bulan = "Oktober";
    break;
  case  11:
    bulan = "November";
    break;
  case  12:
    bulan = "Desember";
    break;
}

console.log(tanggal +"-"+ bulan + "-" + tahun);