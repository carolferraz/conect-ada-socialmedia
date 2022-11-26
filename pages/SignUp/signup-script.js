import User from "../../models/User.class.mjs";
import Functions from "../../models/Functions.class.mjs";
import Alert from "../../components/Alert.js";
import database from "../../models/DataBase.class.mjs";

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const signupBtn = document.getElementById("signup");

const inputs = document.querySelectorAll(".required");
const inputErrorMsgs = document.querySelectorAll(".invalid-msg");

const emailRegexValidate = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// Alerts

const successRegisterAlert = new Alert(
  'Usuário registrado com sucesso',
  '../../assets/success.svg',
  '#00875F'
);

const emailAlreadyExistsAlert = new Alert(
  'O e-mail já existe, tente um e-mail diferente ou faça o login',
  '../../assets/warning.svg',
  '#F75A68'
);

// fim do alerts

//inicializando database
database.initialization();

//funções específicas da página
function errorInvalidInput(index) {
  inputs[index].style.border = "1px solid #F75A68";
  inputErrorMsgs[index].style.display = "block";
}

function acceptedInput(index) {
  inputs[index].style.border = "1px solid #00875F";
  inputErrorMsgs[index].style.display = "none";
}

function isNameValidate(index) {
  if (inputs[index].value.length < 3) {
    errorInvalidInput(index);
    return false;
  } else {
    acceptedInput(index);
    return true;
  }
}

function isEmailValidate(index) {
  if (emailRegexValidate.test(inputs[index].value)) {
    acceptedInput(index);
    return true;
  } else {
    errorInvalidInput(index);
    return false;
  }
}

function isPasswordValidate(index) {
  if (inputs[index].value.length < 6) {
    errorInvalidInput(index);
    return false;
  } else {
    acceptedInput(index);
    return true;
  }
}

function checkValidation() {
  if ((isNameValidate(0) === isEmailValidate(1)) === isPasswordValidate(2)) {
    return true;
  } else {
    return false;
  }
}

function emailNotExists(email) {
  for (let index = 0; index < database.users.length; index++) {
    const user = database.users[index];
    if (user.email === email) {
      return false;
    }
  }
  return true;
}

function resetInputs() {
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].style.border = '1px solid #8D8D99';
    inputs[index].value = '';
  }
}

function registerUser(e) {
  e.preventDefault();
  if (checkValidation() && emailNotExists(userEmail.value)) {
    new User(userName.value, userPassword.value, userEmail.value);
    Functions.setLocalStorage('users', database.users);
    resetInputs();
    successRegisterAlert.showAlert();
  } else {
    emailAlreadyExistsAlert.showAlert();
  }
}

alertCloseBtn.addEventListener("click", () => successRegisterAlert.hideAlert());
userName.addEventListener("input", () => isNameValidate(0));
userEmail.addEventListener("input", () => isEmailValidate(1));
userPassword.addEventListener("input", () => isPasswordValidate(2));
signupBtn.addEventListener("click", registerUser);
