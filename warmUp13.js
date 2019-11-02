/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 

    v
    

    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/


//another solution with array

var numbers = [1, 5, 10, 50, 100, 500, 1000]
var letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
//they have the same index

function romanNumbers(string) {
    string.split('') 
    var arr = [];
    for (var x = 0; x < string.length; x++){
 
             console.log(string[x], letters[x])
             for(var j = 0; j < letters.length; j++){
                        if (string[x] === letters[j]) {
                 for(var i = 0; i < numbers.length; i++) {
                     if (i === j) {
                        arr.push(numbers[i])

                     }
                 }
  } 
             
            }       
    }

    for (var u = 0; u < arr.length; u++) {
        if (arr[u] < arr[u+1]){

            arr.splice(u, 1, arr[u] * -1)
        }
    }
     return arr.reduce(function(element, acc) {
           return acc += element

     }, 0)

     
        }

 function toCamelCase(sentence) {
   var arr = sentence.split('')
    for ( var y = 0; y < arr.length; y++){
        if (arr[y] === "-" || arr[y] === "_"){
            arr.splice(y, 1, arr[y + 1].toUpperCase())
        }

    }
    return arr.join('');
 }



 function filter_list(array) {
    return array.filter(function(element){
        return typeof element === 'number'
    })
 }



