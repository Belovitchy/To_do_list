const allToDoList = JSON.parse(localStorage.getItem("monTableau")) || [];
let idCount = JSON.parse(localStorage.getItem("monCompteur")) || [];
console.log(allToDoList);
//gestion ajouter une todo a la nouvelle list-----------
const buttonAjoutToDo = document.querySelector("#addToDo");
buttonAjoutToDo.addEventListener("click", () => {
  const parent = document.querySelector("#parentToDo");
  const newToDo = document.createElement("li");
  newToDo.className =
    "flex flex-row j md:justify-between h-8 md:h-3/4 my-4 gap-2";
  parent.appendChild(newToDo);
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "h-8 w-8 md:h-10 md:w-10";
  newToDo.appendChild(checkBox);
  const textToDo = document.createElement("input");
  textToDo.type = "text";
  textToDo.className = "w-3/4 text-center md:text-2xl text-xl";
  newToDo.appendChild(textToDo);
  const binButton = document.createElement("button");
  binButton.className = "h-8 w-8 md:h-10 md:w-10 hover:scale-110";
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

//gestion enregistrer la nouvelle list----------

const createButton = document.querySelector("#createButton");

createButton.addEventListener("click", () => {
  const titleList = document.querySelector("#titleList").value;
  //verifier si il y a un titre avant d'enregistre
  if (titleList === "") {
    // const popup = document.querySelector("#popup");
    // popup.classList.remove("invisible");
    // const btnOk = document.querySelector("#ok");
    // btnOk.addEventListener("click", () => {
    //   popup.classList.add("invisible");
    // });
    alert("Choisissez un titre");
  } else {
    const thisToDoList = { id: "", title: "", toDo: [] };
    idCount++;
    thisToDoList.id = idCount;
    const parent = document.querySelector("#parentToDo");

    thisToDoList.title = titleList;
    const allToDo = parent.children;
    for (const toDo of allToDo) {
      const textToDo = toDo.querySelector('input[type="text"]').value;
      const checkToDo = toDo.querySelector('input[type="checkbox"]').checked;
      const thisToDo = { checked: checkToDo, text: textToDo };
      thisToDoList.toDo.push(thisToDo);
    }
    allToDoList.push(thisToDoList);
    console.log(titleList);
    localStorage.setItem("monTableau", JSON.stringify(allToDoList));
    localStorage.setItem("monCompteur", JSON.stringify(idCount));

    //location.reload();
    console.log(allToDoList);
    // allToDo.forEach((element) => console.log(element));
    window.location.href = "./consulterV2.html";
  }
});
