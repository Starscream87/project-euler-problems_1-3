// Problem 1 Multiples of 3 and 5
/*var answer_1 = function ans1() {
var sum = 0;
var i = 0;
	for(i ; i < 1000; i++) {
		if((i % 3 === 0) || (i % 5 === 0)){
			sum += i;
		}	
	}
document.getElementById("answer_1").innerHTML = sum;
}

document.getElementById("bttn").addEventListener("click", answer_1);

//Problem 2 Even Fibonacci numbers
var answer_2 = function ans2() {
var num1 = 1;
var num2 = 2;
var num3 = num1 + num2;
var evenSum = 0;
	while (num1 < 4000000) {
		num1 = num2 ;
		num2 = num3 ;
		num3 = num1  + num2;
		console.log(num1);
		if (num1 % 2 === 0){
			evenSum += num1;
		}
	}
	document.getElementById("answer_2").innerHTML = evenSum;
	};
document.getElementById("bttn").addEventListener("click", answer_2);*/

//Problem 3 Largest Prime Factor
var answer_3 = function largestPF() {
  var n = 13195, x = 3,
    j, i = 2,
    primeFactor = [],
	isPrime;
  for (x; x <= n; x += 2) {
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
  document.getElementById("answer_3").innerHTML = primeFactor.pop();
};
document.getElementById("bttn").addEventListener("click", answer_3);



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























