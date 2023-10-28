let numberBut = document.querySelectorAll(".number");
let numMoniter = document.querySelector(".num-moniter");
// console.dir(numMoniter); dir可以看該元素得屬性跟屬性值
for (let i = 0; i < numberBut.length; i++) {
  numberBut[i].addEventListener("click", function () {
    numMoniter.innerText[i];
  });
}

console.dir(1);
