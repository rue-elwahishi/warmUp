//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset ( array1, array2) {
 

    for(var i = 0; i < array1.length; i++ ) {
 		for (var j = 0; j < array2.length; j++){
              array1.slice(1)
            if (array2[j] === array1[i]) {

 				return true
 			}
 			else  {
 				return false
 			}
 		}
 	}
 }
