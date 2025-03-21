let allToDoList = []; //JSON.parse(localStorage.getItem("monTableau")) || [];
let idCount = 0; //JSON.parse(localStorage.getItem("monCompteur")) || [];
//gestion ajouter une todo a la nouvelle list-----------
const buttonAjoutToDo = document.querySelector("#addToDo");
buttonAjoutToDo.addEventListener("click", () => {
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
  binButton.className = "h-10 w-10";
  binButton.addEventListener("click", () => {
    checkBox.remove();
    textToDo.remove();
    bin.remove();
    binButton.remove();
    newToDo.remove();
  });
  newToDo.appendChild(binButton);
  const bin = document.createElement("img");
  bin.src = "./corbeille.svg";
  binButton.appendChild(bin);
});

//gestion enregistrer la nouvelle list----------

const createButton = document.querySelector("#createButton");
createButton.addEventListener("click", () => {
  let thisToDoList = [];
  idCount++;
  thisToDoList.push(idCount);
  const parent = document.querySelector("#parentToDo");

  const titleList = document.querySelector("#titleList").value;
  thisToDoList.push(titleList);
  const allToDo = parent.children;
  for (let toDo of allToDo) {
    const textToDo = toDo.querySelector('input[type="text"]').value;
    const checkToDo = toDo.querySelector('input[type="checkbox"]').checked;
    const thisToDo = [checkToDo, textToDo];
    thisToDoList.push(thisToDo);
  }
  allToDoList.push(thisToDoList);
  console.log(titleList);
  localStorage.setItem("monTableau", JSON.stringify(allToDoList));
  localStorage.setItem("monCompteur", JSON.stringify(idCount));
  console.log(allToDoList);
  //location.reload();
  //console.log(allToDo);
  // allToDo.forEach((element) => console.log(element));
});
