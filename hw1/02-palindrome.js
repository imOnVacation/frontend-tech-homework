const elem = document.querySelector('input');
const errorElem = document.querySelector('.inputError');
const resultElem = document.querySelector('.displayResult');

elem.addEventListener('input', handleInput);

function handleInput() {
  const inputValue = elem.value;
  const numValue = Number(inputValue);

  // Clear the error and border when input is empty
  if (!inputValue) {
    resultElem.textContent = '';
    errorElem.textContent = '';
    elem.style.borderColor = '';
    return;
  }

  // Check if the input is a negative number
  if (numValue < 0) {
    errorElem.style.color = 'red';
    elem.style.borderColor = 'red';
    errorElem.textContent = 'Enter a valid positive number.';
    resultElem.textContent = '';
    return;
  }

  // Reset error and check for palindrome
  errorElem.textContent = '';
  elem.style.borderColor = '';

  if (isPalindrome(inputValue)) {
    resultElem.style.color = 'green';
    resultElem.textContent = 'Yes. This is a palindrome!';
  } else {
    resultElem.style.color = 'red';
    resultElem.textContent = 'No. Try again.';
  }
}

function isPalindrome(number) {
  const str = number.toString();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
