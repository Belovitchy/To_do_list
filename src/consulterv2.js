//recuperer dans la mémoire locale

let allToDoList = JSON.parse(localStorage.getItem("monTableau")) || [];
let idCount = JSON.parse(localStorage.getItem("monCompteur")) || [];
console.log(allToDoList);

//fonction qui met a jour la zone liste consulté

function displayList(id) {
  const numberId = Number(id);
  //trouver la liste avec le bon id
  const thisToDoList = allToDoList.find((list) => list.id === numberId);
  console.log(thisToDoList);
  const title = document.querySelector("#titleList");
  title.innerText = thisToDoList.title;
  //pour thistodolist creer chaque todo
  const parentToDo = document.querySelector("#parentToDo");
  //ménage:supprimmer tout les enfants
  while (parentToDo.firstChild) {
    parentToDo.removeChild(parentToDo.firstChild);
  }
  for (let toDo of thisToDoList.toDo) {
    const newToDo = document.createElement("li");
    const checkBox = document.createElement("input");
    const textToDo = document.createElement("input");
    textToDo.type = "text";
    textToDo.value = toDo.text;
    checkBox.type = "checkbox";
    checkBox.checked = toDo.checked;
    newToDo.appendChild(checkBox);
    newToDo.appendChild(textToDo);
    parentToDo.appendChild(newToDo);
  }
}

//ajouter un enfant pour chaque element du tableau allToDoList
const parentTitle = document.querySelector("#parentTitle");
for (let element of allToDoList) {
  const newList = document.createElement("li");
  newList.innerText = element.title;
  newList.id = element.id;
  newList.className = "m-4 bg-white rounded-full h-16 text-2xl";
  //ecouter le click sur chaque to do list
  newList.addEventListener("click", () => {
    displayList(newList.id);
  });
  parentTitle.appendChild(newList);
}
