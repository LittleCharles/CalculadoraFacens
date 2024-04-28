document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(
    ".number, .operator, .clear, .equal"
  );
  let currentVal = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.textContent;
      if (value === "=") {
        try {
          currentVal = eval(currentVal);
        } catch (error) {
          currentVal = "Error";
        }
      } else if (value === "C") {
        currentVal = "";
      } else {
        currentVal += value;
      }
      display.value = currentVal;
    });
  });
});
