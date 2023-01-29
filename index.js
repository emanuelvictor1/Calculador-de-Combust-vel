let dinheiro = document.getElementById("dinheiro")
let combValor = document.getElementById("valor-combus")
let kmCarro = document.getElementById("km-carro")
let secMostrar = document.getElementById("mostrar-section")
let form = document.getElementById("form")

// validando se os campos etão vazios 
function  validacao() {
  d = Number(dinheiro.value)
  cv = Number(combValor.value)
  km = Number(kmCarro.value)

  if (d == '' || cv == ''|| km == '') {
    alert("Não pode haver espaços em branco!")
  }
  else if (d != '' || cv != '' || km != '') {
    calcular()
  } 
}
// Calculando

function calcular() {
  d = Number(dinheiro.value)
  cv = Number(combValor.value)
  km = Number(kmCarro.value)

  var calc1 = d / cv
  var calc2 = calc1 * km
  
  //verificando se os valores correspondem
  if (d < cv) {
    alert("O seu dinheiro não pode ser menor que o valor do combustível")
  } else if (d != cv || d == cv){
    //mostrando o calculo
    if(secMostrar.style.display === "none") {
      secMostrar.style.display = "block";
      secMostrar.innerHTML = `
      <div style="background-color: white;
                width: 410px; 
                margin: auto;
                border-radius: 10px;
                height: 150px;
                " 
      class="div-container-mostrar">
      <h2 style="padding: 5px;">Calculo</h2> 
      <p class="p1" style="font-size: 14pt;
                padding: 9px;"
                text-align: center;>Com ${d} reais, você compra: ${calc1.toFixed(2)} L<br> Você consegue andar ${calc2.toFixed(2)} km</p>
      </div>`
    } else {
      secMostrar.style.display = "none";
    }  
  }
}
