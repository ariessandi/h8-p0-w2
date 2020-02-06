function pasanganTerbesar(num) {
  // you can only write your code here!
  var digitsz,temp;
  var resnum,resultz;
  num = num.toString();
  var outputx = num;
  resnum=[];

  for (var i = 0; i < num.length - 1; i++) {
    for (var j = 0; j < 1; j++){
      digitsz = outputx[i]+outputx[i+1];
      resnum.push(digitsz);
    }

    for (var k = 1; k < resnum.length; k += 1) {
      if (resnum[k - 1] > resnum[k]) {
        var tmp = resnum[k - 1];
        resnum[k - 1] = resnum[k];
        resnum[k] = tmp;
      }

    }

  }

return resnum[resnum.length-1];
}

// TEST CASES

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99