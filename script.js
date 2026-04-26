
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
            <td id="edit"> <button class="editar" hidden>Editar</button> </td>
            <td id="eliminar"> <button class="eliminar">Eliminar</button> </td>
            
        </tr>
    `
}

btnAgregar.addEventListener("click", () => {
    event.preventDefault(); 
    agregar();
});


document.addEventListener('mouseover', (e) => {
    if (e.target.className == "informacionFila"){
        const infoFila = document.querySelectorAll("informacionFila");
        const btnAgregar = e.getElementById("eliminar");
        btnAgregar.hidden = false;
    }
    
});

