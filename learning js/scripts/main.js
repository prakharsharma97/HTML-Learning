//complete
function findReverse() {
    var num = parseInt(document.getElementById("inputValue").value);
    var result = reverse(num);
    document.getElementById("resultText").value = result;
}

//complete
function addsum() {
    var firstNum = parseInt(document.getElementById("firstValue").value);
    var secondNum = parseInt(document.getElementById("secondValue").value);
    var result = sum(firstNum, secondNum);
    document.getElementById("resultText").value = result;
}

//complete
function checkOddEven (){
    var num = parseInt(document.getElementById("inputvalue").value);
    var result = oddeven(num);
    document.getElementById("resultText").value = result;
}

//complete
function calculatefactorial() {
    var num = parseInt(document.getElementById("inputvalue").value);
    var result = factorial(num);
    document.getElementById("resultText").value = result;
}

//complete
function calculatePrime(){
    var num = parseInt(document.getElementById("inputvalue").value);
    var result = prime(num);
    document.getElementById("resultText").value = result;
}

//complete
function primebetween(){
    var start = parseInt(document.getElementById("firstValue").value);
    var end = parseInt(document.getElementById("secondValue").value);
    var result = '';
    var i = start;
    while(i <= end)
    {
        
        if (prime(i) === true)
        {
            result = result + ' ' + i;
        }
        i=i+1;
    }
    console.log(result);
    document.getElementById("resultText").innerHTML = result;
}

//complete
function checkExponential(){
    var base = parseInt(document.getElementById("baseValue").value);
    var exponent = parseInt(document.getElementById("exponentValue").value);
    var result = power(base,exponent);
    document.getElementById("resultText").value = result;
}

function compoundinterest(){
    var firstNum = parseFloat(document.getElementById("firstValue").value);
    var secondNum = parseFloat(document.getElementById("secondValue").value);
    var thirdNum = parseInt(document.getElementById("thirdValue").value);
    var result = compinst(principle,rate,time);
    document.getElementById("resultText").value = result;
}

function checkPalindrome(){
    var num = parseInt(document.getElementById("inputvalue").value);
    var result = isPalindrome(num);
    document.getElementById("resultText").value = result === true ? "it is a Palindrome Number" : "Not a Palindrome Number" ;
};

//complete
function checkPerfect(){
    var num = parseInt(document.getElementById("inputvalue").value);
    var result = isPerfectNumber(num);
    document.getElementById("resultText").value = result == true ? "it is a Perfect Number" : "Not a Perfect Number" ;
}

function checkArmstrong(){
    var num = parseInt(document.getElementById("inputvalue").value);
    var result = isArmstrong(num);
    document.getElementById("resultText").value = result === true ? "it is a Armstrong Number" : "Not a Armstrong Number" ;
}

//complete 
function convertTemperature(){
    var num = parseInt(document.getElementById("inputValue").value);
    var result = temperature(num);
    document.getElementById("resultText").value = result;
}

function checkFibonacci(){
    var num = parseInt(document.getElementById("inputValue").value);
    var result = Fibonacci(num);
    document.getElementById("resultText").value = result;
}