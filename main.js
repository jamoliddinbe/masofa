
let velik = document.getElementById('v')
let piyoda = document.getElementById('p')
let moshina = document.getElementById('m')
let samolyot = document.getElementById('s')



function dom (){
document.getElementById('btn').addEventListener('click', function() { 
let knopka =  document.getElementById('input').value
piyoda.innerHTML = (knopka/3.6).toFixed(2) + ' soat'
velik.innerHTML = (knopka/20.1).toFixed(2) + ' soat'
moshina.innerHTML =  (knopka/70).toFixed(2) + ' soat'
samolyot.innerHTML =  (knopka/800).toFixed(2) + ' soat'
} )
}
