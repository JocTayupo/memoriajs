function createCricle(color){
    let circle;
    circle = document.createElement("div");
    circle.classList.add('circulo');
    circle.style.backgroundColor = color ;
    return circle;
}

function aleatorioIndex(array){
    return parseInt(Math.random() * (array.length - 0) + 0);
}

function showCurtain(ids){
    for (let i = 0; i < ids.length; i++) {
        let cortina = document.getElementById(`cor_${ids[i]}`);
        cortina.classList.add('cortina'); 
    }
}

function gameOver(tarjetas,parejas){
    let complete = 0;
    if((tarjetas.length/2) == parejas){
        let boton = document.getElementById('boton');
        boton.style.display ='flex';
        boton.addEventListener("click",function(){
            location.reload();
        });
        complete = 1;
    }

    return complete;
}

function main(){
    let tarjetas = document.getElementsByClassName('tarjeta');
    let parejas = 0;
    let seleccionados = [];
    let complete = 0;
    let colores = ['#f90429','#7657f2','#0d9914','#ddd60f','#1980e8','#989ca0','#43EF4C','#FD9BA9','#90C2F4','#A999EB','#F58A07'];
    let indicesTarjetas = [];
    let segundos = 0;
    let indice,tarjeta1,tarjeta2;
    const selectCard =  ()=> {
        let tarjeta;
        tarjeta = aleatorioIndex(indicesTarjetas);
        tarjeta = indicesTarjetas.indexOf(tarjeta);
        tarjeta = indicesTarjetas.splice(tarjeta,1);
        return tarjeta;
    }

    const addEvent = (tarjeta) =>{
         tarjeta.addEventListener("click",function(){
             console.log(seleccionados);
             if(seleccionados.length<2){
                let cortina = document.getElementById(`cor_${this.id}`);
                seleccionados.push(this);
                cortina.classList.remove ('cortina');
                if(seleccionados.length == 2 ){
                    if(seleccionados[0].getAttribute("data-color") == seleccionados[1].getAttribute("data-color")){
                        parejas+=1;
                        seleccionados = [];
                        complete = gameOver(tarjetas,parejas);
                    }else{
                        setTimeout(function name() {
                            showCurtain([seleccionados[0].id,seleccionados[1].id]);
                            seleccionados = [];
                        },1500);
                        
                    }
                }
             }
             console.log(seleccionados);
             
         })
        
    }

    for (let i = 0; i < tarjetas.length; i++) {
        indicesTarjetas.push(i);       
    }
    for (i = 0; i < 6; i++) {
        color = aleatorioIndex(colores);
        color = colores.splice(color,1);
        tarjeta1 = selectCard();
        tarjeta2 = selectCard();
        tarjetas[tarjeta1].appendChild(createCricle(color));
        tarjetas[tarjeta2].appendChild(createCricle(color));
        tarjetas[tarjeta1].setAttribute('data-color',color);
        tarjetas[tarjeta2].setAttribute('data-color',color);
        addEvent(tarjetas[tarjeta1]);
        addEvent(tarjetas[tarjeta2]);
    } 
        setInterval(function(){
            if (complete == 0){
            let cronometro;
            segundos+=1;
            cronometro = document.getElementById('cronometro');
            cronometro.innerHTML = segundos;}
         }, 1000);


}


