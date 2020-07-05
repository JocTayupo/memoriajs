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

function gameOver(cards,pairs){
    let final = 0;
    if((cards.length/2) == pairs){
        let boton = document.getElementById('boton');
        boton.style.display ='flex';
        boton.addEventListener("click",function(){
            location.reload();
        });
        final = 1;
    }
    return final;
}

function main(){
    let colorList = ['#f90429','#7657f2','#0d9914','#ddd60f','#1980e8','#989ca0','#43EF4C','#FD9BA9','#90C2F4','#A999EB','#F58A07'];
    let cardList = document.getElementsByClassName('tarjeta');
    let indexCards = [];
    let selectedCards = [];
    let pairs = 0;
    let final = 0;
    let seconds = 0;
    let card;
    let color;

    const selectCard =  ()=> {
        let card;
        card = aleatorioIndex(indexCards);
        card = indexCards.indexOf(card);
        card = indexCards.splice(card,1);
        return card;
    }

    const addEvent = (card) =>{
        card.addEventListener("click",function(){
        if(selectedCards.length < 2 && !this.classList.contains('disabled')){
            console.log(this);
            let cortina = document.getElementById(`cor_${this.id}`);
            selectedCards.push(this);
            cortina.classList.remove ('cortina');
            this.classList.add('disabled');
            if(selectedCards.length == 2 ){
                if(selectedCards[0].getAttribute("data-color") == selectedCards[1].getAttribute("data-color")){
                    pairs += 1;
                    selectedCards = [];
                    final = gameOver(cardList,pairs);
                }else{
                    selectedCards[0].classList.remove('disabled');
                    selectedCards[1].classList.remove('disabled');
                    setTimeout(function name() {
                        showCurtain([selectedCards[0].id,selectedCards[1].id]);
                        selectedCards = [];
                    },1500);
                        
                }
            }
        }      
        })      
    }
    
    for (let i = 0; i < cardList.length; i++) {
        indexCards.push(i);       
    }

    /// Inicializacion de las tarjetas en el tablero 
    for (i = 0; i < cardList.length/2; i++) {
        color = aleatorioIndex(colorList);
        color = colorList.splice(color,1);
        //tarjeta1
        card = selectCard();
        cardList[card].appendChild(createCricle(color));
        cardList[card].setAttribute('data-color',color);
        addEvent(cardList[card]);
        //tarjeta2
        card = selectCard();
        cardList[card].appendChild(createCricle(color));
        cardList[card].setAttribute('data-color',color);
        addEvent(cardList[card]);
    } 

    setInterval(function(){
        if (final == 0){
            seconds += 1;
            clock = document.getElementById('clock');
            clock.innerHTML = seconds;}
        }, 1000);


}


