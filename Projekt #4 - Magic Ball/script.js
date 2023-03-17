const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

// Losowe odpowiedzi: z tablicy, zdefiniować tablicę:

const answersArr = ['Tak','Nie','Może', 'Ciężko powiedzieć...', 'Nie chcesz znać odpowiedzi na to pytanie...'];

/* Funkcje: 
Funkcja nr 1 - do wywołania animacji
Funkcja nr 2 - do sprawdzenia, czy input zosta wypełniony oraz czy na końcu jest znak zapytania
Funkcja nr 3 - do generowania losowej odpowiedzi. 

Kolejność:
- najpierw widzimy animację, 
- potem sprawdzamy, czy input jest wypełniony i czy ma znak ?,
- następnie funkcja, która generuje losową odpowiedź
*/

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000);
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent= '';
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent= 'Pytanie musi być zakończone znakiem "?"';
        answer.textContent= '';
    } else {
        error.textContent= 'Musisz zadań jakieś pytanie';
        answer.textContent= '';
    }
    ball.classList.remove('shake-animation');
}

const generateAnswer = () => {
    const number = Math.floor(Math.random()*answersArr.length);
    answer.innerHTML =`<span>Opowiedź:</span> ${answersArr[number]}`
}


ball.addEventListener('click', shakeBall)