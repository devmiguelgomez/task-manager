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
    console.log("📭 No hay tareas registradas.\n");
    return;
  }
  console.log("\n📋 Lista de tareas:");
  tareas.forEach((tarea) => {
    const estado = tarea.completada ? "✅ Completada" : "❌ Pendiente";
    console.log(`📝 ${tarea.id}. ${tarea.nombre} - ${estado}`);
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
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log("==== 📝 GESTOR DE TAREAS ====");
  console.log("1️⃣ Crear tarea");
  console.log("2️⃣ Listar tareas");
  console.log("3️⃣ Completar tarea");
  console.log("4️⃣ Eliminar tarea");
  console.log("5️⃣ Salir\n");

  rl.question("👉 Selecciona una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        rl.question("✏️ Escribe el nombre de la tarea: ", (nombre) => {
          crearTarea(nombre);
          mostrarMenu();
        });
        break;
      case "2":
        listarTareas();
        mostrarMenu();
        break;
      case "3":
        rl.question("✅ ID de la tarea a completar: ", (id) => {
          completarTarea(parseInt(id));
          mostrarMenu();
        });
        break;
      case "4":
        rl.question("🗑️ ID de la tarea a eliminar: ", (id) => {
          eliminarTarea(parseInt(id));
          mostrarMenu();
        });
        break;
      case "5":
        console.log("👋 ¡Hasta luego!");
        rl.close();
        break;
      default:
        console.log("❌ Opción inválida. Intenta de nuevo.\n");
        mostrarMenu();
        break;
    }
  });
}

// Iniciar menú
mostrarMenu();
