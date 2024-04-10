function identificarMayorEdad()
{
  let resultado = "";
  //Identificar si es Mayor de Edad
  let edad = prompt("porfavor ingrese se edad: ");

  if(edad >=18 ){
        resultado = `es mayor de edad - tiene : <h2>${edad}</h2>`
  }else{
        resultado = `es menor de edad - tiene : <h2>${edad}</h2>`
  }
  document.getElementById(`lista`).innerHTML = resultado;
}