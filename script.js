
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
        <tr class=informacionFila>
            <td> ${nombre.value} </td>
            <td> ${edad.value} </td>
            <td> ${carrera.value} </td>
            <td> ${correo.value} </td>
            <td> <button class="editar" hidden>Editar</button> </td>
            <td> <button class="eliminar">Eliminar</button> </td>
            
        </tr>
    `
}

btnAgregar.addEventListener("click", () => {
    event.preventDefault(); 
    agregar();
});

const infoFila = document.querySelectorAll("informacionFila");

document.addEventListener('mouseover', (e) => {
    if (e.target.className == infoFila.className){
        const btnAgregar = e.getElementById("eliminar");
        btnAgregar.hidden = false;
    }
    
});

