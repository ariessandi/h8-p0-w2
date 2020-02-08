function angkaPalindrome(num) {
  // you can only write your code here!
  var hasil = false;
  var new_num = "";
  num = num + 1;
  for(var a=0; a < num; a++){  
    new_num = "";
    num=num.toString();

    for(var i = num.length-1; i >=0 ; i--){
      new_num += num[i];
    }

    if(new_num == num){
      a = num;
    }

    num = parseInt(num)+1;
    

  }
  return new_num;

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); //1001
console.log(angkaPalindrome(1800)); //1881