// a function that accepts a string and number parameter. Returns "n" amount of that string as a number
function jStr(inData,n) {
  var inArr = inData.split('');
  var outArr = [];
  for (var z = 0; z < n; z++) { 
    outArr.push(inArr[z]);
  }  
  return (parseInt(outArr.join('')));  
}

var detectNetwork = function(cardNumber) {  
    
  // Diners club:  38 or 39 and length = 14
  if  (((jStr(cardNumber,2) === 38) || (jStr(cardNumber,2) === 39)) && ((cardNumber.length === 14))) {  
    return 'Diner\'s Club';    
  }
  // American Express: 34 or 37 and length = 15
  if (((jStr(cardNumber,2) === 34) || (jStr(cardNumber,2) === 37)) && (cardNumber.length === 15)) {
      return 'American Express';      
  }
  //SWITCH edge cases 4903, 4905, 4911, 4936 and length 16 and 19  Switch  **
  if ((jStr(cardNumber,4) === 4903) || (jStr(cardNumber,4) === 4905) || (jStr(cardNumber,4) === 4911) || (jStr(cardNumber,4) === 4936)) {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Switch';
    }
  }
  // Visa prefix of 4 and a length of 13, 16, or 19.
  if (jStr(cardNumber,1) === 4) {
      if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
          return 'Visa';
      }      
  }
  // MasterCard PRefix of 51, 52, 53, 54, 55 and a length of 16.
  if ((jStr(cardNumber,2) > 50) && (jStr(cardNumber,2) < 56)) {
    if (cardNumber.length === 16) {
      return 'MasterCard';
    }
  }
  // DISCOVER prefix of 6011, 644-649, or 65, and a length of 16 or 19.     
  // discover card for 6011
  if (jStr(cardNumber,4) === 6011) {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';    
    }  
  }
  // DISCO 644-649 len 16 or 19
  if ((jStr(cardNumber,3) > 643) && (jStr(cardNumber,3) < 650)) {
    //return ('DISCO ' + cardArray[0] + cardArray[1] + cardArray[2]);
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';    
    }
  }	
  // discover 65 and len 16 or 19
  if ((jStr(cardNumber,2) === 65))  {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';    
    }    
  }	
  // Maestro  5018, 5020, 5038, or 6304, and a length of 12-19.     
  if (jStr(cardNumber,4) === 5018 || (jStr(cardNumber,4) === 5020) || (jStr(cardNumber,4) === 5038) || jStr(cardNumber,4) === 6304) {
    for (var i = 12; i < 20; i++) {        
      if (cardNumber.length === i) {            
        return 'Maestro';
      }
    }
  } 
  // China union pay 622126-622925, 624-626, or 6282-6288 and a length of 16-19
  if (((jStr(cardNumber,6) > 622125) && (jStr(cardNumber,6) < 622926)) || ((jStr(cardNumber,3) > 623) && (jStr(cardNumber,3) < 627))) {     
       for (var i = 16; i < 20; i++) {
         if (cardNumber.length === i) {
          return 'China UnionPay';
         }
       }
     }
  if ((jStr(cardNumber,4) > 6281) && (jStr(cardNumber,4) < 6289))  {     
    for (var i = 16; i < 20; i++) {
      if (cardNumber.length === i) {
       return 'China UnionPay';
      }
    }
  }
  // Switch switch 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // SWITCH 4903 4905 4911 4936 and length of 18.... length 
   if ((jStr(cardNumber,4) === 4903) || (jStr(cardNumber,4) === 4905) || (jStr(cardNumber,4) === 4911) || (jStr(cardNumber,4) === 4936)) {
     //if (cardNumber.length === 16 || (cardNumber.length === 18) || cardNumber.length === 19) {
       if (cardNumber.length === 18) {
         return 'Switch';
     }
   }
   // SWITCH 564182 633110
   if ((jStr(cardNumber,6) === 564182) || (jStr(cardNumber,6) === 633110)) {
     if (cardNumber.length === 16 || (cardNumber.length === 18) || cardNumber.length === 19) {
       return 'Switch';
     }
   }
    // SWITCH 6333 6759
   if ((jStr(cardNumber,4) === 6333) || (jStr(cardNumber,4) === 6759)) {
     if (cardNumber.length === 16 || (cardNumber.length === 18) || cardNumber.length === 19) {
       return 'Switch';
     }
   }
}