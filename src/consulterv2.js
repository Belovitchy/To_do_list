//recuperer dans la mémoire locale

let allToDoList = JSON.parse(localStorage.getItem("monTableau")) || [];
let idCount = JSON.parse(localStorage.getItem("monCompteur")) || [];
console.log(allToDoList);

//fonction qui met a jour la zone liste consultée
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
  //creation des sous elements des todo
  for (let toDo of thisToDoList.toDo) {
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
  //gerer modifier et supprimer
  const btnModif = document.querySelector("#modifButton");
  const btnDelet = document.querySelector("#delet");
}

//ajouter un enfant pour chaque element du tableau allToDoList
const parentTitle = document.querySelector("#parentTitle");
for (let element of allToDoList) {
  const newList = document.createElement("li");
  newList.innerText = element.title;
  newList.id = element.id;
  newList.className =
    "m-4 bg-white rounded-full h-16 text-2xl hover:scale-105 cursor-pointer";
  //ecouter le click sur chaque to do list
  newList.addEventListener("click", () => {
    displayList(newList.id);
  });
  parentTitle.appendChild(newList);
}
