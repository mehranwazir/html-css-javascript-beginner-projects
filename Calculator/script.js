const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (display.innerText != "" && item.id == "equal") {
      try {
        let result = eval(display.innerText);
        if (result % 1 != 0) {
          result = result.toFixed(14); // Limit to 14 decimal places
        }
        display.innerText = result;
      } catch (error) {
        display.innerText = "Error";

        setTimeout(() => {
          display.innerText = "";
        }, 2000);
      }
    } else if (display.innerText == "" && item.id == "equal") {
      setTimeout(() => {
        display.innerText = "";
      }, 2000);
    } else display.innerText += item.id;
  });
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
});
