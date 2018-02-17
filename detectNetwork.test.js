var expect = chai.expect;  
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
// Diners club: 38 or 39 length of 14:    (2test)
describe('Diner\'s Club', function() {    
  it('has a prefix of 38 and a length = 14', function() {    
    expect(detectNetwork(38 + numGen(12))).to.equal('Diner\'s Club');
  });    
  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork(39 + numGen(12))).to.equal('Diner\'s Club');
  });    
});

// American express: 34 or 37 length = 15: (2test)
describe('American Express', function() {  
  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork(34 + numGen(13))).to.equal('American Express');
  });  
  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork(37 + numGen(13))).to.equal('American Express');
  });  
});

// Visa: 4 length of 13, 16, or 19
describe('Visa', function() {      
  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork(4 + numGen(12))).to.equal('Visa');
  });  
  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork(4 + numGen(15))).to.equal('Visa');
  });  
  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork(4 + numGen(18))).to.equal('Visa');
  });    
});

// MasterCard: 51, 52, 53, 54, or 55 and a length of 16 (5test)
describe('MasterCard', function() {    
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork(51 + numGen(14))).to.equal('MasterCard');
  }); 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork(52 + numGen(14))).to.equal('MasterCard');
  }); 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork(53 + numGen(14))).to.equal('MasterCard');
  });  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork(54 + numGen(14))).to.equal('MasterCard');
  });  
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork(55 + numGen(14))).to.equal('MasterCard');
  });  
});

