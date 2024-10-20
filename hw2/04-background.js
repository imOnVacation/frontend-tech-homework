const button = document.querySelector('input[type="button"]');
const input = document.getElementById('inputSecond');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random() * 0.5 + 0.3;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

const handleClick = (() => {
  let intervalId = null;
  let isRunning = false;

  return function () {
    let intervalSeconds = Number(input.value);

    if (!isRunning) {
      changeBackgroundColor();
      intervalId = setInterval(changeBackgroundColor, intervalSeconds * 1000);
      button.value = 'Stop';
      button.classList.add('btn-danger');
    } else {
      clearInterval(intervalId);
      button.value = 'Start';
    }
    isRunning = !isRunning;
  };
})();

button.addEventListener('click', handleClick);
