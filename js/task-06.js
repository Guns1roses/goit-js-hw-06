// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.



// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.


const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", onBlur);
function onBlur(e) {
  const input1 = e.currentTarget;
  const inputLength = Number(input1.dataset.length);
  if (input1.value.length === inputLength) {
    input1.classList.remove("invalid");
    input1.classList.add("valid");
  } else {
    input1.classList.remove("valid");
    input1.classList.add("invalid");
  }
  //console.log(input1);
  //console.log(inputLength);
}