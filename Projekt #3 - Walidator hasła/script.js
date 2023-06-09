// Pobieramy inputy, przycisk wyczyść, wyślij, popup.

const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

// Walidacja formularza. 
/* Funkcja 1, która sprawdza, czy wszystkie pola są wypełnione.
Funkcja 2, wyświetli błąd, które pole jest puste.
Funkcja 3, która będzie kasować błąd.
Argument input w funkcji checkForm przechowuje tablicę z naszymi inputami. Argument el odnosi się do każdej zmiennej, którą umieściliśmy w tablicy.
Argument input w funkcji showError przechowuje nasze inputy, argument msg przechowuje placeholder.
*/

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkForm = input => {
input.forEach(el => {
    if(el.value ==='') {
        showError(el, el.placeholder)
    } else {
        clearError(el)
    }
})
}

// Funkcja sprawdzająca długość tekstu w inputach

const checkLength = (input, min) => {
    if (input.value.length < min) {
    showError(input, `${input.previousElementSibling.innerText.slice(0,-1)} składa sie z min. ${min} znaków`)
    }
}

// Funkcja sprawdzająca czy hasła w 2 inputach się zgadzają.

const checkPassword = (pass1,pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Hasła do siebie nie pasują')
    }
}

// Funkcja sprawdzająca emaila

const checkMail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
     if (re.test(email.value)) {
       clearError(email)
    } else {
        showError(email, 'E-mail jest niepoprawny')
    }      
}

// Funkcja, która odpowiada za to, czy można wysłać formularz

const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if(el.classList.contains('error')) {
            errorCount++
        }
    })

    if(errorCount === 0) {
        popup.classList.add('show-popup')
    }
}

sendBtn.addEventListener('click', e => {
    e.preventDefault(); 
    checkForm([username, pass, pass2, email]);
    checkLength(username,6);
    checkLength(pass,8);
    checkPassword(pass, pass2);
    checkMail(email);
    checkErrors();
})

// Czyszczenie formularza, przejmujemy event i powstrzymujemy, żeby po kliknięciu na wyczyść strona się nie przełdowywała (preventDefaultem).
// Zwykły button charakteryzuje się tym, że po kliknięciu domyślnie następuje przeładowanie strony.

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = '';
        clearError(el)
    })
})

