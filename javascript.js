const Outer = document.querySelector(".Outer");
const sizebutton = document.querySelector("#size");
const clearbutton = document.querySelector('#clear');
let boxes = [];

function removeBoxes(){
    console.log(boxes);
    boxes.forEach((box) => {
        box.remove();
    });
};

function defineGrid(size){
    boxes = document.querySelectorAll(".box");
    if (boxes.length>0){
        removeBoxes();
    }
    for (let i =0; i<size; i++){
        div = document.createElement("div");
        div.classList.add("row");
        div.style.display = "flex";
        for (let k = 0; k <size; k++){
            innerdiv = document.createElement("div");
            innerdiv.classList.add("box");
            innerdiv.style.border = "2px solid black";
            innerdiv.style.height = "40px";
            innerdiv.style.width="40px";
            div.appendChild(innerdiv);
        }
        Outer.appendChild(div);
    }
    boxes = document.querySelectorAll(".box"); 
    attachHoverListeners();
}

function attachHoverListeners(){
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "red";
        });
    });
}

clearbutton.addEventListener("click", () => {
    if (boxes.length > 0){
        boxes.forEach((box) => {
            box.style.backgroundColor = "white";
        });
    };
});

sizebutton.addEventListener("click", () => {
    let size = parseInt(prompt("Enter your grid size"));
    defineGrid(size);
})

defineGrid(16);