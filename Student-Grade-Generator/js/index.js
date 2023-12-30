//button event listener and user input value
const submitbtn = document.getElementById('submitBtn');
submitbtn.addEventListener('click',function(){

   
    
    const name = document.getElementById('studentsNameBox').value;
    const gradebox = document.getElementById('studentsGradeBox').value;



    console.log('Button Clicked');
    console.log(name);

   
    //display the users input
    document.getElementById('outputName').textContent = name;

    //Grade Assignment
    if(gradebox >= 101){
    document.getElementById('outputGrade').textContent =  "Sorry Your Grade input is above the possible 100 mark";
    }else if(gradebox <= 100 && gradebox >= 79 ){
        document.getElementById('outputGrade').textContent = "Grade A";
        document.getElementById('congratulationsBox').textContent = 'Congratulations';
    

    }else if(gradebox >= 60 && gradebox <= 78){
        document.getElementById("outputGrade").textContent = "Grade B";
    }else if(gradebox >= 49 && gradebox <= 59){
        document.getElementById('outputGrade').textContent = "Grade C";
    }else if(gradebox >= 40 && gradebox <= 48 ){
        document.getElementById('outputGrade').textContent = "Grade D";
    }else if(gradebox <= 39){
        document.getElementById('outputGrade').textContent = "Grade E";
    }
});


//image js function
const img = document.createElement("img");
img.src="data:image/jpeg;base64,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";


let form =  document.getElementById("studentsDetailsWindow");
let h1 = form.querySelector("h1");
//Insert the img element before the h1 tag
form.insertBefore(img,h1);