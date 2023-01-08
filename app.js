const form = document.querySelector('.form')
const input = document.querySelectorAll('input')
const cardName = document.querySelector('.name')
const cardNumber = document.querySelector('.card-number')
const info = document.querySelector(".info")
const cardNameInput = document.getElementById('card-name')
const cardNumberInput = document.getElementById('card-number')
const mmInput = document.getElementById('mm')
const yyInput = document.getElementById('yy')
const cvcInput = document.getElementById('cvc')
const mmText = document.getElementById('mmText')
const yyText = document.getElementById('yyText')
const cvcText = document.getElementById('cvcText')


//Name
cardNameInput.onkeyup = function () {
    if (cardNameInput.value !== "") {
      cardName.innerHTML = cardNameInput.value;
    } else {
      cardName.innerHTML = "Jane Appleseed";
    }
};

//Number
cardNumberInput.onkeyup = function () {
    if (cardNumberInput.value !== "") {
        const cardNumValue = cardNumberInput.value;
        cardNumber.innerText = format(cardNumValue)
    } else {
      cardNumber.innerText = "0000 0000 0000 0000";
    }
};

//Card number split
function format(num) {
    return num.toString().replace(/\d{4}(?=.)/g, '$& ');
}

//MM AND YY
mmInput.onkeyup = function() {
    if(mmInput.value !== ''){
        mmText.innerText = mmInput.value
    }
    else {
        mmText.innerText = '00'
    }
}
yyInput.onkeyup = function() {
    if(yyInput.value !== ''){
        yyText.innerText = yyInput.value
    }
    else {
        yyText.innerText = '00'
    }
}

//CVC
cvcInput.onkeyup = function() {
    if(cvcInput.value !== ''){
        cvcText.innerText = cvcInput.value
    }
    else {
        cvcText.innerText = '000'
    }
}

const labelYyAndMm = document.querySelector('.labelyy')
const formContainer = document.querySelector('.form-wrapper')
const cardThanksContainer = document.querySelector('.card-thanks')
const body = document.querySelector('body')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let wrong = false

    //Card Name Error
    if (/\S+/gi.test(cardNameInput.value) == false) {
        cardNameInput.parentElement.nextElementSibling.innerText = 'Can`t be blank'
        cardNameInput.style.border = "2px solid rgba(255, 0, 0, 0.3)";
      } else {
        cardNameInput.parentElement.nextElementSibling.innerText = ''
        cardNameInput.style.border = "2px solid hsl(270, 3%, 87%)";
      }

      //Card Number Error
        if (/\d{16}/gi.test(cardNumberInput.value) == false) {
        cardNumberInput.parentElement.nextElementSibling.innerText = 'Can`t be blank'
        cardNumberInput.style.border = "2px solid rgba(255, 0, 0, 0.3)";
      } else {
        cardNumberInput.parentElement.nextElementSibling.innerText = ''
        cardNumberInput.style.border = "2px solid hsl(270, 3%, 87%)";
      }
      
      
      //Date Error 
      if (
        /\d{2}/gi.test(mmInput.value) == false ||
        /\d{2}/gi.test(yyInput.value) == false
      ) {
        mmInput.parentElement.nextElementSibling.innerText = 'Can`t be blank'
        mmInput.style.border = "2px solid rgba(255, 0, 0, 0.3)";
        yyInput.style.border = "2px solid rgba(255, 0, 0, 0.3)";
      } else {
        mmInput.parentElement.nextElementSibling.innerText = ''
        mmInput.style.border = "2px solid hsl(270, 3%, 87%)";
        yyInput.style.border = "2px solid hsl(270, 3%, 87%)";
      }


      //CVC Error
      if(/\d{3}/gi.test(cvcInput.value) == false){
        cvcInput.parentElement.nextElementSibling.innerText = 'Can`t be blank'
        cvcInput.style.border = "2px solid rgba(255, 0, 0, 0.3)";
      } else {
        cvcInput.parentElement.nextElementSibling.innerText = ''
        cvcInput.style.border = "2px solid hsl(270, 3%, 87%";
      }

      if(cvcInput.value != wrong
        && yyInput.value != wrong
        && mmInput.value != wrong
        && cardNumberInput.value != wrong
        && cardNameInput.value != wrong
        ) {
            body.classList.add('anim');
            formContainer.classList.add('hidden')
            setTimeout(function() {
                body.classList.remove('anim');
            }, 300);
            setTimeout(function() {
                cardThanksContainer.classList.remove('hidden')
                cardThanksContainer.classList.add('anim')
            }, 500);
        }else {
            console.log('wrong Credentials')
        }
})

const compeleteBtn = document.querySelector('.end-btn')
compeleteBtn.addEventListener('click', () => {

    body.classList.add('anim');
    cardThanksContainer.classList.add('hidden')
    setTimeout(function() {
        body.classList.remove('anim');
    }, 300);

    setTimeout(function() {
        formContainer.classList.remove('hidden')
        cardThanksContainer.classList.add('hidden')
    }, 500);

    cardNameInput.value = ''
    cardNumberInput.value = ''
    mmInput.value = ''
    yyInput.value = ''
    cvcInput.value = ''
    cardName.innerText = 'JANE APPLESEED'
    cardNumber.innerText = '0000 0000 0000 0000'
    mmText.innerText = '00'
    yyText.innerText = '00'
    cvcText.innerText = '000'
})
