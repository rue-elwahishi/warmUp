/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */ function mysteryRange(inputString, number) {
         var arr = inputString.split('')
         var x = 1
         for (var i = 0; number !== arr.length; i++) {
          if (arr[i] == x) {
            y = (x + arr[i+1])
               arr.splice(i, 2, y)
      
             }
          if (i === arr.length-1){
            i = 0;
            x++;
          }
          var mappedArr = arr.map(function (element){
            return Number(element)
          })
          var max = mappedArr[0];
          var min = mappedArr[0];
          for(var j = 0; j < mappedArr.length-1 ; j++) {
            if ( max < mappedArr[j]) {
              max = mappedArr[j];
            }
            if (min > mappedArr[j]) {
              min = mappedArr[j];
            }
          }

        

         }
        return [min, max];

 }