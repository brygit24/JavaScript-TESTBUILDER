/*
This file, detectNetworktest will create and "detect"  the following credit card networks and combinations:

* Diner's club:     prefix = 38 or 39;                                         cardlength = 14                  (2)
* American Express: prefix = 34 or 37;                                         cardlength = 15                  (2)
* Visa:             prefix = 4:                                                cardlength = 13, 16, or 19       (3)
* MasterCard:       prefix = 51,52,53,54 or 55                                 cardlength = 16                  (5)
* Discover:         prefix = 6011, 644=>649, or 65                             cardlength = 16 or 19            (16)     
* Maestro           prefix = 5018,5020,5038, or 6304                           cardlength = 12=>19              (32)
* China Union Pay   prefix = 622126=>622925, 624=>626, or 6282=>6288           cardlength = 16=>19              (3,240)
* Switch            prefix = 4903,4905,4911,4936,564182,633110,6333, or 6759   cardlength = 16, 18, or 19.      (24)

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

function createCard(setPre, randSuff) {
  return setPre + numGen(randSuff);
}
function numGen (inNum) {  
var outArr = [];
  for (var i = 1; i <= inNum; i++) {
    outArr.push(getRandomInt(9));
  } 
 return outArr.join('');
}  
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// using different Chai asserts.  Also used a native assert. In production code, would use the same throughout....
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

// Diners club = 38 or 39 len = 14 (2 test cases)
describe ('Diner\'s Club',  function() {
  var assert = function(isTrue) {
    if (!isTrue) {
      throw new Error('Test Failed!');
    }
  }
  var t1 = createCard(38,12);
  it ('prefix 38, len 14, card# = ' + t1, function() {
    assert(detectNetwork(t1) === dc);
  });
  var t2 = createCard(39,12);
  it ('prefix 39, len 14, card# = ' + t2, function() {
    assert(detectNetwork(t2) === dc);
  });
});

// American express pre 34 or 37 and len 15 (2 test cases)
describe('American Express', function() {
  var a1 = createCard(34,13);
  it ('prefix 34, len 15, card# = ' + a1, function() {
    assert(detectNetwork(a1) === am);
  });
  var a2 = createCard(37,13);
  it ('prefix 37, len 15, card# = ' + a2, function() {
    assert(detectNetwork(a2) === am);
  });
});

// Visa: prefix = 4: cardlength = 13, 16, or 19  (3 test cases)
describe ('Visa', function() {
  v1 = createCard(4,12);
  it ('prefix 4, len 13, card# = ' + v1, function() {
    assert(detectNetwork(v1) === vs);
  });
  v2 = createCard(4,15);
  it ('prefix 4, len 16, card# = ' + v2, function() {
    assert(detectNetwork(v2) === vs);
  });
  v3 = createCard(4,18);
  it ('prefix 4, len 19, card# = ' + v3, function() {
    assert(detectNetwork(v3) === vs);
  });
}); 

// MasterCard: prefix = 51,52,53,54 or 55 cardlength = 16 (5 test) 
describe('Master Card', function(){
  for (prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      var m1 = createCard(prefix,14);
      it ('prefix ' + prefix + ', len = 16, card# = ' + m1, function() {
        (detectNetwork(m1) === mc).should.equal(true);  
      });
    })(prefix);
  };
}); 

// Discover: prefix = 6011, 65 or 644=>649 cardlength = 16 or 19   (16 test)     
describe('Discover', function() {
  var d1 = createCard(6011,12);
  it ('prefix 6011, len 16, card# = ' + d1, function() {
    expect(detectNetwork(d1)).to.equal(dis);
  });
  var d2 = createCard(6011,15);
  it ('prefix 6011, len 19, card# = ' + d2, function() {
    expect(detectNetwork(d2)).to.equal(dis);
  });
  var d3 = createCard(65,14);
  it ('prefix 65, len 16, card# = ' + d3, function() {
    expect(detectNetwork(d3)).to.equal(dis);
  });
  var d4 = createCard(65,17);  
  it ('prefix 65, len 19, card# = ' + d4, function() {
    expect(detectNetwork(d4)).to.equal(dis);
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      var d5 = createCard(prefix,13);
      it ('prefix ' + prefix + ' len 16, card# =  ' + d5, function() {
        expect(detectNetwork(d5)).to.equal(dis);
      });
      var d6 = createCard(prefix,16);
      it ('prefix ' + prefix + ' len 19, card# =  ' + d6, function() {
        expect(detectNetwork(d6)).to.equal(dis);
      });
    })(prefix);
  }
});   

// Maestro: prefix = 5018,5020,5038, or 6304 cardlength = 12=>19 (32 test)
describe ('Maestro', function() {
  for (var len = 12; len <= 19; len++) {
    (function(len) {
      var m1 = createCard(5018,len-4);
      it ('prefix 5018, len ' + len + ', card# = ' + m1, function() {
        expect(detectNetwork(m1)).to.equal(ma);
      });
      var m2 = createCard(5020,len-4);
      it ('prefix 5020, len ' + len + ', card# = ' + m2, function() {
        expect(detectNetwork(m2)).to.equal(ma);
      });
      var m3 = createCard(5038,len-4);
      it ('prefix 5038, len ' + len + ', card# = ' + m3, function() {
        expect(detectNetwork(m3)).to.equal(ma);
      });
      var m4 = createCard(6304,len-4);
      it ('prefix 6304, len ' + len + ', card# = ' + m4, function() {
        expect(detectNetwork(m4)).to.equal(ma);
      }); 
    })(len);
  };  
});    

// China union prefix = 622126=>622925, 624=>626, or 6282=>6288 cardlength = 16=>19
describe ('China Union', function() {
  // pre 622126 => 622925
  for (var len = 16; len <= 19; len++) {
    for (var prefix = 622126; prefix <= 622925; prefix++) {
      (function(len,prefix) {         
         var c1 = createCard(prefix,len-6)
         it ('prefix ' + prefix + ', len ' + len + ', card# = ' + c1, function() {
          expect(detectNetwork(c1)).to.equal(cp);
         });       
      })(len,prefix);
    };
  };   
  // pre 624 => 626
  for (var len = 16; len <= 19; len++) {
    for (var prefix = 624; prefix <= 626; prefix++) {
      (function(len,prefix) {         
         var c2 = createCard(prefix,len-3)
         it ('prefix ' + prefix + ', len ' + len + ', card# = ' + c2, function() {
          expect(detectNetwork(c2)).to.equal(cp);
         });       
      })(len,prefix);
    };
  };
  // 6282=>6288
  for (var len = 16; len <= 19; len++) {
    for (var prefix = 6282; prefix <= 6288; prefix++) {
      (function(len,prefix) {         
         var c3 = createCard(prefix,len-4)
         it ('prefix ' + prefix + ', len ' + len + ', card# = ' + c3, function() {
          expect(detectNetwork(c3)).to.equal(cp);
         });       
      })(len,prefix);
    };
  }; 
}); 

//Switch prefix = 4903,4905,4911,4936,564182,633110,6333, 6759 cardlength = 16, 18, or 19. (24 test cases)
describe ('Switch', function() {
  var s1 = createCard(4903,12);
  it ('prefix 4903, len 16, card# = ' + s1, function() {
    expect(detectNetwork(s1)).to.equal(sw);
  });
  var s2 = createCard(4903,14);
  it ('prefix 4903, len 18, card# = ' + s2, function() {
    expect(detectNetwork(s2)).to.equal(sw);
  });
  var s3 = createCard(4903,15);
  it ('prefix 4903, len 19, card# = ' + s3, function() {
    expect(detectNetwork(s3)).to.equal(sw);
  });
  var s4 = createCard(4905,12);
  it ('prefix 4905, len 16, card# = ' + s4, function() {
    expect(detectNetwork(s4)).to.equal(sw);
  });
  var s5 = createCard(4905,14);
  it ('prefix 4905, len 18, card# = ' + s5, function() {
    expect(detectNetwork(s5)).to.equal(sw);
  });
  var s6 = createCard(4905,15);
  it ('prefix 4905, len 19, card# = ' + s6, function() {
    expect(detectNetwork(s6)).to.equal(sw);
  });  
  var s7 = createCard(4911,12);
  it ('prefix 4911, len 16, card# = ' + s7, function() {
    expect(detectNetwork(s7)).to.equal(sw);
  });
  var s8 = createCard(4911,14);
  it ('prefix 4911, len 18, card# = ' + s8, function() {
    expect(detectNetwork(s8)).to.equal(sw);
  });
  var s9 = createCard(4911,15);
  it ('prefix 4911, len 19, card# = ' + s9, function() {
    expect(detectNetwork(s9)).to.equal(sw);
  });  
  var s10 = createCard(4936,12);
  it ('prefix 4936, len 16, card# = ' + s10, function() {
    expect(detectNetwork(s10)).to.equal(sw);
  });
  var s11 = createCard(4936,14);
  it ('prefix 4936, len 18, card# = ' + s11, function() {
    expect(detectNetwork(s11)).to.equal(sw);
  });
  var s12 = createCard(4936,15);
  it ('prefix 4936, len 19, card# = ' + s12, function() {
    expect(detectNetwork(s12)).to.equal(sw);
  });  
  var s13 = createCard(564182,10);
  it ('prefix 564182, len 16, card# = ' + s13, function() {
    expect(detectNetwork(s13)).to.equal(sw);
  });
  var s14 = createCard(564182,12);
  it ('prefix 564182, len 18, card# = ' + s14, function() {
    expect(detectNetwork(s14)).to.equal(sw);
  });
  var s15 = createCard(564182,13);
  it ('prefix 564182, len 19, card# = ' + s15, function() {
    expect(detectNetwork(s15)).to.equal(sw);
  });  
  var s16 = createCard(633110,10);
  it ('prefix 633110, len 16, card# = ' + s16, function() {
    expect(detectNetwork(s16)).to.equal(sw);
  });
  var s17 = createCard(633110,12);
  it ('prefix 633110, len 18, card# = ' + s17, function() {
    expect(detectNetwork(s17)).to.equal(sw);
  });
  var s18 = createCard(633110,13);
  it ('prefix 633110, len 19, card# = ' + s18, function() {
    expect(detectNetwork(s18)).to.equal(sw);
  });  
  var s19 = createCard(6333,12);
  it ('prefix 6333, len 16, card# = ' + s19, function() {
    expect(detectNetwork(s19)).to.equal(sw);
  });
  var s20 = createCard(6333,14);
  it ('prefix 6333, len 18, card# = ' + s20, function() {
    expect(detectNetwork(s20)).to.equal(sw);
  });
  var s21 = createCard(6333,15);
  it ('prefix 6333, len 19, card# = ' + s21, function() {
    expect(detectNetwork(s21)).to.equal(sw);
  });
    var s22 = createCard(6759,12);
  it ('prefix 6759, len 16, card# = ' + s22, function() {
    expect(detectNetwork(s22)).to.equal(sw);
  });
  var s23 = createCard(6759,14);
  it ('prefix 6759, len 18, card# = ' + s23, function() {
    expect(detectNetwork(s23)).to.equal(sw);
  });
  var s24 = createCard(6759,15);
  it ('prefix 6759, len 19, card# = ' + s24, function() {
    expect(detectNetwork(s24)).to.equal(sw);
  });
}); 
