function temperatura()
{
  let resultado = "";
  //temperatura
  let temperatura = prompt("porfavor ingrese la temperatura: ");

  if(temperatura <=0 ){
        resultado = `hace frio   <h2>${temperatura}</h2>`
  }else if (temperatura >= 0 && temperatura < 25){
    resultado = "la temperatura es apta"
  }else{
        resultado = `hace calor  <h2>${temperatura}</h2>`
  }
  document.getElementById(`temperatura`).innerHTML = resultado;
}