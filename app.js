// Inicializa una lista vacía para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Verifica que el nombre no esté vacío y no esté ya en la lista
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre); // Agrega el nombre a la lista
        actualizarLista(); // Actualiza la lista en el HTML
        input.value = ''; // Limpia el campo de entrada
    } else {
        alert('Por favor, ingresa un nombre válido o que no esté en la lista.');
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li'); // Crea un nuevo elemento de lista
        li.textContent = amigo; // Establece el texto del elemento
        listaAmigos.appendChild(li); // Agrega el elemento a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Necesitas agregar al menos un amigo para sortear.');
        return;
    }

    // Selecciona un amigo aleatorio
    const index = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[index];

    // Muestra el resultado
    mostrarResultado(amigoSeleccionado);
}

// Función para mostrar el resultado en el HTML
function mostrarResultado(amigoSeleccionado) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpia la lista de resultados

    const li = document.createElement('li'); // Crea un nuevo elemento de lista
    li.textContent = `Tu amigo secreto es: ${amigoSeleccionado}`; // Establece el texto del elemento
    resultadoLista.appendChild(li); // Agrega el elemento a la lista de resultados

    // Elimina el amigo seleccionado de la lista para evitar repeticiones
    amigos = amigos.filter(amigo => amigo !== amigoSeleccionado);
    actualizarLista(); // Actualiza la lista en el HTML
}