function xo(str) {
  var a=0;
  var b=0;
  for(var i=0; i < str.length; i++){
    if(str[i]=='x'){
      a = a+1;
    }else{
      b = b+1;
    }

  }
    if(a == b){
      return true;
    }else{
      return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true