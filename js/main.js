function underlined(){
    document.getElementById("e").style.textDecoration="underline";
}

document.getElementById("reservation").addEventListener('submit', reserver);

function reserver(e){
   
    e.preventDefault();
    var origine = document.getElementById('origine').value;
    var dest = document.getElementById('dest').value;
    var depart = document.getElementById('depart').value;
    var retour = document.getElementById('retour').value;

    document.getElementById('ori').innerHTML=origine;
    document.getElementById('des').innerHTML=dest;
    document.getElementById('dep').innerHTML=depart;
    document.getElementById('ret').innerHTML=retour;
}