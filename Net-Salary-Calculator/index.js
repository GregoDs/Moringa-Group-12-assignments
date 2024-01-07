const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click',function(){

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
    let  tax=0;
    
    for(let i=1; i < slabs.length; i++){

        const lowerLimit = i === 0 ? 0 : slabs[i - 1];
        const upperLimit = slabs[i];
        const rate = rates[i];
        const lowerLimitTax = (lowerLimit)*rate;
        let  tax = ((upperLimit - lowerLimit) * rate) + lowerLimitTax;

        if (grossSalaryResult <= lowerLimit){
            break;
        } else if (grossSalaryResult <= upperLimit) {
            tax = ((upperLimit - lowerLimit) * rate) + lowerLimitTax;

            console.log(lowerLimit);
            break;
        } else {
            tax = ((upperLimit - lowerLimit) * rate) + lowerLimitTax;
        
        }
        
    }
    const taxDue = tax;
    console.log(`Tax due: ${taxDue}`);
})
