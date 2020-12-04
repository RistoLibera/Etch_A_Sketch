const container=document.querySelector(".container");
const buttons = document.querySelector(".buttons");
const newPixelButton=buttons.firstElementChild;
const tenDarkButton =buttons.lastElementChild;

let changePixelColor=function(){
    this.style.backgroundColor=`hsl(${Math.random() * 360},100%,40%)`;

}


let createPixel=function(pixelNumber){
    container.style.gridTemplateRows=`repeat(${pixelNumber},1fr)`;
    container.style.gridTemplateColumns=`repeat(${pixelNumber},1fr)`;
    let pixelCounts=pixelNumber*pixelNumber;
    for(let i=0;i<pixelCounts;i++){
        const pixelGrid = document.createElement("div");
        container.insertAdjacentElement("beforeend",pixelGrid);
        
    }
    const createdPixel=container.querySelectorAll("div");
    createdPixel.forEach(pixelGrid=>pixelGrid.addEventListener("mouseover",changePixelColor));
    
}

createPixel(4);

let createNewPixel=function(){
    let pixelNumber=prompt("Please input a new number",4);
    const allDiv=container.querySelectorAll("div");
    allDiv.forEach(eachDiv=>eachDiv.remove());
    createPixel(pixelNumber);
    
}

let activateDark=function(){
    const createdPixel=container.querySelectorAll("div");
    createdPixel.forEach(pixelGrid=>pixelGrid.removeEventListener("mouseover",changePixelColor));
    createdPixel.forEach(pixelGrid=>pixelGrid.addEventListener("mouseover",turnGray));
    this.classList.toggle("activate");
    
}

let turnGray=function (){
    if (this.style.backgroundColor.match(/rgba/)) {
        let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
        if (currentOpacity <= 0.9) {
            this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
        }
    } else if (this.style.backgroundColor == 'rgb(0, 0, 0)') {
        return;
    } else {
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
    }
        
}


newPixelButton.addEventListener("click",createNewPixel);
tenDarkButton.addEventListener("click",activateDark);



