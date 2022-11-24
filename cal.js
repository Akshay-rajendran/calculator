let main = document.querySelector(".numb")
let button = document.querySelector("button")
let screen = document.querySelector("input")
let o = document.querySelector(".childeq")
let first = 0
let second = 0
let operator
let onn = document.querySelector(".childon")

main.addEventListener("click", (e) => {

    targ = e.target
    targ.style.background = "red"
    // console.log(e.target.classList)

    if (onn.innerHTML == "off") {
        if (targ.classList.contains("numbtn")) {
            screen.value = screen.value + e.target.innerHTML
        } else {
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
                    second = parseFloat(screen.value)
                    printAnswer(first, second, operator)
                    break;
                case 'c':
                    screen.value = ""
                    break;
                case "off":
                        targ.innerHTML = "on"
                        screen.value = ""
                    screen.disabled = true


            }
        }
    }else if(targ.innerHTML == "on"){
        targ.innerHTML = "off"
        screen.disabled = ""
        screen.value = ""
    
    }
    setInterval(() => {
        targ.style.background = "buttonface"
        targ.style.border = "1px solid black"
        o.style.background = "#7beff0"

    }, 500)


})



function printAnswer(first, second, operator) {
    let result
    switch (operator) {
        case '+':
            result = first + second
            break;
        case '-':
            result = first - second
            break;
        case '/':
            result = first / second
            break;
        case '*':
            result = first * second
            break;

    }
    screen.value = result
}





