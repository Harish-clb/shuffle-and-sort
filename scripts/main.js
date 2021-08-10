// Using data from mocks folder
const data = MOCKDATA;

const itemsContainer = document.getElementById('items-container');

const createItems = (data) => {
  itemsContainer.innerHTML = '';
  data.forEach(item => createListItem(item));
};

const createListItem = (item) => {
  const listElement = document.createElement('li');
  listElement.innerHTML = item.id;
  listElement.style.setProperty('background', item.background);
  listElement.style.setProperty('border-left', `8px solid ${item.background}`);
  listElement.classList.add('list-item');
  itemsContainer.appendChild(listElement);
}

const shuffleItems = () => {
  const dataCopy = data.slice();
  dataCopy.forEach((_, i) => {
    const j = Math.floor(Math.random() * i);
    [dataCopy[j], dataCopy[i]] = [dataCopy[i], dataCopy[j]];
  });
  createItems(dataCopy);
}

/**
 * As initial data will be sorted by default and is not changed thereafter
 * we can use same data to populate the list items on click of sort
 * so sort logic is not perfomed here, if not sorted, then we can use as below
 * sortOrder = (data) => {
  data.sort((a, b) => a > b ? 1 : -1);
}
 **/
const sortOrder = () => createItems(data);

// Create Numbered Items
createItems(data);
