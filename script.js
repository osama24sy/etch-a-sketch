const container = document.querySelector(".container");

for (let i = 0; i < 64; i++) {
    let minDiv = document.createElement("div");
    minDiv.classList.add("pixel");
    container.appendChild(minDiv);
}

const pixels = document.querySelectorAll(".pixel")
const colorPicker = document.querySelector("#color-picker");
let targetColor = "black";

colorPicker.addEventListener("input", () => {
    targetColor = colorPicker.value; 
}, false);

pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = targetColor;
    });
});