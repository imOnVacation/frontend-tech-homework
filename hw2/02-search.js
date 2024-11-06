const searchButton = document.querySelector("input[type='button']");
const userInput = document.getElementById('userInput');
const cardsContainer = document.getElementById('cardDeck');

function handleSearch() {
  const keyword = userInput.value.toLowerCase().trim();

  // Clear previous results
  cardsContainer.innerHTML = '';

  if (!keyword) {
    cardsContainer.innerHTML =
      '<p class="text-center">Enter a valid character name</p>';
    return;
  }

  // Filter the data based on the search input
  // eslint-disable-next-line no-undef
  const filteredData = characters.filter((item) =>
    item.name.toLowerCase().includes(keyword)
  );

  // Display the results
  if (filteredData.length > 0) {
    filteredData.forEach((character) => {
      const cardCol = document.createElement('div');
      cardCol.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-3');

      const card = document.createElement('div');
      card.classList.add('card', 'h-100', 'text-center');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = character.name;

      const highlightedName = highlightKeyword(character.name, keyword);
      cardTitle.innerHTML = highlightedName;

      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = `Birth year: ${character.birth_year}`;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);

      card.appendChild(cardBody);
      cardCol.appendChild(card);

      cardsContainer.appendChild(cardCol);
    });
  } else {
    cardsContainer.innerHTML = '<p class="text-center">No results found</p>';
  }
}

function highlightKeyword(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, 'gi');
  return text.replace(
    regex,
    '<span style="background-color: yellow;">$1</span>'
  );
}

searchButton.addEventListener('click', handleSearch);
