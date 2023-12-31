let vidas = 3;

function allColors(){
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

function win(){
    winnerColor = allColors();
    document.getElementById("aleatorio").innerHTML = winnerColor;
    return winnerColor;
}

function dificult(){
    let containers = document.querySelectorAll(".colores");
    let easyBtn = document.getElementById("easy");
    let hardBtn = document.getElementById("hard");
    
    easyBtn.addEventListener("click",() => {
        easyBtn.style.backgroundColor = "SlateBlue"
        easyBtn.style.color = "white"
        hardBtn.style.backgroundColor = "transparent"
        hardBtn.style.color = "black"
        vidas = -1;
        let i=0;
        for (const container of containers) {
            if(i>=3){
                container.className = "oculto";
            }
            i++;
        }
    })
    hardBtn.addEventListener("click",() => {
        easyBtn.style.backgroundColor = "transparent"
        easyBtn.style.color = "black"
        hardBtn.style.backgroundColor = "SlateBlue"
        hardBtn.style.color = "white"
        vidas = -1;
        for (const container of containers) {
            container.className = "colores";
        }
    })
}
let clic = false;
function aleatorio(){
    let header = document.querySelector("header");
    let newColor = document.getElementById("new");
    newColor.addEventListener("click", () => {
        header.style.backgroundColor = "SlateBlue";
        jugando(header);
    })
}

function jugar(){
    dificult();
    aleatorio();
    
    let header = document.querySelector("header");
    let intentos = document.getElementById("intentos");
    let colores = document.getElementById("contenedorColores");
    let containers = document.querySelectorAll(".colores");
        colores.addEventListener("click",(e) => {
            let comprobar = intentos.innerHTML;
            if(vidas >=0 && comprobar!="WIN!" && comprobar!="CLICK NEW GAME TO PLAY"){
                let winner = document.getElementById("aleatorio").innerHTML;
                let color = e.target.style.backgroundColor;
                if(color == winner){
                    intentos.innerHTML="WIN!"
                    header.style.backgroundColor = winner;
                    for (const container of containers) {
                        container.style.transition = "1s";
                        container.style.backgroundColor=winner;
                    }
                }else{
                    intentos.innerHTML=`TRY NOW ${vidas}/3`
                    e.target.style.transition = "1s"
                    e.target.style.backgroundColor = "transparent"
                    vidas--;
                }
            }else{
                intentos.innerHTML=`CLICK NEW GAME TO PLAY`
            }
        })
    
    
}

function jugando(){
    
    let hardBtn = document.getElementById("hard");
        let easyBtn = document.getElementById("easy");
        if(easyBtn.style.backgroundColor == "transparent"){
            hardBtn.style.backgroundColor = "SlateBlue";
            hardBtn.style.color = "white";

        }
        vidas = 3;
        intentos.innerHTML=``;
        
        winnerColor = win();
        let containers = document.querySelectorAll(".colores");
        let i=0;
        let ganador = Math.floor(Math.random()*containers.length);
        for (const container of containers) {
            if(i==ganador){
                container.style.backgroundColor = winnerColor;
            }else{
                container.style.backgroundColor = allColors();
            }
            i++;
        }
}