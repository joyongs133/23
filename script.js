const buttons = document.querySelectorAll('.buttons button');
const screen = document.getElementById('result');
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const buttonText = this.value;
    if (buttonText === '=') {
      screen.value = eval(screen.value);
    } else if (buttonText === 'C') {
      screen.value = '';
    } else if (buttonText === '√') {
      screen.value = Math.sqrt(screen.value);
    } else if (buttonText === '^') {
      screen.value = Math.pow(screen.value, 2);
    } else if (buttonText === 'sin') {
      screen.value = Math.sin(screen.value * Math.PI / 180);
    } else if (buttonText === 'cos') {
      screen.value = Math.cos(screen.value * Math.PI / 180);
    } else if (buttonText === 'tan') {
      screen.value = Math.tan(screen.value * Math.PI / 180);
    } else if (buttonText === '←') {
      screen.value = screen.value.substring(0, screen.value.length - 1);
    } else {
      screen.value += buttonText;
    }
  });
}