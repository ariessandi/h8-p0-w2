function dataHandling2(input){
   var tanggal=[];
   var bulan ="";
    for(var i=0;i < input.length;  i++){
      input.splice(1, 2, "Roman Alamsyah Elsharawy","Provinsi Bandar Lampung" );
      input.splice(4, 2, "Pria", "SMA Internasional Metro" );
    }
    console.log(input);
    tanggal = input[3].split("/");
    //console.log(tanggal[1]);
    
    switch (tanggal[1]) {
      case "01":
        bulan = "Januari";
        break;
      case "02":
        bulan = "Februari";
        break;
      case "03":
        bulan = "Maret";
        break;
      case "04":
        bulan = "April";
        break;
      case "05":
        bulan = "Mei";
        break;
      case "06":
        bulan = "Juni";
        break;
      case "07":
        bulan = "Juli";
        break;
      case "08":
        bulan = "Agustus";
        break;
      case "09":
        bulan = "September";
        break;
      case "10":
        bulan = "Oktober";
        break;
      case "11":
        bulan = "November";
        break;
      case "12":
        bulan = "Desember";
    }
    
  console.log(bulan);
  var temp;
  var tanggal_baru = tanggal;
 
  for(var a=0; a < tanggal_baru.length; a++){
    for(var b=0; b < tanggal_baru.length; b++){
      if(tanggal_baru[b][0]==="0"){
        tanggal_baru[b] = tanggal_baru[b][1];
        
      }
      //console.log(tanggal_baru[b]);
      if(tanggal_baru[b] > tanggal_baru[b+1]){
          temp = tanggal_baru[b+1];
          tanggal_baru[b+1] = tanggal_baru[b];
          tanggal_baru[b] = temp;
      }

    }
      if(tanggal_baru[a].length==1){
         tanggal_baru[a] = "0"+tanggal_baru[a];
      }
  }
  console.log(tanggal_baru);
  tanggal = input[3].split("/");
  console.log(tanggal.join("-"));
  console.log(input[1].slice(0,15));
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */