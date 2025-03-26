//recuperer dans la mémoire locale

let allToDoList = JSON.parse(localStorage.getItem("monTableau")) || [];
const idCount = JSON.parse(localStorage.getItem("monCompteur")) || [];
console.log(allToDoList);
let currentId = null;

//fonction qui met a jour la zone liste consultée
function displayList(id) {
  btnAdd.classList.remove("invisible");
  currentId = Number(id);
  //trouver la liste avec le bon id
  const thisToDoList = allToDoList.find((list) => list.id === currentId);
  console.log(currentId);
  const title = document.querySelector("#titleList");
  title.innerText = thisToDoList.title;
  //pour thistodolist creer chaque todo
  const parentToDo = document.querySelector("#parentToDo");
  //ménage:supprimmer tout les enfants
  while (parentToDo.firstChild) {
    parentToDo.removeChild(parentToDo.firstChild);
  }
  //creation des sous elements des todo
  for (const toDo of thisToDoList.toDo) {
    const newToDo = document.createElement("li");
    const checkBox = document.createElement("input");
    const textToDo = document.createElement("input");
    const binButton = document.createElement("button");
    const bin = document.createElement("img");
    bin.src = "./assets/corbeille.svg";
    binButton.className = "h-10 w-10 hover:scale-110";
    checkBox.className = "h-10 w-10";
    textToDo.className = "w-3/4 text-center text-3xl";
    newToDo.className = "flex flex-row justify-between h-3/4 my-6";
    binButton.appendChild(bin);
    textToDo.type = "text";
    textToDo.value = toDo.text;
    checkBox.type = "checkbox";
    checkBox.checked = toDo.checked;
    newToDo.appendChild(checkBox);
    newToDo.appendChild(textToDo);
    newToDo.appendChild(binButton);
    parentToDo.appendChild(newToDo);
    //ajouter une ecoute a la corbeille pour supprimer une to do
    binButton.addEventListener("click", () => {
      checkBox.remove();
      textToDo.remove();
      bin.remove();
      binButton.remove();
      newToDo.remove();
    });
  }
}
//gerer ajout todo avec une fonction?
const btnAdd = document.querySelector("#addToDo");
btnAdd.addEventListener("click", () => {
  const parent = document.querySelector("#parentToDo");
  const newToDo = document.createElement("li");
  newToDo.className = "flex flex-row justify-between h-3/4 my-6";
  parent.appendChild(newToDo);
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "h-10 w-10";
  newToDo.appendChild(checkBox);
  const textToDo = document.createElement("input");
  textToDo.type = "text";
  textToDo.className = "w-3/4 text-center text-3xl";
  newToDo.appendChild(textToDo);
  const binButton = document.createElement("button");
  binButton.className = "h-10 w-10 hover:scale-110";
  binButton.addEventListener("click", () => {
    checkBox.remove();
    textToDo.remove();
    bin.remove();
    binButton.remove();
    newToDo.remove();
  });
  newToDo.appendChild(binButton);
  const bin = document.createElement("img");
  bin.src = "./assets/corbeille.svg";
  binButton.appendChild(bin);
});

//gerer modifier
const btnModif = document.querySelector("#modifButton");
btnModif.addEventListener("click", () => {
  const parent = document.querySelector("#parentToDo");
  const listToModif = allToDoList.find((list) => list.id === currentId);
  allToDoList = allToDoList.filter((list) => list.id !== currentId);

  //----------------------------------------------------------
  const allToDo = parent.children;
  listToModif.toDo = [];

  for (const toDo of allToDo) {
    const textToDo = toDo.querySelector('input[type="text"]').value;
    const checkToDo = toDo.querySelector('input[type="checkbox"]').checked;
    const thisToDo = { checked: checkToDo, text: textToDo };

    listToModif.toDo.push(thisToDo);
    console.log(listToModif);
  }
  allToDoList.push(listToModif);
  localStorage.setItem("monTableau", JSON.stringify(allToDoList));
  // window.location.reload();
  //---------------------------------------------------------------------
  console.log(allToDoList);
});

//gerer supprimer
const btnDelet = document.querySelector("#delet");
btnDelet.addEventListener("click", () => {
  allToDoList = allToDoList.filter((list) => list.id !== currentId);
  localStorage.setItem("monTableau", JSON.stringify(allToDoList));
  //nettoyer la zone liste et remettre id a null
  btnAdd.classList.add("invisible");
  const parentToClean = document.querySelector("#parentToDo");
  const title = document.querySelector("#titleList");
  title.innerText = "Titre";
  while (parentToClean.firstChild) {
    parentToDo.removeChild(parentToDo.firstChild);
  }
  window.location.reload();
  console.log(allToDoList);
});

//ajouter un enfant pour chaque element du tableau allToDoList
const parentTitle = document.querySelector("#parentTitle");
for (const element of allToDoList) {
  const newList = document.createElement("li");
  newList.innerText = element.title;
  newList.id = element.id;
  newList.className =
    "m-4 bg-white rounded-full h-14 text-2xl hover:scale-105 cursor-pointer";
  //ecouter le click sur chaque to do list
  newList.addEventListener("click", () => {
    displayList(newList.id);
  });
  parentTitle.appendChild(newList);
}
