function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    p = document.getElementById("principal").value;
    
    if(principal.value < 1){
        alert("Amount has to be a positive quantity")
        principal.focus()
        return
    }
    let interest = principal.value * years.value * rate.value / 100;
    yearInFuture = new Date().getFullYear() + parseInt(years.value);
    result = document.getElementById("result")
    result.innerHTML = "<p> If you deposit <mark>"+ principal.value +"</mark>,<br>
                            an interest rate of <mark>" + rate.value + "%</mark>.<br>
                            You will receive an amount of <mark>"+interest+"</mark>,<br>
                            in the year <mark>"+yearInFuture+"</mark>
                        </p>";

    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
