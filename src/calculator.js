const allBtn = document.querySelectorAll(".btn")

const operation = document.getElementById("operation")
const result = document.getElementById("result")

let prevValue = '';
let operator = '';
let nextValue = '';


function updateOperation(){
    operation.textContent = prevValue + operator + nextValue;
}
function updateResult(){
    result.innerText=nextValue
}


for (const btn of allBtn) {
    btn.addEventListener("click", (e) => {
        const value = e.target.dataset.value;
        if (!isNaN(value)) {
            nextValue = nextValue + value
            updateOperation()
            return
        }
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value
            prevValue = nextValue
            nextValue = ''
            updateOperation()
            return
        }

        else if (value === '=') {
            const numPrevV = Number(prevValue)
            const numNextV = Number(nextValue)

            let result;

            if (operator === "+") {
                const addition = numPrevV + numNextV;
                result = addition
            }
            else if (operator === '-') {
                const diffrence = numPrevV - numNextV;
                result = diffrence
            }
            else if (operator === '/') {
                const division = numPrevV / numNextV;
                result = division
            }
            else if (operator === '*') {
                const multiply = numPrevV * numNextV
                result = multiply
            }

            else {
                alert("Error")
                return
            }

            nextValue = String(result)
            operator = ''
            prevValue = ''
            updateResult()
        }

        else if (value === "C" || value === "AC") {
        }
    })

}


