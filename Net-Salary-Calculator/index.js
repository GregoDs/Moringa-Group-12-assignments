const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click',function(event){

    event.preventDefault();

    console.log('Button Clicked');

const grossSalaryBox = document.getElementById('grossSalaryBox').value;
const grossSalaryResult = grossSalaryBox;

    //output the value
    document.getElementById('grossSalaryResult').textContent = grossSalaryResult;
   
    // console.log(grossSalaryResult);

    const slab1 = 24000;
    const slab2 = 32333;
    const slab3 = 500000;
    const slab4 = 800000;
    const slab5 = 800001;

    const slabs = [slab1,slab2,slab3,slab4,slab5];
    const rates=[0.1,0.25,0.3,0.325,0.35];

    //console.log(slabs);
    //calculate tax based on income and slabs
    
       
                
    if (grossSalaryResult <= slab1) {
        Payee1 = grossSalaryResult * 0.1;
        incomeTax = Payee1;
        // console.log(incomeTax);
        //document.getElementById('payeResult').innerHTML = Payee;
    } else if (grossSalaryResult <= slab2 - 1) {
        // Calculate Payee2 without the additional inner condition
        Payee2 =  (grossSalaryResult - slab1) * 0.25;
        console.log(Payee2);
        
        }else if (grossSalaryResult <= (slab3 -1 )){
            if(grossSalaryResult > slab2){
                Payee3 = (grossSalaryResult - slab2)* 0.30 ;
                console.log(Payee3);
                incomeTax = (Payee3 + Payee2 +Payee1)
                    console.log(incomeTax); }

        }else if (grossSalaryResult <= (slab4 -1)){
            if(grossSalaryResult > slab3){
                Payee4 = (grossSalaryResult - slab3) * 0.325 ;
                console.log(Payee4); }
        }
        else{          
            Payee5 = grossSalaryResult * 0.35;
            console.log(Payee5);
        }
    
    
})
