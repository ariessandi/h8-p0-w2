function changeVocals (str) {
  //code di sini
  var vocal ="aiueoAIUEO";
  var huruf ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var arra = [];
  var hurufx = [];
  var arrb = [];
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
console.log(arra);
 
  
}

function reverseWord (str) {
  //code di sini
}

function setLowerUpperCase (str) {
  //code di sini
}

function removeSpaces (str) {
  //code di sini
}

function passwordGenerator (name) {
  //code di sini
  changeVocals(name);
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
/*
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
*/