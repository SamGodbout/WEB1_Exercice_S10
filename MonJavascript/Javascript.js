var nombreATrouver;
function nbAlea() {
  var nb = 1 +(100-1+1)*Math.random();
  nombreATrouver = Math.floor(nb);
  document.getElementById("tropHautTropBas").innerHTML = "C'est parti!";
  document.getElementById("numeroEssai").innerHTML = "C'est parti!";
}
function tropHautOuTropBas(){
  var nombre = document.getElementById("numero").value;
  nombreEssai();
  if(nombre > nombreATrouver){
    document.getElementById("tropHautTropBas").innerHTML = "Votre nombre est trop grand!";
  }else if(nombre < nombreATrouver){
    document.getElementById("tropHautTropBas").innerHTML = "Votre nombre est trop petit!";
  }else if(nombre == nombreATrouver){
    document.getElementById("tropHautTropBas").innerHTML = "Vous avez trouvé!";
    alert("Vous avez trouvé en " + nbEssai + " coups!")
  }
  if(nombre < 1 || nombre > 100){
    alert("Vous devez entrer un nombre entre 1 et 100!")
  }
}
var nbEssai = 0;
function nombreEssai(){
  nbEssai += 1;
  document.getElementById("numeroEssai").innerHTML = nbEssai;
}
