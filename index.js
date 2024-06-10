const displayCelcius=document.getElementById("celcius");
const displayFarenheit=document.getElementById("farenheit");
const displayModal=document.getElementById("modal");



const calcFarenheit=(celc)=>{
  if(!isNaN(celc)&&celc.trim()!==''){  
    displayFarenheit.value=Math.round((celc*9/5)+32);
    if(celc===0){
        displayFarenheit.value='';
    }
  }else {
    displayCelcius.value='';
    displayFarenheit.value='';
    displayModal.style.display="flex";
  }
}


displayCelcius.addEventListener('input',()=>{
    const celc=displayCelcius.value;
    calcFarenheit(celc);
});


const calcCelcius=(farenheit)=>{
   if(!isNaN(displayFarenheit.value)&&farenheit.trim()!==''){
        displayCelcius.value=Math.round((farenheit-32)*5/9);
        if(farenheit===0){
         displayCelcius.value='';
        }
    }else{  
        displayCelcius.value='';
        displayFarenheit.value='';
        displayModal.style.display="flex";
    }
 }

 displayFarenheit.addEventListener('input',()=>{
    const farenheit=displayFarenheit.value;
    calcCelcius(farenheit);
});

const closeModal=()=>{
    displayModal.style.display='none';
}