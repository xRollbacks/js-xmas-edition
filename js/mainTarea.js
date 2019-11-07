const $nombre = document.formulario.nombre.value;
function validarNombre(nombre) {
	if (nombre.length >= 50) {
		return "Mas de 50 caracteres";
	}
	if (nombre.length === 0) {
		return "No escribiste nada";
	} else {
		return "";
	}
}

const $ciudad = document.formulario.ciudad.value;

function validarCiudad(ciudad) {
	if (ciudad.length === 0) {
		return "No se eligio ninguna ciudad";
	} else {
		return "";
	}
}
const $comportamiento = document.formulario.comportamiento.value;

function validarComportamiento(comportamiento) {
	if (comportamiento.length === 0) {
		return "No elegiste ningun comportamiento";
	} else {
		return "";
	}
}

const $descripcionRegalo = document.formulario["descripcion-regalo"].value;
function validarDescripcionRegalo(descripcion) {
	if (descripcion.length === 0) {
		return "Tenes que escribir algo en la descripcion";
	} else if (descripcion.length >= 100) {
		return "No se pueden usar mas de 100 caracteres";
	} else if (!/^[A-z0-9 ,\.]+$/.test(descripcion)) {
		return "Solo se pueden usar caracteres alfanumericos";
	} else {
		return "";
	}
}

function validarForm(event) {}

console.log(validarDescripcionRegalo($descripcionRegalo));
