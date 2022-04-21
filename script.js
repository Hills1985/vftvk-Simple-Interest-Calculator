

function compute()


{

    var principal = document.getElementById("principal").value;
    //define items "principal" and obtain value from ID named principal from HTML
    var rate = document.getElementById("rate").value;
    //define items "rate" and obtain value from ID named rate from HTML
    var years = document.getElementById("years").value;
    //define items "years" and obatin value from ID years from HTML
    

    var interest = principal * years * rate /100;
    //define "interest" and do maths for the interest
    var year = new Date().getFullYear()+parseInt(years);
    // define "year", obatin the current date and add up with "years"
    var amount = interest;
    // define "amount" is equal to interest
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"

}    

// function for the slider
function updateRate(onchange)
// with on change, the value will change with slider
    {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    }

function ValidationofNum()
    var x = document.getElementById("principal").value;
    if (x <= 0)
    {alert("I am an alert box!");
    }
    else{
        return;
    }

