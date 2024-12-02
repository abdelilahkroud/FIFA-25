const btn = document.getElementById("changeFormation");

let plan = true;

btn.addEventListener("click", () => {
  if (plan) {
    changeFormation();
    plan = false;
  }
  else {
    defaultFormation();
    plan = true
  }
});

function changeFormation() {

  document.getElementById("btnFor").innerHTML = "3-4-3";


  const changePostGK = document.getElementById("GK");
  changePostGK.id = "GK-prime";

  const changePostCBL = document.getElementById("CBL");
  changePostCBL.id = "CBL-prime";

  const changePostCBR = document.getElementById("CBR");
  changePostCBR.id = "CBR-prime";

  const changePostLB = document.getElementById("LB");
  changePostLB.id = "LB-prime";

  const changePostRB = document.getElementById("RB");
  changePostRB.id = "RB-prime";

  const changePostDM = document.getElementById("DM");
  changePostDM.id = "DM-prime";

  const changePostCML = document.getElementById("CML");
  changePostCML.id = "CML-prime";

  const changePostCMR = document.getElementById("CMR");
  changePostCMR.id = "CMR-prime";

  const changePostLW = document.getElementById("LW");
  changePostLW.id = "LW-prime";

  const changePostRW = document.getElementById("RW");
  changePostRW.id = "RW-prime";

  const changePostST = document.getElementById("ST");
  changePostST.id = "ST-prime";
}

function defaultFormation() {

  document.getElementById("btnFor").innerHTML = "4-3-3";
  const changePostGK = document.getElementById("GK-prime");
  changePostGK.id = "GK";

  const changePostCBL = document.getElementById("CBL-prime");
  changePostCBL.id = "CBL";

  const changePostCBR = document.getElementById("CBR-prime");
  changePostCBR.id = "CBR";

  const changePostLB = document.getElementById("LB-prime");
  changePostLB.id = "LB";

  const changePostRB = document.getElementById("RB-prime");
  changePostRB.id = "RB";

  const changePostDM = document.getElementById("DM-prime");
  changePostDM.id = "DM";

  const changePostCML = document.getElementById("CML-prime");
  changePostCML.id = "CML";

  const changePostCMR = document.getElementById("CMR-prime");
  changePostCMR.id = "CMR";

  const changePostLW = document.getElementById("LW-prime");
  changePostLW.id = "LW";

  const changePostRW = document.getElementById("RW-prime");
  changePostRW.id = "RW";

  const changePostST = document.getElementById("ST-prime");
  changePostST.id = "ST";
}




let modal = document.getElementById("myModal");

let btnu = document.getElementById("ajout");

let span = document.getElementsByClassName("close")[0];


btnu.addEventListener('click', ()=>{

  console.log('clicked');
  
  modal.style.display = "block";
})


document.getElementById("sp").onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const addButton = document.getElementById("submit");
const addform = document.getElementById("ajouter");

let playerName = document.getElementById("nom");
let playerLName = document.getElementById("prenom")
let playerNation = document.getElementById("nation")
let playerClub = document.getElementById("club")

let carts1 = document.getElementById("rowcart1")
let carts2 = document.getElementById("rowcart2")
console.log(carts1);


 plan = true;

let posit = Array.from(document.querySelectorAll(".button-log"));

let id = " ";

console.log(posit);

posit.forEach(e => {
  e.addEventListener("click", (el) => {
    id = el.target.id
    console.log(id.substring(4))

  })

});

addform.addEventListener("submit", (e) => {
  e.preventDefault();
  let playerInfo = ("playerinfo");
  modal.style.display = "none";
  playerInfo = {

    nom: playerName.value,
    prenom: playerLName.value,
    nation: playerNation.value,
    club: playerClub.value,

    position: id.substring(4)
    
  }

  if (plan) {
    carts1.innerHTML += `
                  <div class="rowcart2">
                  <div class="kart">
                          <h1>${playerInfo.nom}</h1>
                          <h1>${playerInfo.prenom}</h1>
                          <p>Position:${playerInfo.position}</p>
                          </div>
                      </div>
    `
    plan = false
  } else {
    carts2.innerHTML += `
                  <div class="rowcart2">
                  <div class="kart">
                          <h1>${playerInfo.nom}</h1>
                          <h1>${playerInfo.prenom}</h1>
                          <p>${playerInfo.position}</p>2
                          </div>
                      </div>
    `
    plan = true

    
  }
  console.log(playerInfo.nom);

})

