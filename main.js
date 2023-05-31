// Variavéis
const btnTry =document.querySelector("#btnTry");
const btnReset =document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

let randomNumber = Math.round(Math.random() * 10);
let XAttempts = 1;

// Eventos 
btnTry.addEventListener('click', handleClick);
btnReset.addEventListener('click', HandleResetClick);
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    HandleResetClick();
  };
});

// Funçôes callback
function handleClick(event) {
  event.preventDefault(); // não faça o padrão

  const inputNumber = document.querySelector("#inputNumber");

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    console.log(inputNumber.value)

    screen2.querySelector("h2").innerText = `Acertou em ${XAttempts} tentativas.`;
  };

  inputNumber.value = "";
  XAttempts++;
};

function HandleResetClick() {
  toggleScreen();
  XAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
};

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};