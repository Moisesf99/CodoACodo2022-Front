function TotalAAbonar(Cantidad, Categoria) {
    const PrecioTicket = 200;
    let Total = Cantidad * PrecioTicket;

    switch (Categoria) {
        case "Estudiante":
            Total = (Total * 0.20)
            break;

        case "Trainee":
            Total = (Total * 0.50)
            break;
        case "Junior":
            Total = (Total * 0.85)
            break;
    }
    return Total
}


function Comprar () {

    let boton = document.getElementById("Resumen")

    if(boton){
    boton.addEventListener('click',() =>{
        console.log('Boton Clicked')
        boton.addEventListener("submit",e=>{
            e.preventDefault();
        })
        boton.addEventListener("click",()=>{
            let Cantidad = document.getElementById("Cantidad").value
            let Categoria = document.getElementById("Categoria").value
        
            let Valor = TotalAAbonar(Cantidad,Categoria)
        
            let divMensaje = document.getElementById("Resultado")
            divMensaje.textContent = "Total a pagar: $" + Valor
        }
        )
    })
    
    }

}




