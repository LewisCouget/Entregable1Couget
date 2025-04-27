// 🚀CANTIDAD DE ALUMNOS🚀

function pedirCantidadAlumnos() {
  let numeroDeAlumnos;
  do {
    numeroDeAlumnos = Number(prompt("¿Cuántos alumnos desea ingresar?"));
    if (isNaN(numeroDeAlumnos) || numeroDeAlumnos <= 0) {
      alert("Por favor, ingrese un número válido de alumnos!");
    }
  } while (isNaN(numeroDeAlumnos) || numeroDeAlumnos <= 0);

  mostrarAlumnos(numeroDeAlumnos);
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
  } while (
    typeof nombre !== "string" ||
    nombre.trim() === "" ||
    /\d/.test(nombre)
  );

  do {
    edad = Number(prompt("Ingrese su edad"));
  } while (isNaN(edad) || edad <= 0 || edad > 100);

  do {
    calificacion = Number(prompt("Ingrese su calificación"));
  } while (isNaN(calificacion) || calificacion < 0 || calificacion > 10);

  const alumno = new Persona(nombre, edad, calificacion);
  console.log(alumno);
  return alumno;
}

//#########################################################################################################

// 🚀TEST CALIFICACIONES🚀

function testCalificacion(alumno) {
  const APROBADO = alumno.calificacion >= 7;
  const REPROBADO = alumno.calificacion < 7 && alumno.calificacion > 4;
  const SINEXAMEN = alumno.calificacion <= 3;

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
  for (let i = 0; i < cantidadAlumnos; i++) {
    console.log(`---  Dato de alumno N°${i + 1}  ---`);
    const nuevoAlumno = datoAlumno();
    if (nuevoAlumno) {
      testCalificacion(nuevoAlumno);
    }
  }
}

pedirCantidadAlumnos();
