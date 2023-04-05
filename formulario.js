//Variable para acceder al (element input)
const newPassword = document.getElementById('newPassword');
newPassword.addEventListener('keyup', checkPassword);

//function help para eliminar y poner class con(toogClass()):
function toogClass(element, condition) {//va tener el html y parametro
  if(condition) {
    element.classList.add('valid');
  } 
  else {
    element.classList.remove('valid');
    element.classList.add('invalid');
  }
}
//function principal del code:
function checkPassword(){
  //Condicion #1 le password doit avoir 6 caracters:
  const element1 = document.getElementById();
  //si no tiene 6 caract=false, inversa=true:
  let isLengthValid = false;
  if(newPassword.value.length > 5){
    isLengthValid = true;
  }
  toogClass(element1,isLengthValid);

  //condicton #2 password doit avoir un numero:
  const element2 = document.getElementById('digit');
  let hasOneDigit = false;
  //esta es una manera de muchas otras para validar digit
  let digit = /[0-9]/;
  if(newPassword.value.match(digit)){
    hasOneDigit = true;
  }
  toogClass(element2, digit);

  //condiction #3 la premiere letre en MAYUSCULE:
  const element3 = document.getElementById('upperCase');
  let isUpperCase = false;
  let letre = /[A-Za-z]/;
  if(newPassword.value.match(letre)&&(newPassword.value.chartAt(0)=== newPassword.value.chartAt(0).toUpperCase())){
    isUpperCase = true;
  }
  toogClass(element3, isUpperCase);

  //condiction #4 los primeros y ultimos caract no se repiten:
  const element4 = document.getElementById('pattern');
  let isPattern = false;
  if(newPassword.value.substr(0,3) !== newPassword.value.substr(newPassword.value.length - 3)) {
    isPattern.value = true;
  }
  toogClass(element4, isPattern);

  //condiction #5 le password no tiene space:
  const element5 =document.getElementById('space');
  let hasNoSpace = false;
  if(newPassword.value.replace('','') === newPassword.value) {
    hasNoSpace = true;
  }
  toogClass(element5,hasNoSpace);

  //condiction #6 le password tiene caracter special:
  const element6 = document.getElementById('character');
  let hasSpecialCharacter = false;
  let caracters = /[!?@#&]/;
  if(newPassword.value.match(caracters)) { 
    hasSpecialCharacter =true;
  }
  toogClass(element6, hasSpecialCharacter);
  
}

