let btn1=document.getElementById("btn1")

let cont=document.getElementsByClassName("container")[0]
let col=document.getElementsByClassName("color")[0]
const color=["red","green","black","purple"]
let main=["#"]
let number=[1,2,3,4,0,5,6,7,8,9,"A","B","C","D","E","F"]
btn1.addEventListener("click",function(){
   let choosedcolor=color[Math.floor(Math.random()*color.length)]
   let y=["#"]
  let x=  number.sort((a,b) =>.5-Math.random());
  
  let comb=y.concat(x).slice(0,7)
  let z=comb.join("")

cont.style.background=z
    col.innerHTML=z
  
    
    

})