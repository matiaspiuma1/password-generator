const passwordEl = document.getElementById("contraseña")
const crearPassBtn = document.getElementById("crear-pass")
const copiarPassBtn = document.getElementById("copiar-pass")

// El alfabeto sirve para indicar que caracteres se van a utilizar para crear la contraseña
const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890!@#$%"

// Funcion que crear las contraseñas aleatoriamente
function crearPass() {
	let pass = ""

	// El numero "16" indica cuantos caracteres va a tener la contraseña
	for (let i = 0; i < 16; i++) {
		pass += alfabeto.charAt(Math.floor(Math.random() * alfabeto.length))
	}

	// Mostrar la contraseña en el "H2"
	passwordEl.innerText = pass
}

crearPassBtn.addEventListener("click", crearPass)
