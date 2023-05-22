const eleccionMeses = document.querySelector("#cantidad");
const selectCantidad = document.querySelector("#meses-suscripcion");


function generarOpciones() {
    
    selectCantidad.innerHTML = "";
    
    for (let i = 0; i < (eleccionMeses.value); i++) {
        
        switch (i) {
            case 0:
                selectCantidad.innerHTML += `
                <option value="">Seleccione </option>
           `;  
        
        }

        selectCantidad.innerHTML += `
             <option value="">Meses : ${i+1} </option>
        
        `;
        
    }
}