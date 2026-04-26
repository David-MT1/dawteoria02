const btnColor = document.getElementById("btnColor");
const divResultado = document.getElementById("resultado");

let nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const carrera = document.getElementById("carrera");
const correo = document.getElementById("correo");

const contentTabla = document.getElementById("contentTabla");

//CLEAN
/*ESTA FUNCION SE ENCARGA DE LIMPIAR EL DIVRESULTADO,
HACIENDO QUE TODAS LAS TABLAS SE ELIMINEN Y
EL DIV QUEDE VACIO TAL CUAL COMO SOSPECHAMOS XD */

function clean(){
    contentTabla.innerHTML = "";
    visibilidadTabla();
}


visibilidadTabla();
//VISIBILIDAD TABLA
function visibilidadTabla(){
    const numeroFilas = contentTabla.querySelectorAll(".informacionFila").length;
    
    if (numeroFilas > 0) {
        divResultado.style.display = "block";
    } else {
        divResultado.style.display = "none";
    }
}

//FUNCIÓN AGREGAR
function agregar(){
    contentTabla.innerHTML += `
        <tr class=informacionFila>
            <td> ${nombre.value} </td>
            <td> ${edad.value} </td>
            <td> ${carrera.value} </td>
            <td> ${correo.value} </td>
            <td class="celda-acciones"> 
                <button class="editar" style="visibility: hidden;">Editar</button>
                <button class="eliminar" style="visibility: hidden;">Eliminar</button>
            </td>
        </tr>
    `

    const celdas = document.querySelectorAll("tbody td:not(.celda-acciones)");
    
    if (document.body.style.backgroundColor === "rgb(240, 242, 245)" || document.body.style.backgroundColor === "") {
        celdas.forEach(td => td.style.backgroundColor = "#fff");    
        celdas.forEach(td => td.style.color = "#333");
    }else {
        celdas.forEach(td => td.style.backgroundColor = "#4b647e"); 
        celdas.forEach(td => td.style.color = "#fff");
    }
    visibilidadTabla();
}

//EJECUCIÓN DE AGREGAR
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const valNombre = nombre.value.trim();
    const valEdad = edad.value.trim();
    const valCarrera = carrera.value.trim();
    const valCorreo = correo.value.trim();

    if (valNombre === "" || valEdad === "" || valCarrera === "" || valCorreo === "") {
        alert("Todos los campos son obligatorios");
        return;
    }
    
    agregar();
    formulario.reset();
});


//MANEJO DE LA VISIBILIDAD DE LOS BOTONES
contentTabla.addEventListener("mouseover", (e) => {
    const fila = e.target.closest(".informacionFila");
    if (fila) {
        fila.querySelectorAll(".editar, .eliminar").forEach(btn => btn.style.visibility = "visible");
    }
});

contentTabla.addEventListener("mouseout", (e) => {
    const fila = e.target.closest(".informacionFila");
    if (fila) {
        fila.querySelectorAll(".editar, .eliminar").forEach(btn => btn.style.visibility = "hidden");
    }
});

// FUNCIÓN PARA CAMBIAR EL COLOR DE FONDO
function cambiarFondo() {
    const celdas = document.querySelectorAll("tbody td:not(.celda-acciones)");
    const formulario = document.getElementById("formulario")

    if (document.body.style.backgroundColor === "rgb(240, 242, 245)" || document.body.style.backgroundColor === "") {
        document.body.style.backgroundColor = "#2c3e50"; 
        document.body.style.color = "#ffffff";  
        formulario.style.backgroundColor = "#4b647e";
        formulario.querySelectorAll("input").forEach(input => {
            input.style.backgroundColor = "#324254";
            input.style.color = "#ffffff";
        });
        
        celdas.forEach(td => td.style.backgroundColor = "#4b647e"); 
        celdas.forEach(td => td.style.color = "#fff");
        btnColor.innerText = "Modo Claro";
    } else {
        document.body.style.backgroundColor = "#f0f2f5"; 
        document.body.style.color = "#222";
        formulario.style.backgroundColor = "#ffffff";
        formulario.querySelectorAll("input").forEach(input => {
            input.style.backgroundColor = "#ffffff";
            input.style.color = "#000000";
        });

        celdas.forEach(td => td.style.backgroundColor = "#fff");    
        celdas.forEach(td => td.style.color = "#333");
        btnColor.innerText = "Modo Oscuro";
    }
}

btnColor.addEventListener("click", cambiarFondo);

//EDITAR
contentTabla.addEventListener("click", (e) => {
    // LÓGICA PARA ELIMINAR FILA
    if (e.target.classList.contains("eliminar")) {
        const fila = e.target.closest("tr");
        fila.remove();
        visibilidadTabla();
    }

    // LÓGICA PARA EDITAR FILA
    if (e.target.classList.contains("editar")) {
        const fila = e.target.closest("tr");
        const celdas = fila.getElementsByTagName("td");
        // Pedir Nombre
        let nuevoNombre;
        while (true) {
            nuevoNombre = prompt("Editar Nombre:", celdas[0].innerText);
            if (nuevoNombre === null) break; // Si cancela, sale del bucle
            if (nuevoNombre.trim() !== "") {
                celdas[0].innerText = nuevoNombre;
                break;
            }
            alert("El nombre no puede estar vacío");
        }
        // Pedir Edad (Solo números)
        let nuevaEdad;
        while (true) {
            nuevaEdad = prompt("Editar Edad (Solo números):", celdas[1].innerText);
            if (nuevaEdad === null) break; 
            const edadNum = parseInt(nuevaEdad);
            if (nuevaEdad.trim() !== "" && !isNaN(nuevaEdad) && edadNum > 0) {
                celdas[1].innerText = nuevaEdad;
                break;
            } else {
                alert("Por favor, ingresa un número válido para la edad");
            }
        }
        // Pedir Carrera
        let nuevaCarrera;
        while (true) {
            nuevaCarrera = prompt("Editar Carrera:", celdas[2].innerText);
            if (nuevaCarrera === null) break;
            if (nuevaCarrera.trim() !== "") {
                celdas[2].innerText = nuevaCarrera;
                break;
            }
            alert("La carrera no puede estar vacía");
        }
        // Pedir Correo
        let nuevoCorreo;
        while (true) {
            nuevoCorreo = prompt("Editar Correo:", celdas[3].innerText);
            if (nuevoCorreo === null) break;
            if (nuevoCorreo.trim() !== "" && nuevoCorreo.includes("@")) {
                celdas[3].innerText = nuevoCorreo;
                break;
            }
            alert("Ingresa un correo electrónico válido");
        }
    }
});
