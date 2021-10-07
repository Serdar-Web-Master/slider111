let a = document.querySelector(".block__out");
let btn1 = document.querySelector(".btn__out1");
let btn2 = document.querySelector(".btn__out2");
let b = document.querySelector(".block__in");
let btn3 = document.querySelector(".btn__out3");
let btn4 = document.querySelector(".btn__out4");
let img = document.querySelectorAll(".img");
let offset = 0;
let body = document.querySelector(".body");

console.log(img);

btn1.addEventListener("click", () => {
  a.style.background = "red";
  body.innerHTML = "hello world";
  body.style.marginTop = "100px";
});

btn2.onclick = function () {
  a.style.background = "blue";
};

btn3.addEventListener("click", function () {
  let img = document.querySelector(".img");
  offset = offset + 100;
  img.style.marginTop = -offset + "px";
});

btn4.addEventListener("click", function () {
  let img = document.querySelector(".img");
  offset = offset - 100;
  img.style.marginTop = -offset + "px";
});

for (let index = 0; index < img.length; index++) {
  const c = img[index];
  c.addEventListener("click", function () {
    this.style.width = "200px";
  });
}
