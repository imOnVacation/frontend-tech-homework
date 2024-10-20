const userInput = document.getElementById('userInput');
const textContainer = document.querySelector('.textContainer');

// Store the original text to reset when needed
const originalText = textContainer.textContent;

function handleKeyDown() {
  setTimeout(() => {
    const word = userInput.value.trim();

    if (word.length > 0) {
      const wordsArray = originalText.split(/\b/);

      const highlightedArray = wordsArray.map((wordInText) => {
        if (wordInText.toLowerCase() === word.toLowerCase()) {
          return `<span style="background-color: yellow">${wordInText}</span>`;
        }
        return wordInText;
      });

      textContainer.innerHTML = highlightedArray.join('');
    } else {
      textContainer.textContent = originalText;
    }
  }, 0);
}

userInput.addEventListener('keydown', handleKeyDown);
