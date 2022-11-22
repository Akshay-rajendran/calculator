let main=document.querySelector(".numb")
let screen=document.querySelector("input")

main.addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    screen.value= screen.value+e.target.innerHTML
})