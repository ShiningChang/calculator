let numberBut = document.querySelectorAll(".number");
let numMoniter = document.querySelector(".num-moniter");
let dot = document.querySelector(".dot");
let symbolBut = document.querySelectorAll(".symbol");
let processMoniterWrapper = document.querySelector(".process-moniter-wrapper");
// console.log(dot);

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

dot.addEventListener("click", function () {
  // alert("成功");
  // 如果螢幕包含小數點，不做任何事情
  if (numMoniter.innerText.includes(".")) {
  } else {
    // 如果沒有小數點，加上小數點
    numMoniter.innerText += dot.innerText;
  }
});

// 只有陣列可以跑迴圈

// console.dir(1);
// console.log(numberBut);
// console.log(typeof function () {});

for (let i = 0; i < symbolBut.length; i++) {
  symbolBut[i].addEventListener("click", function () {
    // numMoniter.innerText += symbolBut[i].innerText;

    let calculatorTags = `<b>${numMoniter.innerText}</b><i>${symbolBut[i].innerText}</i>`;
    // debugger;
    // if (numMoniter.innerText.includes("+")) {
    //   console.log("n", numMoniter.innerText);
    //   console.log("p", processMoniterWrapper.innerText);

    //   // processMoniterWrapper.innerText = numMoniter.innerText;
    //   // console.log("n", numMoniter.innerText);
    //   // console.log("p", processMoniterWrapper.innerText);

    //   processMoniterWrapper.innerText += numMoniter.innerText;
    //   console.log("n", numMoniter.innerText);
    //   console.log("p", processMoniterWrapper.innerText);

    //   numMoniter.innerText = "0";
    // }
    if (
      numMoniter.innerText.includes("-") ||
      numMoniter.innerText.includes("x") ||
      numMoniter.innerText.includes("÷") ||
      numMoniter.innerText.includes("+") ||
      true
    ) {
      //processMoniterWrapper.innerText += numMoniter.innerText;
      processMoniterWrapper.innerHTML += calculatorTags;
      numMoniter.innerText = "0";
    }
  });
}

// for (let i = 0; i < symbolBut.length; i++) {
//   symbolBut[i].addEventListener("click", function () {
//     processMoniterWrapper.insertAdjacentHTML(
//       "beforeend",
//       `
//     numberBut
//     `
//     );
//   });
// }
