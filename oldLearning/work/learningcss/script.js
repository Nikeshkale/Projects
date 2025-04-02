console.log("test");

const box = document.querySelector(".box");
const btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", () => {
  if (flag === 0) {
    box.style.backgroundColor = "yellow";
    btn.innerHTML = "ON";
    // console.log("button click");
    flag = 1;
  } else {
    box.style.backgroundColor = "grey";

    btn.innerHTML = "OFF";
    flag = 0;
  }
});
