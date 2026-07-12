const Outer = document.querySelector(".Outer");
for (let i =0; i<16; i++){
    div = document.createElement("div");
    div.classList.add("row");
    div.style.display = "flex";
    for (let k = 0; k <16; k++){
        innerdiv = document.createElement("div");
        innerdiv.classList.add("box");
        innerdiv.style.border = "2px solid black";
        innerdiv.style.height = "40px";
        innerdiv.style.width="40px";
        div.appendChild(innerdiv);
    }
    Outer.appendChild(div);
}

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "red";
    });
});