// Discover: 6011, 644-649, or 65 length 16 or 19 (16test)
describe('Discover', function() { 
    var dc = 'Discover';    
    it ('has a prefix of 6011 and a length of 16', function () {
		expect(detectNetwork(6011 + numGen(12))).to.equal(dc);
    });
	it ('has a prefix of 6011 and a length of 19', function () {
		expect(detectNetwork(6011 + numGen(15))).to.equal(dc);
    });	
	it ('has a prefix of 65 and a length of 16', function () {
		expect(detectNetwork(65 + numGen(14))).to.equal(dc);
    });
	it ('has a prefix of 65 and a length of 19', function () {
		expect(detectNetwork(65 + numGen(17))).to.equal(dc);
    });	
    for (var prefix = 644; prefix <= 649; prefix++) {
      (function (prefix) {		        
	    it('has a prefix of ' + prefix + ' and a length of 16', function() {
	      expect(detectNetwork(prefix + numGen(13))).to.equal(dc); 		
        });
        it('has a prefix of ' + prefix + ' and a length of 19', function() {	      
		  expect(detectNetwork(prefix + numGen(16))).to.equal(dc);
        });		
      })(prefix);    
    };
});
// Maestro 5018, 5020, 5038, or 6304 length of 12-19.
describe('Maestro', function() {
	var ma = 'Maestro';	
	for (var len = 12; len < 20; len++) {
	  (function(len) {
			it('has a prefix of 5018 and a length of ' + len, function () {
				expect(detectNetwork(5018 + numGen(len-4))).to.equal(ma);
		    });
		})(len);	
	};	
	for (var len = 12; len < 20; len++) {
	  (function(len) {
			it('has a prefix of 5020 and a length of ' + len, function () {
				expect(detectNetwork(5020 + numGen(len-4))).to.equal(ma);
		    });
		})(len);	
	};	
	for (var len = 12; len < 20; len++) {
	  (function(len) {
			it('has a prefix of 5038 and a length of ' + len, function () {
				expect(detectNetwork(5038 + numGen(len-4))).to.equal(ma);
		    });
		})(len);	
	};	
	for (var len = 12; len < 20; len++) {
	  (function(len) {
			it('has a prefix of 6304 and a length of ' + len, function () {
				expect(detectNetwork(6304 + numGen(len-4))).to.equal(ma);
		    });
		})(len);	
	}; 	
});
// China union pay 622126-622925, 624-626, or 6282-6288 and a length of 16-19
describe('China UnionPay', function() {
	var cp = 'China UnionPay';
	// 622126 ==> 622925 
	for (var prefix = 622126; prefix <= 622925; prefix++) {
	  (function(prefix) {
	    it('has a prefix of ' + prefix + ' and a length of 16', function() {
	      expect(detectNetwork(prefix + numGen(10))).to.equal(cp); 		
        }); 
		it('has a prefix of ' + prefix + ' and a length of 17', function() {
	      expect(detectNetwork(prefix + numGen(11))).to.equal(cp); 		
        });
		it('has a prefix of ' + prefix + ' and a length of 18', function() {
	      expect(detectNetwork(prefix + numGen(12))).to.equal(cp); 		
        });
		it('has a prefix of ' + prefix + ' and a length of 19', function() {
	      expect(detectNetwork(prefix + numGen(13))).to.equal(cp); 		
        });
	  })(prefix);
	};
	// 624 ==> 626 
	for (var prefix = 624; prefix <= 626; prefix++) {
	  (function(prefix) {
	    it('has a prefix of ' + prefix + ' and a length of 16', function() {
	      expect(detectNetwork(prefix + numGen(13))).to.equal(cp); 		
        });
		it('has a prefix of ' + prefix + ' and a length of 17', function() {
	      expect(detectNetwork(prefix + numGen(14))).to.equal(cp); 		
        });
		it('has a prefix of ' + prefix + ' and a length of 18', function() {
	      expect(detectNetwork(prefix + numGen(15))).to.equal(cp); 		
        });
		it('has a prefix of ' + prefix + ' and a length of 19', function() {
	      expect(detectNetwork(prefix + numGen(16))).to.equal(cp); 		
        });
      })(prefix);		
	}; 
    //6282-6288 
	for (var prefix = 6282; prefix <= 6288; prefix++) {
	  (function(prefix) {
	    it('has a prefix of ' + prefix + ' and a length of 16', function() {
	      expect(detectNetwork(prefix + numGen(12))).to.equal(cp); 		
        });	
	    it('has a prefix of ' + prefix + ' and a length of 17', function() {
	      expect(detectNetwork(prefix + numGen(13))).to.equal(cp); 		
        });
	    it('has a prefix of ' + prefix + ' and a length of 18', function() {
	      expect(detectNetwork(prefix + numGen(14))).to.equal(cp); 		
        });
	    it('has a prefix of ' + prefix + ' and a length of 19', function() {
	      expect(detectNetwork(prefix + numGen(15))).to.equal(cp); 		
        });
      })(prefix);
	};    
});	
// ******************** SWITCH   **********************
// switch 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
describe('Switch', function() { 
   var sw = 'Switch';
   it('has a prefix of 4903 and a length of 16', function() {
	      expect(detectNetwork(4903 + numGen(12))).to.equal(sw); 		
   });	
   it('has a prefix of 4903 and a length of 18', function() {
	      expect(detectNetwork(4903 + numGen(14))).to.equal(sw); 		
   });
   it('has a prefix of 4903 and a length of 19', function() {
	      expect(detectNetwork(4903 + numGen(15))).to.equal(sw); 		
   });
   it('has a prefix of 4905 and a length of 16', function() {
	      expect(detectNetwork(4905 + numGen(12))).to.equal(sw); 		
   });	
   it('has a prefix of 4905 and a length of 18', function() {
	      expect(detectNetwork(4905 + numGen(14))).to.equal(sw); 		
   });
   it('has a prefix of 4905 and a length of 19', function() {
	      expect(detectNetwork(4905 + numGen(15))).to.equal(sw); 		
   });
   it('has a prefix of 4911 and a length of 16', function() {
	      expect(detectNetwork(4911 + numGen(12))).to.equal(sw); 		
   });  
   
   it('has a prefix of 4911 and a length of 18', function() {
	      expect(detectNetwork(4911 + numGen(14))).to.equal(sw); 		
   }); 
   it('has a prefix of 4911 and a length of 19', function() {
	      expect(detectNetwork(4911 + numGen(15))).to.equal(sw); 		
   });
   it('has a prefix of 4936 and a length of 16', function() {
	      expect(detectNetwork(4936 + numGen(12))).to.equal(sw); 		
   });	
   it('has a prefix of 4936 and a length of 18', function() {
	      expect(detectNetwork(4936 + numGen(14))).to.equal(sw); 		
   });
   it('has a prefix of 4936 and a length of 19', function() {
	      expect(detectNetwork(4936 + numGen(15))).to.equal(sw); 		
   });  
   
   it('has a prefix of 564182 and a length of 16', function() {
	      expect(detectNetwork(564182 + numGen(10))).to.equal(sw); 		
   });	
    
   it('has a prefix of 564182 and a length of 18', function() {
	      expect(detectNetwork(564182 + numGen(12))).to.equal(sw); 		
   });
   it('has a prefix of 564182 and a length of 19', function() {
	      expect(detectNetwork(564182 + numGen(13))).to.equal(sw); 		
   }); 
   
   it('has a prefix of 633110 and a length of 16', function() {
	      expect(detectNetwork(633110 + numGen(10))).to.equal(sw); 		
   });	
     
   it('has a prefix of 633110 and a length of 18', function() {
	      expect(detectNetwork(633110 + numGen(12))).to.equal(sw); 		
   });
   it('has a prefix of 633110 and a length of 19', function() {
	      expect(detectNetwork(633110 + numGen(13))).to.equal(sw); 		
   });
   
   it('has a prefix of 6333 and a length of 16', function() {
	      expect(detectNetwork(6333 + numGen(12))).to.equal(sw); 		
   });	
     
   it('has a prefix of 6333 and a length of 18', function() {
	      expect(detectNetwork(6333 + numGen(14))).to.equal(sw); 		
   });
   it('has a prefix of 6333 and a length of 19', function() {
	      expect(detectNetwork(6333 + numGen(15))).to.equal(sw); 		
   });
   
   it('has a prefix of 6759 and a length of 16', function() {
	      expect(detectNetwork(6759 + numGen(12))).to.equal(sw); 		
   });	
     
   it('has a prefix of 6759 and a length of 18', function() {
	      expect(detectNetwork(6759 + numGen(14))).to.equal(sw); 		
   });
   it('has a prefix of 6759 and a length of 19', function() {
	      expect(detectNetwork(6759 + numGen(15))).to.equal(sw); 		
   });
  
   
}); 
	
	  

