let main = document.querySelector(".numb")
let button = document.querySelector("button")
let screen = document.querySelector("input")
let first = 0
let second = 0
let operator

main.addEventListener("click", (e) => {
    targ = e.target
    console.log(targ.style.background )
    targ.style.background = "red"
    // console.log(e.target.classList)
    if (targ.classList.contains("numbtn")) {
        screen.value = screen.value + e.target.innerHTML
    }
    
    else {
        switch (targ.innerHTML) {
            case '+':
            case '-':
            case '/':
            case '*':
                first = parseFloat(screen.value)
                operator = targ.innerHTML
                screen.value = ""
                break;
            case '=':
                console.log(first, operator);
                second=parseFloat(screen.value)
                printAnswer(first,second,operator)
                break;
            case'c':
                screen.value=""    
        }


    }
    setInterval(()=>{
        targ.style.background = "buttonface"
        targ.style.border="1px solid black"
    
    },500)

    
})



function printAnswer(first,second,operator){
    let result
    switch(operator){
        case'+':
          result=first+second
          break;
        case'-':
           result=first-second
           break;
        case'/':
           result=first/second
           break;
        case'*':
           result=first*second
           break;       

    }
   screen.value=result
}