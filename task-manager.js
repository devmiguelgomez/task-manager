const readline = require('readline');

// Lista de tareas (simulación en memoria)
let tareas = [];

// === CREAR TAREA ===
function crearTarea(nombre) {
    const nuevaTarea = {
        id: tareas.length + 1,
        nombre,
        completada: false,
      };
      tareas.push(nuevaTarea);
      console.log("✅ Tarea creada correctamente.\n");
}

// === LISTAR TAREAS ===
function listarTareas() {
}

// === MARCAR COMO COMPLETADA ===
function completarTarea(id) {
}

// === ELIMINAR TAREA ===
function eliminarTarea(id) {
}

// === MENÚ PRINCIPAL ===
const rl = readline.createInterface({
});

function mostrarMenu() {
}

// Iniciar menú
mostrarMenu();
