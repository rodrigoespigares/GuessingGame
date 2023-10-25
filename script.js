function allColors(){
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
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
        let i=0;
        for (const container of containers) {
            if(i>=3){
                
                container.className = "oculto";
            }
            i++;
        }
    })
    hardBtn.addEventListener("click",() => {
        for (const container of containers) {
            container.className = "colores";
        }
    })
}
let clic = false;
function aleatorio(){
    
    let newColor = document.getElementById("new");
    newColor.addEventListener("click", () => {
        let winnerColor = win();
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
    })
}