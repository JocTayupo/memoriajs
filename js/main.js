function main(){
    let tarjetas = document.getElementsByClassName('tarjeta');
    var segundos = 0;
    let colores = [
                    '#00BD9D',
                    '#CD5334',
                    '#2E282A',
                    '#113537',
                    '#F7B32B',
                    '#667761',
                    '#87D68D',
                    '#FF715B',
                    '#5D5F71',
                    '#CB9CF2',
                    '#0E1116',
                    '#B0DB43',
                    '#46351D',
                    '#474B24'
                ];
    let indicesTarjetas = [];
    let indice,seleccion,tarjeta1,tarjeta2,indicet1,indicet2,elemento;
    ///Preparar indice de las tarjetas
    for (let i = 0; i < tarjetas.length; i++) {
        indicesTarjetas.push(i);       
    }
    console.log(indicesTarjetas);
    //sortear figuras
    for (i = 0; i < 6; i++) {
        indice = parseInt(Math.random() * (colores.length - 0) + 0);
        seleccion = colores.splice(indice,1);
        elemento = document.createElement("div"); 
        elemento.classList.add('circulo');
        elemento.style.backgroundColor = seleccion ;

        elemento2 = document.createElement("div"); 
        elemento2.classList.add('circulo');
        elemento2.style.backgroundColor= seleccion;
        //seleccionar tarjeta 1
        indicet1 = parseInt(Math.random() * (indicesTarjetas.length - 0) + 0);
        indicet2 = parseInt(Math.random() * (indicesTarjetas.length - 0) + 0);
        indicet1 = indicesTarjetas.indexOf(indicet1);
        indicet2 = indicesTarjetas.indexOf(indicet2);

        tarjeta1 = indicesTarjetas.splice(indicet1,1);
        tarjeta2 = indicesTarjetas.splice(indicet2,1);
        tarjetas[tarjeta1].appendChild(elemento);
        tarjetas[tarjeta2].appendChild(elemento2);


    } 

    setInterval(function(){
        let cronometro;
        segundos+=1;
        cronometro = document.getElementById('cronometro');
        cronometro.innerHTML = segundos;
     }, 1000);

}


