let BaseUrl=
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.2/v1/currencies";


  

let input1 = document.getElementById("input1")
let input2= document.getElementById("input2")

let select1= document.querySelector("#select1")
let select2= document.querySelector("#select2")
let img1= document.querySelector(" .left img ")
let img2= document.querySelector(".right img ")
let btn= document.querySelector(".btn")


for(code in countryList){
  let newOption= document.createElement("option")
  newOption.value=code;
  newOption.innerHTML=code;
  if(code =="USD"){
    newOption.selected="selected";
  }
  select1.append(newOption);
}


for(code in countryList){
        let newOption= document.createElement("option")
        newOption.value=code;
        newOption.innerHTML=code;
        
        if(code =="INR"){
          newOption.selected="selected";
        }
        select2.append(newOption);
        

     }

const updateImage = ()=>{
  let data1 = select1.value
  let imgvalue = countryList[data1];
     
  let newSrc= `https://flagsapi.com/${imgvalue}/flat/48.png`;
  img1.src= newSrc;
}


const updateImg = ()=>{
  let data2 = select2.value
  let imgvalue = countryList[data2]
  let newSrc= `https://flagsapi.com/${imgvalue}/flat/64.png`
  img2.src = newSrc;
}
       


 

    const calculateRate = async ()=>{

      let data1 = select1.value.toLowerCase();
      let data2 = select2.value.toLowerCase();
      
      let Url=`${BaseUrl}/${data1}.json`
      
      let response= await fetch(Url);
      let rate= await response.json();
         let rate1= rate[data1]

      console.log(rate1[data2]);
       let num= input1.value;
       let price=  num*rate1[data2];
       input2.value= price;
       
    }
    
    select1.addEventListener("change",()=>{
        updateImage();
    })
   
    select2.addEventListener("change",()=>{
     updateImg();
   })

  btn.addEventListener("click", ()=>{
      calculateRate();
      
   })

         
