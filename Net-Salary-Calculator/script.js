
$( function() {
    
    //viewItem();
$("#calculateButton").click(function(e) 
{
    e.preventDefault();
    var Payee=0;
    var nssf=0;
    var netsalary = grossSalary - totalDeductions;
    var totalDeductions=0;
    totalDeductions = parseInt(nssf + nhif + Payee);
    var nhif=0;
    var grossSalary= $('#grossSalaryBox').val();
    if (grossSalary <= 24000) {
        Payee = grossSalary * 10/100;
        //document.getElementById('payeResult').innerHTML = Payee;
    }
    else if (grossSalary > 24000 && grossSalary <= 32333 ){
        Payee = grossSalary * 25/100;
    }
    else if(grossSalary > 32333 && grossSalary <= 500000){
        Payee = grossSalary * 30/100;
    }
    else if(grossSalary > 500000 && grossSalary <= 800000){
        Payee = grossSalary * 32.5/100;
    }
    else{
        Payee = grossSalary * 35/100;
    }
    //nhif rates
    if (grossSalary <= 5999) {
        nhif= 150;
    }
    
    document.getElementById('grossSalaryResult').innerHTML = grossSalary;
    document.getElementById('payeResult').innerHTML = Payee;
    document.getElementById('NhifResult').innerHTML = nhif;
    document.getElementById('totalDeductions').innerHTML = totalDeductions;
    document.getElementById('netSalaryResult').innerHTML = netsalary;
    

});


});