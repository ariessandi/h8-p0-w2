function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var awal= [];
  var akhir= [];
  var a= [];
  var b = [];
  var hasil = [];
  for(var i = 0; i < arrPenumpang.length; i++){
    awal.push(arrPenumpang[i][1]);
    akhir.push(arrPenumpang[i][2]);
     for(var k = 0; k < rute.length; k++){
        if(rute[k] == awal[i]){
            a.push(k);
           
        }

        if(rute[k] == akhir[i]){
            b.push(k);
           
        }

     }
    hasil.push( { penumpang : arrPenumpang[i][0] ,
    naikDari : arrPenumpang[i][1] ,
    tujuan: arrPenumpang[i][2] , 
    bayar : 2000 * (b[i] - a[i])  });

  }
  return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]