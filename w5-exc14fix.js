function changeVocals (str) {
  //code di sini
  var vocal ="aiueoAIUEO";
  var huruf ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arra = [];
 var flag = false;
  strx=str;

    for(var a = 0; a < str.length; a++){
      //console.log(str[a]);
      flag = false;
      for(var b = 0; b < vocal.length; b++){
        if(str[a]==vocal[b]){
         
            for(var c = 0; c < huruf.length; c++){
               
              if(vocal[b]==huruf[c]){
                  arra.push(huruf[c+1]);
                  flag =true;
              }
            } 

        }
      }
      if(flag == false){
          arra.push(str[a]);
      }
    }

  return arra;
  
}

function reverseWord (str) {
  var arrb=[];
  for( var i = str.length - 1;  i >= 0; i--){
    arrb.push(str[i]);
    //console.log(arrb);
    
  }
  return arrb;
}

function setLowerUpperCase (str) {
  //code di sini
  var besar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var kecil ="abcdefghijklmnopqrstuvwxyz";
  var flag = false;
  //console.log(str);
  var arr = [];
  for(var m = 0; m < str.length; m++){
    for(var n = 0; n < besar.length; n++){
      if(str[m] == besar[n]){
        str[m] = kecil[n];
      }else if(str[m] == kecil[n]){
        str[m] = besar[n];
      }
    }
    //console.log(str[m]);
  }
  //console.log(str);
  return str;
}

function removeSpaces (str) {
  //code di sini
  var ress ="";
  //console.log(str);
  for(var i = 0 ; i < str.length; i++){
    if(str[i]!= ' '){
      ress += str[i];
    }
  }
  return ress;
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5){
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }else{
  var changevocal = changeVocals(name);
  var reversed = reverseWord(changevocal);
  var setLowUp = setLowerUpperCase(reversed); 
  return removeSpaces(setLowUp);
  }

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
