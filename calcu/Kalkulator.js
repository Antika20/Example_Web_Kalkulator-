const calculator = { // 1. Buatlah sebuah objek kalkulator 
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};
 // 2. Membuat fungsi fungsi umum kalkulator 
function updateDisplay() {
  document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}
 
function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}
// 3. Membuat fungsi memasukna angka ke nilai displayNumber

 /*
   5. tambahkan sebuah kondisi dimana jika displayNumber 
   bernilai ‘0’ di fungsi inputDigit() sehingga angka yang pertama
    dimasukkan pengguna akan menggantikan keseluruhan nilai displayNumber
  */
function inputDigit(digit) {
  if (calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}
  // 8. Deklarasikan fungsi fungsi sebelumnya mulai dari button +/-
function inverseNumber() {
  if (calculator.displayNumber === '0') {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}

 // 9. untuk menetapkan sebuah operator 
function handleOperator(operator) {
  if (!calculator.isWaitForSecondNumber) {
    calculator.operator = operator;
    calculator.isWaitForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
    calculator.displayNumber = '0';
  } else {
    alert('Operator sudah ditetapkan');
  }
}
/*Fungsi ini digunakan untuk melakukan kalkulasi terhadap
 nilai - nilai yang terdapat pada objek calculator
*/

function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert('Anda belum menetapkan operator');
    return;
  }
 
  let result = 0;
  if (calculator.operator === '+') {
    result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }
 
  calculator.displayNumber = result;
}
 /* 4. buat variabel buttons dengan menginisialisasikan nilai 
seluruh elemen button yang ada dan berikan event click pada tiap elemennya.
 */
const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
 
     // 6. Menjalankan button Fungsi Hapus 
    if (target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }
 // 7. Melengkapi Fungsi kalkulator 
    if (target.classList.contains('negative')) {
      inverseNumber();
      updateDisplay();
      return;
    }
 
    if (target.classList.contains('equals')) {
      performCalculation();
      updateDisplay();
      return;
    }
 
    if (target.classList.contains('operator')) {
      handleOperator(target.innerText)
      return;
    }
 
    inputDigit(target.innerText);
    updateDisplay();
  });
}