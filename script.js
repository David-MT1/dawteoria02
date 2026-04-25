
//ESTA SERA LA CONSTANTE PARA MODIFICAR EL DIV-RESULTADO
const divResultado = document.getElementById("resultado");



//CLEAN DE DAVIID

function clean(){
    divResultado.innerHTML = "";
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
        <tr>
            <td> ${nombre.value} </td>
            <td> ${edad.value} </td>
            <td> ${carrera.value} </td>
            <td> ${correo.value} </td>
        </tr>
    `
}

btnAgregar.addEventListener("click", () => {
    event.preventDefault(); 
    agregar();
});
