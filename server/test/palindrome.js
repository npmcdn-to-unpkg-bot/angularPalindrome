'use strict'

var expect    = require("chai").expect;
var pali = require("../palindrome");

describe("Test Palindrome", function() {
    describe("Test Palindrome 'aba'", function() {
        it("Check string 'aba' is a Palindrome", function() {
            var res =  pali.isPalindrome('aba');
            expect(res).to.equal(true);   
        });
        
        it("Check string 'aba' wich space is a Palindrome", function() {
            var res =  pali.isPalindrome('a  b  a');
            expect(res).to.equal(true);   
        });
        
        it("Check string 'a man a plan a canal panama' is a Palindrome", function() {
            var res =  pali.isPalindrome('a man a plan a canal panama');
            expect(res).to.equal(true);   
        });
        
          it("Check string 'A man A plAn a canal panama' wich words upercase is a Palindrome", function() {
            var res =  pali.isPalindrome('A man A plAn a canal panama');
            expect(res).to.equal(true);   
        });
    });
   
describe("Test is not a palindrome", function() {
     it("Check string 'macaco' is not a Palindrome", function() {
        var res =  pali.isPalindrome('macaco');
        expect(res).to.equal(false); 
    });
    it("Check string 'm  a ca c o ' wich space is not a Palindrome", function() {
        var res =  pali.isPalindrome('m  a ca c o ');
        expect(res).to.equal(false); 
    });
   
  });
});