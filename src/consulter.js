//récupération des éléments du DOM
const inputItems = document.querySelector('#input-items');
const myList = document.querySelector('#my-list');
const boutonAjouter = document.querySelector('#bouton-ajouter');
const boutonEnregistrer = document.querySelector('#bouton-enregistrer');
const newsletter = document.querySelector('#newsletter');

//créer ma fonction newTask pour ajouter une tâche

const newTask = ()=>{
    const textTask = inputItems.value.trim();

//créer le li et son contenu
const li=document.createElement('li');
li.textContent = textTask;

if(li.textContent ===""){
    return alert('il manque une tache !');
}

//créer les boutons et checkbox
const boutonModifier = document.createElement('button');
boutonModifier.textContent = "Modifier";
boutonModifier.classList.add('m-4', 'text-white', 'p-2', 'rounded', 'border', 'border-white');

const boutonSupprimer = document.createElement('button');
boutonSupprimer.textContent = "supprimer";
boutonSupprimer.classList.add('m-4', 'text-white', 'p-2', 'rounded', 'border', 'border-white');

//créer l ecoute pour supprimer
boutonSupprimer.addEventListener('click',()=>{
    const confirmation = confirm ('êtes vous sûr de vouloir supprimer?');
     
     if (confirmation){
    myList.removeChild(li); }
});

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

checkbox.addEventListener ('change',() =>{
    if(checkbox.checked){
        li.style.textDecoration= 'line-through';
    }else{
        li.style.textDecoration= 'none';
    }
});

//lier les éléments
myList.appendChild(li);
li.appendChild(boutonModifier);
li.appendChild(boutonSupprimer);
li.appendChild(checkbox);

inputItems.value ='';

//ajouter des événements au bouton modifier
boutonModifier.addEventListener ('click', ()=>
{
   const nouveauText= prompt("Modifier la tache",textTask);
   if (nouveauText===null || nouveauText.trim()===""){
    return;
   }
li.firstChild.textContent = nouveauText.trim();
})};

boutonAjouter.addEventListener('click', newTask);
boutonAjouter.classList.add('m-4', 'text-white', 'p-2', 'rounded', 'border', 'border-white');

boutonEnregistrer.addEventListener('click', ()=>{
    alert('To do List enregistrée, bravo à toi !');
});

boutonInscription = document.createElement('button');
newsletter.appendChild(boutonInscription);
boutonInscription.textContent = "S'abonnez";
boutonInscription.classList.add('m-4', 'text-white', 'p-2', 'rounded', 'border', 'border-white');
boutonInscription.addEventListener('click', () => {
    alert('Merci pour votre abonnement!');
});

const footerSection = document.querySelector('footer .flex.flex-col');
    footerSection.appendChild(boutonInscription);
