'use strict'

exports.isPalindrome = function (str){
	var streplace = str.replace(/[^A-Za-z0-9]/g, '')
	var reversestr = streplace.split('').reverse().join('');
				
	if (streplace.toUpperCase() === reversestr.toUpperCase()){
		return true	
	} else {
		return false
	}
}