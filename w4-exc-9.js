function checkAB(num) {
  // you can only write your code here!
  var arra = [];
  var arrb = [];
  var flag = false;
  for(var i = 0; i < num.length; i++){
    if(num[i] == 'a'){
        arra.push(i);
        //flag = true;
    }
    if(num[i] == 'b'){
        arrb.push(i);
        //flag = true;
    }
  }

  for( var a = 0; a < arra.length; a ++){
    for(var b = 0; b < arrb.length; b++){
      if(arra[a] - arrb[b] == 4 || arra[a] - arrb[b] == -4 ){
        flag = true;
      }
    }
  }
    if(flag == true){
      return true;
    }else{
      return false;
    }
  

  //console.log(arra);
  //console.log(arrb);
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false