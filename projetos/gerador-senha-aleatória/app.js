const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyEl = document.querySelector(".material-symbols-outlined");
const alertEL = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPass();
});

copyEl.addEventListener("click", () => {
  copypass();
  if(inputEl.value){
  alertEL.classList.remove("off");
  setTimeout(() => {
  alertEL.classList.add("off");
  }, 2000);
   }
});

function createPass() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passlenght = 14;
  let password = "";
  for (let index = 0; index < passlenght; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
    console.log(randomNum, password);
  }
  inputEl.value = password;
  alertEL.innerText = password + " Copiado!";
}

function copypass() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
