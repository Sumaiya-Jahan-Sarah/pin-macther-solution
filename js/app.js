function getPin() {
    const pin = generatePin()
    const pinString = pin + ''

    if (pinString.length === 4) {
        return pin
    }

    else {

        return getPin()
    }

}



function generatePin() {
    const random = Math.round(Math.random() * 10000)


    return random
}


document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin()


    const inputField = document.getElementById('input-pin')
    inputField.value = pin
})




// calculator


document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText
    const typedNumber = document.getElementById('typed-number')
    const previousNumber = typedNumber.value
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumber.value = ' '
        }
        else {
            const digit = previousNumber.split('')
            digit.pop()
            const remain = digit.join('')
            typedNumber.value = remain

        }

    }
    else {


        const currentValue = previousNumber + number
        typedNumber.value = currentValue

    }

})


document.getElementById('verify-btn').addEventListener('click', function () {
    const typedNumberField = document.getElementById('typed-number')
    const typedNumber = typedNumberField.value

    const displayField = document.getElementById('input-pin')
    const display = displayField.value


    const pinSuccess = document.getElementById('pin-success')
    const pinFailure = document.getElementById('pin-failure')
    if (typedNumber === display) {

        pinSuccess.style.display = 'block'
        pinFailure.style.display = 'none'

    }
    else {
        pinFailure.style.display = 'block'
        pinSuccess.style.display = 'none'

    }
    typedNumber.value = ' '

})
