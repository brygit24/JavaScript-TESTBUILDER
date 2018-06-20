/* Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

* Diner's club:     prefix = 38 or 39;                                         cardlength = 14                  (2 test)
* American Express: prefix = 34 or 37;                                         cardlength = 15                  (2 test)
* Visa:             prefix = 4:                                                cardlength = 13, 16, or 19       (3 test)
* MasterCard:       prefix = 51,52,53,54 or 55                                 cardlength = 16                  (5 test)
* Discover:         prefix = 6011, 644=>649, or 65                             cardlength = 16 or 19            (16 test)     
* Maestro           prefix = 5018,5020,5038, or 6304                           cardlength = 12=>19              (32 test)
* China Union Pay   prefix = 622126=>622925, 624=>626, or 6282=>6288           cardlength = 16=>19              (3,240 test)
* Switch            prefix = 4903,4905,4911,4936,564182,633110,6333, or 6759   cardlength = 16, 18, or 19.      (24 test)

                                                                                 ** Total cards to create and test = 3,324 
                                                                                 */  
var dc = 'Diner\'s Club';
var am = 'American Express';
var vs = 'Visa';
var mc = 'MasterCard'
var dis = 'Discover';
var ma = 'Maestro';
var cp = 'China Union Pay';
var sw = 'Switch';

function getPrefix(inData,n) {
var inArr = inData.split('');
var outArr = [];
  for (var z = 0; z < n; z++) { 
    outArr.push(inArr[z]);
  }   
 return (parseInt(outArr.join('')));  
};

var detectNetwork = function(cardNumber) {   
  // Diner's club:  prefix = 38 or 39 len = 14;  
  if (((getPrefix(cardNumber,2) === 38) || (getPrefix(cardNumber,2)  === 39)) && (cardNumber.length === 14)) {
    return dc;
  } 
  // American Express: prefix = 34 or 37; 
  if (((getPrefix(cardNumber,2) === 34) || (getPrefix(cardNumber,2)  === 37)) && (cardNumber.length === 15)) {
    return am;
  }
  //Switch: prefix 4903,4905,4911,4936,564182,633110,6333,6759 cardlength 16, 18, or 19;
  if ((getPrefix(cardNumber,4) === 4903) || (getPrefix(cardNumber,4) === 4905) || (getPrefix(cardNumber,4) === 4911) || (getPrefix(cardNumber,4) === 4936) || (getPrefix(cardNumber,6) === 564182) || (getPrefix(cardNumber,6) === 633110) || (getPrefix(cardNumber,4) === 6333) || (getPrefix(cardNumber,4) === 6759)) {
    return cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19 ? sw : 'foo';
  }
  // Visa: prefix = 4: cardlength = 13, 16, or 19
  if (getPrefix(cardNumber,1) === 4) {
    return cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19 ? vs : 'foo';
  }
  //MasterCard:  prefix = 51,52,53,54 or 55 cardlength 16 
  if ((getPrefix(cardNumber,2) >= 51) && (getPrefix(cardNumber,2) <= 55)) {
    return cardNumber.length === 16 ? mc : 'foo';
  }
  //Discover: prefix = 6011, or 65 cardlength 16 or 19 
  if ((getPrefix(cardNumber,4) === 6011)  || (getPrefix(cardNumber,2) === 65)) {
    return cardNumber.length === 16 || cardNumber.length === 19 ? dis : 'foo';
  }
  //Discover: prefix = 644=>649 cardlength 16 or 19 
  if ((getPrefix(cardNumber,3) >= 644) && (getPrefix(cardNumber,3) <= 649)) {
    return cardNumber.length === 16 || cardNumber.length === 19 ? dis : 'foo';
  }
  //Maestro: prefix = 5018,5020,5038, or 6304 cardlength  12=>19 
  if ((getPrefix(cardNumber,4) === 5018) || (getPrefix(cardNumber,4) === 5020) || (getPrefix(cardNumber,4) === 5038) 
  || (getPrefix(cardNumber,4) === 6304)) {
    return cardNumber.length >= 12 && cardNumber.length <= 19 ? ma : 'foo'; 
  }  
  //China Union Pay: prefix 622126=>622925, 624=>626, 6282=>6288 cardlength 16=>19
  if ((((getPrefix(cardNumber,6) >= 622126) && (getPrefix(cardNumber,6) <= 622925)) || ((getPrefix(cardNumber,3) >= 624) && (getPrefix(cardNumber,3) <= 626)) 
  || ((getPrefix(cardNumber,4) >= 6282) && (getPrefix(cardNumber,4)) <= 6288))) {
    return cardNumber.length >= 16 && cardNumber.length <= 19 ? cp : 'foo';
  }   
};
