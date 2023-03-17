//Projekt #2 - BillSpliter - Opis projektu
//Pobierz odpowiednie elementy: inputy(kwota do zapłaty, ilość osób), select z napiwkiem, przycisk, paragraf do wyświetlenia błędu, paragraf i span do wyświetlenia wyniku.
// Stwórz funkcję, kóra będzie sprawdzała, czy wszystkie pola zostały uzupełnione. Jesli nie, pokaż błąd. Jeśli tak, wywołaj kolejną funkcję, która zajmie się obiczaniem rachunku. - Instrukcja IF.
// Funkcja obliczająca rachunek musi przechwycić dane z input i select oraz wykonać działane wg wzoru: (kwota do zapłaty + (kwota do zapłaty * napiwek)) / ilość osób. - Sprawdzić czy operują na liczbach, czy nie na stringach.
// Wynik działania wypisz w odpowiednim paragrafie. Zaokrąglić kwotę do 2 miejsc po przecinku.


const price = document.querySelector('#price');
const people = document.getElementById('people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const showBill = () => {
    if (price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola'
        costInfo.style.display = 'none';
    } else {
        error.textContent = ''
        countBill();
    } 
}

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + newPrice * newTip) / newPeople;
    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2)
}

countBtn.addEventListener('click', showBill)

