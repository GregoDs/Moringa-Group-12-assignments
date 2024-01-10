const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click',function(event){

    event.preventDefault();

    console.log('Button Clicked');

const grossSalaryBox = parseFloat(document.getElementById('grossSalaryBox').value).toFixed(2);
const grossSalaryResult = grossSalaryBox;
let contributionBenefit = parseFloat(document.getElementById("contributionBenefit").value).toFixed(2);
let personalRelief = 2400;
personalRelief = personalRelief.toFixed(2);
let taxablePayResult = (grossSalaryResult - contributionBenefit).toFixed(2);
let tax = 0;


    //output the grossSalaryResult value
    document.getElementById('grossSalaryResult').textContent = grossSalaryResult;
    document.getElementById('contributionBenefitResult').textContent = contributionBenefit;
    document.getElementById('taxablePayResult').textContent = taxablePayResult;

const taxableIncome = grossSalaryResult - contributionBenefit;
 //console.log("Taxable Income is " + taxableIncome);

//Tax Bands as Per KRA 2023-2024 Fiscal Year Model
    const slab1 = 24000;
    const slab2 = 32333;
    const slab3 = 500000;
    const slab4 = 800000;
    const slab5 = 800001;

    const slabs = [slab1,slab2,slab3,slab4,slab5];
    const rates=[0.1,0.25,0.3,0.325,0.35];


    //console.log(slabs);
    //calculate tax based on income and slabs
    
       //2083.25 + 2400 + 140300.1 + 97500= 242283.2
                
    if (taxableIncome < slab1-1 ) {
        Payee1 = taxableIncome * 0.1;
        console.log(Payee1);
        document.getElementById('payeResult').textContent = Payee1.toFixed(2);
        personalRelief = 0;
        incomeTax= Payee1.toFixed(2);
        tax=Payee1;
       
    } else if (taxableIncome <= slab2 - 1) {
        // Calculate Payee2 without the additional inner condition
        Payee =  (taxableIncome - slab1) * 0.25;
        incomeTax = (Payee + (slab1 * 0.10)).toFixed(2);
        console.log("income Tax is " + incomeTax);
        Payee2 = incomeTax - personalRelief;
        (document.getElementById('payeResult').textContent) = Payee2.toFixed(2); 
        tax=Payee2;
       
     }else if (taxableIncome <= (slab3 -1 )){
           Payee = (taxableIncome - slab2) * 0.30;
          // console.log(Payee);
           Payee2 = ((slab2-slab1)*0.25 + (slab1*0.10))
           console.log(Payee2);
           incomeTax = (Payee + Payee2).toFixed(2);
           console.log("income Tax is " + incomeTax);
           Payee3 = incomeTax - personalRelief;
           (document.getElementById('payeResult').textContent) = Payee3.toFixed(2);
           tax=Payee3;

        }else if (taxableIncome <= (slab4)){
           Payee = (taxableIncome - slab3) * 0.325;
           Payee3 = ((slab3-slab2) * 0.30 + (slab2-slab1) * 0.25 + (slab1) * 0.1);
           incomeTax = (Payee + Payee3).toFixed(2);
           console.log("income Tax is " + incomeTax);
           Payee4 = incomeTax - personalRelief;
           (document.getElementById('payeResult').textContent) = Payee4.toFixed(2);
           tax=Payee4;

        }
        else if(taxableIncome >= slab5){
            Payee = (taxableIncome - slab4)* 0.35 ;
            Payee5 = ((slab4-slab3)* 0.325 + (slab3 -slab2)* 0.30 + (slab2 - slab1)* 0.25 + (slab1)* 0.1);
            incomeTax = (Payee5 + Payee).toFixed(2);
            console.log("income Tax is " + incomeTax);
           Payee5 = incomeTax - personalRelief;
           (document.getElementById('payeResult').textContent) = Payee5.toFixed(2);
           tax=Payee5;
           
        }

         //NHIF rates in effect from 1 April 2015:
    if (grossSalaryResult <= 5999) {
        nhif= 150;
    }else if(grossSalaryResult  <= 7999){
        nhif= 300;
    } else if(grossSalaryResult  <= 11999){
        nhif= 400;
    } else if( grossSalaryResult <= 14999){
        nhif= 500;
    } else if(grossSalaryResult <= 19999){
        nhif= 600;
    }else if(grossSalaryResult <= 24999){
        nhif= 750;
    }else if(grossSalaryResult <= 29999){
        nhif= 850;
    }else if(grossSalaryResult  <= 34999){
        nhif= 900;
    }else if(grossSalaryResult  <= 39999){
        nhif= 950;
    }else if(grossSalaryResult <= 44999){
        nhif= 1000;
    }else if(grossSalaryResult  <= 49999){
        nhif= 1100;
    }else if(grossSalaryResult  <= 59999){
        nhif= 1200;
    }else if(grossSalaryResult <= 69999){
        nhif= 1300;
    }  else if(grossSalaryResult  <= 79999){
        nhif= 1400;
    } else if(grossSalaryResult <= 89999){
        nhif= 1500;
    }else if(grossSalaryResult  <= 99999){
        nhif= 1600;
    }else{
        nhif= 1700;
    }
        
 //nssf calculations
 nssf = grossSalaryResult * 6/100;
console.log('nssf' + nssf);
console.log('nhif  ' + nhif);
console.log('PAYE is ' + tax);
totalDeductions = (tax + nhif+nssf).toFixed(2);
netSalary =  (taxableIncome - totalDeductions).toFixed(2);
          //output the values

    document.getElementById('incomeTax').textContent = incomeTax;
    document.getElementById("personalRelief").textContent = personalRelief;
    document.getElementById("grossSalary").textContent = grossSalaryResult;
    document.getElementById("totalDeductions").textContent = totalDeductions;
    document.getElementById("taxablePay").textContent = taxableIncome;
    document.getElementById("nhifResult").textContent = nhif;
    document.getElementById("nssfResult").textContent = nssf;
    document.getElementById("netSalaryResult").textContent = netSalary;
    document.getElementById("allowableDeductions").textContent = totalDeductions;
    





})
