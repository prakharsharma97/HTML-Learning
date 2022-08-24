//complete
function reverse(num){
    var b= 0, sum = 0;
    while(num>0)
    {
        b=num % 10;
        sum = parseInt(sum*10 +b);
        num = parseInt(num/10);
    }
    return sum;
    }

//complete
function sum(firstNum,secondNum){ 
    var add;
    add = firstNum + secondNum;
    return add;
}

//complete
function oddeven(num) {
    var num;
    if (num % 2 ) {
        num = " Number is Odd ";
    } else {
        num = " Number is Even ";
    }
    return num;
}

//complete
function factorial(num){
    var b=1;
    while (num>=1) {
        b=b*num;
        num--;
    }
    return b;
}

//complete
function prime(num) {
    var b=2;
    while (b<=num-1) {
        if (num%b==0) {
            break;
        }    
        b++;
    }
    if (b==num) {
        return true;
    } else {
        return false;
    }
}

//complete
function power(base,exponent){
    var value= 1 ;
    while ( exponent !=0 ) {
        value = value * base;
        --exponent;
    }
    return value;
}

//complete
function isPerfectNumber(num){
    var i;var sum = 0 ;
    for (i = 1; i < num ; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    if (num == sum) {
        return true;
    } 
    else {
        return false;
    }
}

//in complete
function isPalindrome(num){
    var a; var sum = 0; var c = num; 
    while (num > 0) {
        a = num % 10;
        sum = (sum * 10) + a;
        num = num / 10;
    }
    if (sum == c ) {
    return true;
    }
    else {
    return false ;
    }
}



//in complete
function isArmstrong(num){
    var r;var sum = 0; var temp;
    temp = num;
    while (num > 0) {
        r = num % 10;
        sum = sum + (r*r*r);
        num = num / 10;
    }
    if (temp == sum){
        return true;
    } 
    else {
        return false;
    }
}

//in complete
function temperature(num){
    var Celsius;
    if (Celsius = num) {
        Fahrenheit =((Celsius*9)/5)+32;
        return Fahrenheit;
    }
}

//in complete
function compinst(principle,rate,time){
    var n=12;
        var l= parseFloat(1+(rate/100));
        var i=1, c=l;  
        while(i<=time  )
        {
            c=c*l;
            i=i+1;
        }
        console.log(c);
        interest = (principle * c) - principle;
        return interest;
    }
    
    function Fibonacci(num) {
        let f=0; let s=1; let c;
        for(let i=3 ;i <= num; i++){
            c=f+s;
            //document.write(c + "<br/>")
            //document.getElementById("resultText").innerHTML = Fibonacci(num);
            //parseInt(document.getElementById("inputValue").value)
            f=s;
            s=c;
            document.write(c+ "<br>")
            
        }
    }