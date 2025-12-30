const allBtn = document.querySelectorAll(".btn")

const operation = document.getElementById("operation")
const result = document.getElementById("result")

let prevValue = '';
let operator = '';
let nextValue = '';


function updateOperation() {
    operation.textContent = prevValue + operator + nextValue;
}
function updateResult() {
    result.innerText = nextValue
}
function clearAll() {
    prevValue = '';
    operator = '';
    nextValue = '';
    operation.textContent = 0;
    result.textContent = 0
}


for (const btn of allBtn) {
    btn.addEventListener("click", (e) => {

        btn.classList.add("active")
        setTimeout(function () {
            btn.classList.remove("active")
        }, 150)

        const value = e.target.dataset.value;
        if (!isNaN(value)) {
            nextValue = nextValue + value
            updateOperation()
            return
        }

        else if (value === '.') {
            if (nextValue.includes(value)) {
                return
            }
            nextValue += value
            updateOperation()
            return
        }


        else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
            if (nextValue === '' && prevValue !== '') {
                operator = value
                updateOperation()
                return
            }
            if (nextValue !== '') {
                operator = value
                prevValue = nextValue
                nextValue = ''
                updateOperation()
                return
            }
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
                if (numNextV === 0) {
                    alert("Num can't divided by 0")
                    return
                }
                const division = numPrevV / numNextV;
                result = division
            }

            else if (operator === '*') {
                const multiply = numPrevV * numNextV
                result = multiply
            }

            else if (operator === '%') {
                const num = prevValue * nextValue;
                const parcenteg = num / 100;
                result = parcenteg
            }

            else {
                return
            }

            nextValue = String(result)
            operator = ''
            prevValue = ''
            updateResult()
            return
        }

        else if (value === "AC") {
            clearAll()
        }

        else if (value === 'C') {
            if (nextValue !== '') {
                nextValue = nextValue.slice(0, -1)
            }
            else if (operator !== '') {
                operator = operator.slice(0, -1)
            }
            else if (prevValue !== '') {
                prevValue = prevValue.slice(0, -1)
            }
            updateOperation()

            if (nextValue === '' && operator === '' && prevValue === '') {
                operation.textContent = '0'
            }
        }

    })

}


