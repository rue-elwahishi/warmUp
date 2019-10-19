// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
	function reverseStr(string) { 

		var result = 0;
		result = string.length; 
	
		while ( result < string.length) {
			result++;
			result = reverse(string) + result;


		}

		return result;

	}



// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
	function SameLength (array) {
		var newArr = [];
		for (var = 0; i < array.length; i++){

			if (arrray[i].length === array[i].length){
				return newArr.push(array[i]);
			}
		}

		 return newArr;
	}
	