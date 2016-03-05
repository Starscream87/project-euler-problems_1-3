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
}

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
var n = document.getElementById("primeFactorInput").value, 
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
};
document.getElementById("largestPF").addEventListener("click", answer_3);



// Select a problem
/*var problems = document.getElementById("problems");
var items = problems.querySelectorAll("span");


for (var i = 0; i < items.length; i++) {
	items[i].addEventListener('click', selectProblem);
}

function selectProblem(){
	var current = this.id;
	var index = current.split("_")[1];
	for (var i = 0; i < items.length; i++){
		if (items[i].classList.contains("selected")){
			items[i].classList.remove("selected");
		} 
		document.getElementById("problem_" + (i + 1).style.display = "none";
	}
	document.getElementById(current).className = "selected";
	document.getElementById("problem_" + index).style.display = "block";
}*/























