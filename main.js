
addEventListener("DOMContentLoaded", (e) => {
    let montos = 0;
    let descuento = 0;
    let message2 = "Ingrese un monto positivo."
    addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.submitter.dataset.operacion != "Limpiar") {
            let data = Object.fromEntries(new FormData(e.target));
            let imput =  document.querySelector('#num');
            imput.value = "";
            imput.focus();
            if(data.monto < 0){
                document.querySelector('[id="controls1"]').value = message2;
            }else{
                montos += Number(data.monto);
                if (montos > 0 && montos <= 10000) {
                    document.querySelector('#controls1').value = "El total a pagar sin descuento es $" + montos + " pesos";
                } else if (montos > 10000) {
                    let montos2 = montos - (montos * 0.10);
                    console.log(document.querySelector('#controls2'));
                    document.querySelector('#controls2').value = "El total a pagar con descuento es $" + montos2 + " pesos";
                    document.querySelector('#controls1').value = "El total a pagar sin descuento es $" + montos + " pesos";
                }
            }
        }
        else {
            location.reload();
        }
    })
});
