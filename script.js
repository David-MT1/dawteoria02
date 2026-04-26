
//ESTA SERA LA CONSTANTE PARA MODIFICAR EL DIV-RESULTADO
const divResultado = document.getElementById("resultado");



//CLEAN DE DAVIID
/*ESTA FUNCION SE ENCARGA DE LIMPIAR EL DIVRESULTADO,
HACIENDO QUE TODAS LAS TABLAS SE ELIMINEN Y
EL DIV QUEDE VACIO TAL CUAL COMO SOSPECHAMOS XD */

function clean(){
    contentTabla.innerHTML = "";
}


const btnAgregar = document.getElementById("agregar");


let nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const carrera = document.getElementById("carrera");
const correo = document.getElementById("correo");

const contentTabla = document.getElementById("contentTabla");


//FUNCIÓN AGREGAR
function agregar(){
    contentTabla.innerHTML += `
        <tr class=informacionFila>
            <td> ${nombre.value} </td>
            <td> ${edad.value} </td>
            <td> ${carrera.value} </td>
            <td> ${correo.value} </td>
            <td id="edit"> <button class="editar" style="visibility: hidden">Editar</button> </td>
            <td id="eliminar"> <button class="eliminar">Eliminar</button> </td>
            
        </tr>
    `
}

btnAgregar.addEventListener("click", () => {
    event.preventDefault(); 
    agregar();
});

contentTabla.addEventListener("mouseover", (e) => {
    const fila = e.target.closest(".informacionFila");
    if (fila) {
        const btnEditar = fila.querySelector(".editar");
        if (btnEditar) btnEditar.style.visibility = "visible";
    }
});

contentTabla.addEventListener("mouseout", (e) => {
    const fila = e.target.closest(".informacionFila");
    if (fila) {
        const btnEditar = fila.querySelector(".editar");
        if (btnEditar) btnEditar.style.visibility = "hidden";
    }
});

contentTabla.addEventListener("click", (e) => {
    // LÓGICA PARA ELIMINAR FILA
    if (e.target.classList.contains("eliminar")) {
        const fila = e.target.closest("tr");
        fila.remove();
    }

    // LÓGICA PARA EDITAR FILA
    if (e.target.classList.contains("editar")) {
        const fila = e.target.closest("tr");
        const celdas = fila.getElementsByTagName("td");

        // Pedimos los nuevos datos (Simple, con prompt)
        const nuevoNombre = prompt("Nuevo nombre:", celdas[0].innerText);
        const nuevaEdad = prompt("Nueva edad:", celdas[1].innerText);
        const nuevaCarrera = prompt("Editar Carrera:", celdas[2].innerText);
        const nuevoCorreo = prompt("Editar Correo:", celdas[3].innerText);

        if (nuevoNombre) celdas[0].innerText = nuevoNombre;
        if (nuevaEdad) celdas[1].innerText = nuevaEdad;
        if (nuevaCarrera !== null) celdas[2].innerText = nuevaCarrera;
        if (nuevoCorreo !== null) celdas[3].innerText = nuevoCorreo;
    }
});
