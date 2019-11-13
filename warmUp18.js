// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function charOccurence(string){
      var str = '';
	  var count = [];
	  for(var j = 0; j <=26; j++)
	  	count.push(1)

	  var keys = string.split('');
	for(var i = 0; i < string.length; i++){
		str = str + count[keys.indexOf(string[i])]++
		
	}

return str;

}
