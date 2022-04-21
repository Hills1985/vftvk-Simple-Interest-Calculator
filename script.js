

function compute(){
    var principal = parseFloat(document.getElementById("principal").value);  
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var maturitydate = new Date().getFullYear() + years;
    
    
    document.getElementById("result").innerHTML=   "If you deposit <mark>" + principal + "</mark>,\<br\>
                                                     at an interest rate of <mark>" + rate + "</mark>%,\<br\>
                                                     You will receive an amount of <mark> "+ interest +" </mark>,\<br\>
                                                     in the year "+ maturitydate +"\<br\>"    
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
