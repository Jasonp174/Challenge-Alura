export function valida(input){
	const tipoDeInput = input.dataset.tipo;
	if(validadores[tipoDeInput]){
		validadores[tipoDeInput](input);
	}

  console.log(input.parentElement)
  if(input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = ""
  }else{
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError"
]

const mensajesDeError = {
  nombre:{
    valueMissing:"El campo Nombre no puede estar vacio"
  },
  email:{
    valueMissing:"Email no puede estar vacio",
    typeMismatch:"El Email no es valido"
  },
  telefono:{
    valueMissing:"Telefono no puede estar vacio",
    typeMismatch:"Telefono no es valido"
  },
  asunto:{
    valueMissing:"El campo Asunto no puede estar vacio",
    patternMismatch:"El Asunto debe contener entre 7 a 30 caracteres"
  },
  mensaje:{
    valueMissing:"El Mensaje no puede estar vacio",
  }
}
