// Calcolo numeri e multipli
const div = document.querySelector("div.number_container")

for (let i = 1; i <= 100; i++){
    
    if (i % 5 === 0 && i % 3 === 0 ){
        console.log("fizzbuzz");
        const element = `<div class="number number--fizzbuzz">fizzbuzz<div>`;
        div.innerHTML += element;
    }
    else if (i % 3 === 0 ){
        console.log("fizz");
        const element = `<div class="number number--fizz">fizz<div>`;
        div.innerHTML += element;   
    }
    else if (i % 5 === 0 ){
        console.log("buzz");
        const element = `<div class="number number--buzz">buzz<div>`;
        div.innerHTML += element;
    }
    else {
        console.log(i);
        const element = `<div class="number number--${i}">${i}<div>`;
        div.innerHTML += element;
    }

    

}

