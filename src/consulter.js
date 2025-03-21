const button = document.getElementById('my-button');
const ul     = document.getElementById('my-list');

button.addEventListener('click', () => {
  const text   = document.getElementById('text').value;
  const li     = document.createElement('li');
  li.innerHTML = text;
  ul.append(li);
})