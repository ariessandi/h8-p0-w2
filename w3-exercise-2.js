function balikString(kata){
  var katabaru='';
    for(i=kata.length-1; i>=0 ; i--){
       katabaru +=kata[i]; 
    }
    return katabaru;
}


balikString("hello world!");