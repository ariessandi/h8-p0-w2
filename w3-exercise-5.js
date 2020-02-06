function palindrome(kata) {
  var new_kata="";
  // you can only write your code here!
  for(var i = kata.length-1; i >=0 ; i--){
     new_kata += kata[i];
  }
    //console.log(new_kata);
    if(new_kata == kata){
      return true;
    }else{
      return false;
    }
    
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false