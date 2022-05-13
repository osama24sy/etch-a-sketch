const container = document.querySelector(".container");

for (let i = 0; i < 64; i++) {
    let minDiv = document.createElement("div");
    minDiv.classList.add("pixel");
    container.appendChild(minDiv);
}