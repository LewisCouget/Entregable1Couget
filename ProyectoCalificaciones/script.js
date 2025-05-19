// 🚀CANTIDAD DE ALUMNOS🚀

function pedirCantidadAlumnos() {
  let numeroDeAlumnos;
  do {
    numeroDeAlumnos = Number(prompt("¿Cuántos alumnos desea ingresar?"));
    if (isNaN(numeroDeAlumnos) || numeroDeAlumnos <= 0) {
      alert("Por favor, ingrese un número válido de alumnos!");
    }
  } while (isNaN(numeroDeAlumnos) || numeroDeAlumnos <= 0);

  const listaAlumnos = mostrarAlumnos(numeroDeAlumnos);
  mostrarListaAlumnos(listaAlumnos);
}

//#########################################################################################################

// 🚀DATO DE ALUMNOS🚀

function datoAlumno() {
  class Persona {
    constructor(nombre, edad, calificacion) {
      this.nombre = nombre;
      this.edad = edad;
      this.calificacion = calificacion;
    }

    registro() {
      console.log(
        `Alumno ${this.nombre} de ${this.edad}, calificaión ${this.calificacion}`
      );
    }
  }

  let nombre;
  let edad;
  let calificacion;

  do {
    nombre = prompt("Ingrese su nombre");
    if (
      typeof nombre !== "string" ||
      nombre.trim() === "" ||
      /\d/.test(nombre)
    ) {
      alert("Por favor, ingrese su nombre sin digitos!");
    }
  } while (
    typeof nombre !== "string" ||
    nombre.trim() === "" ||
    /\d/.test(nombre)
  );

  do {
    edad = Number(prompt("Ingrese su edad"));
    if (isNaN(edad) || edad <= 17 || edad > 70) {
      alert("Por favor, ingrese numeros entre 17 y 70!");
    }
  } while (isNaN(edad) || edad <= 17 || edad > 70);

  do {
    calificacion = Number(prompt("Ingrese su calificación"));
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
      alert("Por favor, ingrese numeros entre 0 y 100!");
    }
  } while (isNaN(calificacion) || calificacion < 0 || calificacion > 100);

  const alumno = new Persona(nombre, edad, calificacion);
  console.log(alumno);
  return alumno;
}

//#########################################################################################################

// 🚀TEST CALIFICACIONES🚀

function testCalificacion(alumno) {
  const APROBADO = alumno.calificacion >= 70;
  const REPROBADO = alumno.calificacion < 70 && alumno.calificacion > 40;
  const SINEXAMEN = alumno.calificacion <= 30;

  if (APROBADO) {
    console.log(
      `${alumno.nombre} está APROBADO! con una calificación de ${alumno.calificacion}!`
    );
  } else if (REPROBADO) {
    console.log(
      `${alumno.nombre} está REPROBADO con una calificación de ${alumno.calificacion}, pero tiene derecho a examen!`
    );
  } else if (SINEXAMEN) {
    console.log(
      `${alumno.nombre} no tiene derecho a examen. Calificación de ${alumno.calificacion} :(`
    );
  }
  console.log("");
  console.log("");
}

//#########################################################################################################

// 🚀MOSTRAR ALUMNOS🚀

function mostrarAlumnos(cantidadAlumnos) {
  const listaAlumnos = [];
  for (let i = 0; i < cantidadAlumnos; i++) {
    console.log(`---  Dato de alumno N°${i + 1}  ---`);
    const nuevoAlumno = datoAlumno();
    if (nuevoAlumno) {
      testCalificacion(nuevoAlumno);
      listaAlumnos.push(nuevoAlumno);
    }
  }
  return listaAlumnos;
}

// 🚀MOSTRAR UN ARRAY DE ALUMNOS🚀

function mostrarListaAlumnos(listaAlumnos) {
  console.log("--- Lista de alumnos ingresados ---");
  console.log(listaAlumnos);
}

document.addEventListener("DOMContentLoaded", function () {
  const botonIniciar = document.getElementById("iniciarProceso");
  if (botonIniciar) {
    botonIniciar.addEventListener("click", pedirCantidadAlumnos);
  }
});
