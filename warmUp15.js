// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"

//
//
// Note : you can`t use any built-in functions .

function reverseStr(string){
	var str = ' '
	var arr = [];
	string.split(" ")
	for ( var i = string.length -1; i >= 0; i--){
           arr.push(string[i])
            
          


	}

  return arr.join('');
}