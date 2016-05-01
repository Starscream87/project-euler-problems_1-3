/* Select a problem will be completed at a later time
$(document).ready(function() {
	$('.navList').on('click', function() {
		$(this).toggleClass('highlight');
		$('#problem_1').toggle();
	});
});*/


// Problem 1 Multiples of 3 and 5
var answer_1 = function ans1() {
var prob1Input = document.getElementById("multiplesInput").value,
	i = 0, sum = 0;
	for(i ; i < prob1Input; i++) {
		if((i % 3 === 0) || (i % 5 === 0)){
			sum += i;
		}	
	}
document.getElementById("answer_1").innerHTML = sum;
};
document.getElementById("multiples").addEventListener("click", answer_1);

//Problem 2 Even Fibonacci numbers
var answer_2 = function ans2() {
var prob2Input = document.getElementById("fibonacciInput").value,
	num1 = 1, num2 = 1, num3 = 0, evenSum = 0;
	if (prob2Input < 2) {
		alert("Please enter a number greater than 2")
	}
	while (num3 < prob2Input) {
		if (num3 % 2 === 0){
			evenSum += num3;
		}
		num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
	}
	document.getElementById("answer_2").innerHTML = evenSum;
};
document.getElementById("fibonacci").addEventListener("click", answer_2);

//Problem 3 Largest Prime Factor
var answer_3 = function largestPF() {
	var n = document.getElementById("primeFactorInput").value;
	var divisor = 2;
	while (n > divisor) {
		if(n % divisor == 0){
			n = n / divisor;
			divisor = 2;
		} else {
			divisor += 1;
		}
	}
	document.getElementById("answer_3").innerHTML = n;
};
document.getElementById("largestPF").addEventListener("click", answer_3);

// Inefficient way to find prime factor of X
/*var n = document.getElementById("primeFactorInput").value, 
	x = 3, j, i = 2, primeFactor = [], isPrime;
  for (x; x < n; x += 2) {
    isPrime = true;
    j = Math.sqrt(x);
    for (i = 2; i <= j; i++) {
      if (x % i == 0) {
        isPrime = false;
        break;
      }
    }
    if ((isPrime) && (n % x == 0)) {
      primeFactor.push(x);
    }
  }
  if (primeFactor == 0){
	  alert(n + " is a prime factor of itself.")
  } else {
	document.getElementById("answer_3").innerHTML = primeFactor.pop();
	}
};*/

//Problem 4 Largest Palindrome Product
//test to see if value is a palindrome (same forward and backwards)
function palindrome(product) {
	var reverseStr = '';		
	
	//convert number to string
	var str = product.toString(); 
	
	var i = str.length;
	for (var j = i; j >= 0; j--) {
	reverseStr = reverseStr + str.charAt(j);
	}
	if(str == reverseStr){
		return str;
	} else {
		return false;
	}
}
var constantNum = 999;
var changeNum = 999;
var prod = constantNum * changeNum; 

while (palindrome(prod) === false) {
	changeNum--;
	prod = constantNum * changeNum;
	if (changeNum <100) {
		constantNum--;
		changeNum = 999;
	}
}
console.log(constantNum + ' * ' + changeNum + ' produce the \
largest palindrome by two 3-digit numbers, which is ' + palindrome(prod));









