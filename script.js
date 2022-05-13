const container = document.querySelector(".container");
const pixelNumInput = document.querySelector("#pixel-num")
let pixelNum = 16;

for (let i = 0; i < pixelNum*pixelNum; i++) {
    let minDiv = document.createElement("div");
    minDiv.classList.add("pixel");
    container.appendChild(minDiv);
}

pixelNumInput.addEventListener("input", () => {
    pixelNum = pixelNumInput.value;
    console.log(pixelNum);
    container.innerHTML = "";
    for (let i = 0; i < pixelNum*pixelNum; i++) {
        let minDiv = document.createElement("div");
        minDiv.classList.add("pixel");
        container.appendChild(minDiv);
    }
    const pixels = document.querySelectorAll(".pixel");
    const colorPicker = document.querySelector("#color-picker");
    let targetColor = "black";

    colorPicker.addEventListener("input", () => {
        targetColor = colorPicker.value; 
    }, false);

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = targetColor;
        });
        pixel.style.width = ((450 / pixelNum) - 2) + "px";
        pixel.style.height = ((450 / pixelNum) - 2) + "px";
    });
});

const pixels = document.querySelectorAll(".pixel");
const colorPicker = document.querySelector("#color-picker");
let targetColor = "black";

colorPicker.addEventListener("input", () => {
    targetColor = colorPicker.value; 
}, false);

pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = targetColor;
    });
    pixel.style.width = ((450 / pixelNum) - 2) + "px";
    pixel.style.height = ((450 / pixelNum) - 2) + "px";
});
