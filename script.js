let screen = document.getElementById("screen");

function input(val) {
  screen.value += val;
}
function clearAll() {
  screen.value = " ";
}
function back() {
  screen.value = screen.value.slice(0, -1);
}
function answer() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
    setTimeout(() => {
      screen.value = "";
    }, 1000);
  }
}
