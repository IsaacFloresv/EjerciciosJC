function fizzBuzz() {  
	// Your code here
	var i = 0;
	while(i < 100){
	 i++;
		if((i%3 == 0) && (i%5 == 0)){
			console.log('FizzBuzz')
		}else if(i%5 == 0){
			console.log('Buzz')
		}else if(i%3 == 0){
			console.log('Fizz')
		}else{
			console.log(i)
		}
	}
}

fizzBuzz();