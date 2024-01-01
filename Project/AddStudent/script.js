const form = document.querySelector("#fr");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("cnfrmpwd");
const errorsDiv = document.getElementById("errors");

function add() {
  form.classList.toggle('hide');
}

document.getElementById('btn').addEventListener('click', add);
function submitlogic(e) {
  e.preventDefault();
  errorsDiv.textContent = "";
  if (nameInput.value == "") {
    const p = document.createElement("p");
    p.textContent = "name is required";
    errorsDiv.append(p);
  }
  if (emailInput.value.trim() == "") {
    const p = document.createElement("p");
    p.textContent = "email is required";
    errorsDiv.append(p);
  }
  if (passwordInput.value.trim() == "") {
    const p = document.createElement("p");
    p.textContent = "password is required";
    errorsDiv.append(p);
  }
  if (confirmPasswordInput.value.trim() == "") {
    const p = document.createElement("p");
    p.textContent = "Confirm password is required";
    errorsDiv.append(p);
  }
  if(passwordInput.value.lenght<=8){
          const p =document.createElement("p");
          p.textContent="pasword should be atleast 8 character"
          errorsDiv.append(p)
  }
   if(passwordInput.value='' && confirmPasswordInput.value!=''&& passwordInput.value != confirmPasswordInput){
          const p =document.createElement("p");
          p.textContent="password ad confirm password are not matching"
          errorsDiv.append(p)
  }
  
}

// let emailRegex=/^[A-Za-z0-9]

document.getElementById('fr').addEventListener('submit', submitlogic);
document.getElementById('showpwd').addEventListener('click',function()
{
          passwordInput.type = passwordInput.type == 'password'  ?'text':'password';
})
document.getElementById('showpwd2').addEventListener('click',function()
{
         confirmPasswordInput.type = confirmPasswordInput.type == 'password'  ?'text':'password';
})