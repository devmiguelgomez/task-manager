const readline = require('readline');

// Lista de tareas (simulación en memoria)
let tareas = [];
// === GENERAR ID ÚNICO ===
let currentId = 1;
// === CREAR TAREA ===
function crearTarea(tareadescripcion) {
  const nuevaTarea = {
    id: currentId++,
    descripcion: tareadescripcion,
    completada: false,
  };
  tareas.push(nuevaTarea);
  console.log("✅ Tarea creada correctamente.\n");
  return nuevaTarea;
}

// === LISTAR TAREAS ===
function listarTareas() {
  if (tareas.length === 0) {
    console.log("❌ No hay tareas disponibles.\n");
    return;
  }

  console.log("==== TAREAS ====");
  for (let tarea of tareas) {
    console.log(`🆔 ${tarea.id} - 📝 ${tarea.descripcion} - ${tarea.completada ? "✅ Completada" : "❌ No completada"}`);
  }
  console.log("\n");
}


// === MARCAR COMO COMPLETADA ===
function completarTarea(id) {
  let encontrada = false;

  for (let tarea of tareas) {
    if (tarea.id === id) {
      tarea.completada = true;
      console.log(`✅ Tarea "${tarea.descripcion}" marcada como completada!\n`);
      encontrada = true;
      return tarea;
    }
  }

  if (!encontrada) {
    console.log("❌ Tarea no encontrada.\n");
    return "Tarea no encontrada";
  }
}

// === ELIMINAR TAREA ===
function eliminarTarea(id) {
  let tarea = tareas.find(t => t.id === id);
  for (let index = 0; index < tareas.length; index++) {
    if (tareas[index].id === id) {
      tareas.splice(index, 1);
      console.log(`🗑️  Tarea "${tarea.descripcion}" eliminada correctamente.\n`);
      return "Task deleted";
    }
  }
  console.log("⚠️ Tarea no encontrada.\n");
  return "Task not found";
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
        rl.question("✏️ Escribe la descripción de la tarea: ", (descripcion) => {
          crearTarea(descripcion, descripcion); // Corregido para pasar la descripción correctamente
          mostrarMenu();
        });
        break;
      case "2":
        listarTareas();
        mostrarMenu();
        break;
      case "3":
        rl.question("✅ ID de la tarea a completar (Ejemplo: 1,2,3 y etc): ", (id) => {
          completarTarea(parseInt(id));
          mostrarMenu();
        });
        break;
      case "4":
        rl.question("🗑️ ID de la tarea a eliminar (Ejemplo: 1,2,3 y etc): ", (id) => {
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
