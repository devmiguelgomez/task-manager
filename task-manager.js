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
  if (tareas.length === 0) {
    console.log("ðŸ“­ No hay tareas registradas.\n");
    return;
  }
  console.log("\nðŸ“‹ Lista de tareas:");
  tareas.forEach((tarea) => {
    const estado = tarea.completada ? "âœ”ï¸ Completada" : "âŒ Pendiente";
    console.log(`${tarea.id}. ${tarea.nombre} - ${estado}`);
  });
  console.log("");
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
