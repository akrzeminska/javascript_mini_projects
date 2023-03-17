// Pobranie wartości query selectorem

// Funkcja, która będzie coś odpalała, kiedy wpiszemy coś do inputa

// Funkcja ma porównać to, co wpisaliśmy w inputa z każdym napojem na liście

// Za pomocą instrukcji warunkowej sprawdzić, czy dane z inputa pokrywają się z nazwą napoju. Jeśli nie, ukryj taki napój.

// Zabezpieczenie aplikacji: nazwa napoju może być dużymi lub małymi literami. Musimy sprowadzić to, co napisał użytkownik do np. małych liter (tak samo należy zrobić z listą napojów).

const search = document.querySelector('.search');
const liItems = document.querySelectorAll('li');

const drinkSearch = e => {
    const text = e.target.value.toLowerCase()
   
    liItems.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}

search.addEventListener('keyup', drinkSearch)