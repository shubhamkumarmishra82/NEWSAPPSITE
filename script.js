const button = document.querySelectorAll("button")
const inputvalue = document.getElementById("result")
for(let i=0; i<button.length; i++){
    button[i].addEventListener("click",()=>{
              const buttonvalue = button[i].textContent
              if(buttonvalue==="C"){
                clearcal()
              }
              else if(buttonvalue==="x"){
                cutting()
              }
              else if(buttonvalue==="="){
                calculate()
              }
              else{
                appendvalue(buttonvalue)
              }
    })
    
    
}
function clearcal(){
inputvalue.value = ""
}
function calculate(){
    inputvalue.value = eval(inputvalue.value)

}

function cutting(){
     
    
 inputvalue.value = inputvalue.value.slice(0,inputvalue.value.length-1)
    }
    


    

function appendvalue(buttonvalue){
inputvalue.value +=buttonvalue
}

