function switchVisibility(toShow,toHide){
    const content1 = document.getElementById(toShow);
    content1.classList.toggle('d-none');
    if (toHide != undefined) {
      const content2 = document.getElementById(toHide);
      content2.classList.toggle('d-none');
    }
};
function generateElementsByArray(elementType, content, wrapper){
  const singleElement = document.createElement(elementType);
  singleElement.innerText = content;
  wrapper.appendChild(singleElement);
}
function randomNumber(max) {
  return Math.round(Math.random() * (max - 1)) + 1;
};
function generateLi(listIngredients, listToAppend) {
let iterable = 0;
const ulDestination = document.getElementById(listToAppend);
while (iterable < listIngredients.length){
    const ingredient = document.createElement('li');
    ingredient.innerText = listIngredients[iterable];
    ulDestination.appendChild(ingredient);
    iterable++;
}};
function separe(buttons){
  for (let i = 0; i < buttons.length; i++){
      buttons[i].style.translate = 0;
    }
};