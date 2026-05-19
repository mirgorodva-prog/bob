document.getElementById('logBtn').addEventListener('click', function() {
    let aVal = document.getElementById('inputA').value;
    let bVal = document.getElementById('inputB').value;
    
    if (aVal === "" || bVal === "") {
        console.log("Помилка: будь ласка, введіть обидва числа.");
        alert("Введіть обидва числа!");
        return;
    }
    
    let A = Number(aVal);
    let B = Number(bVal);
    
    console.log(`--- Старт виведення від ${A} до ${B} ---`);
    
    if (A <= B) {
     
        for (let i = A; i <= B; i++) {
            console.log(i);
        }
    } else {
       
        for (let i = A; i >= B; i--) {
            console.log(i);
        }
    }
    
    console.log("--- Кінець виведення ---");
    alert("Готово! Перевірте консоль розробника (F12).");
});
