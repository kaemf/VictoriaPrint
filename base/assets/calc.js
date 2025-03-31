const colorInput = document.querySelector(".colorInput"),
    b_wInput = document.querySelector(".b_wInput");

const multipliers = {
    color: 6,
    b_w: 3
}

colorInput.addEventListener("input", () => {
    const color = colorInput.value,
        black = b_wInput.value;

    const out = color * multipliers.color,
        total = (color * multipliers.color) + (black * multipliers.b_w);
    document.querySelector(".color > .data").textContent = `${out} грн`;
    document.querySelector(".total-price > .data").textContent = `${total} грн`;
})

b_wInput.addEventListener("input", () => {
    const color = colorInput.value,
        black = b_wInput.value;

    const out = black * multipliers.b_w,
        total = (color * multipliers.color) + (black * multipliers.b_w);
    document.querySelector(".b_w > .data").textContent = `${out} грн`;
    document.querySelector(".total-price > .data").textContent = `${total} грн`;
})