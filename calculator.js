let numberBut = document.querySelectorAll(".number");
let numMoniter = document.querySelector(".num-moniter");

// console.dir(numMoniter); dir可以看該元素得屬性跟屬性值

for (let i = 0; i < numberBut.length; i++) {
  //
  numberBut[i].addEventListener("click", function () {
    //
    // numMoniter.innerText = numberBut[i].innerText;

    if (numMoniter.innerText === "0") {
      // 如果畫面上等於0，要覆蓋掉0
      numMoniter.innerText = numberBut[i].innerText;
    } else {
      // 如果不是0，數字要往後排列
      numMoniter.innerText += numberBut[i].innerText;
    }

    // console.log((numMoniter.innerText = numberBut[i].innerText));
  });
  //
}
// 只有陣列可以跑迴圈

// console.dir(1);
// console.log(numberBut);
// console.log(typeof function () {});
