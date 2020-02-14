function makanTerusRekursif(waktu) {
  // you can only write your code here!
  //hasil = Math.ceil(waktu/15);
    if (waktu > 0) {
      waktu = waktu - 15;
      return 1 + makanTerusRekursif(waktu);
        //return 0;
    } else {
        return 0;
    }

}


// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0

