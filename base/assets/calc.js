colorInput.addEventListener("input", () => {
    const color = parseInt(colorInput.value) || 0,
        black = parseInt(b_wInput.value) || 0;

    const out = color * multipliers.color,
        total = (color * multipliers.color) + (black * multipliers.b_w);

    document.querySelector('.count > .color').textContent = color;
    document.querySelector('.count > .total-value').textContent = color + black;
    document.querySelector(".total-price > .color").textContent = `${out} грн`;
    document.querySelector(".total-price > .total-value").textContent = `${total} грн`;
})

b_wInput.addEventListener("input", () => {
    const color = parseInt(colorInput.value) || 0,
        black = parseInt(b_wInput.value) || 0;

    const out = black * multipliers.b_w,
        total = (color * multipliers.color) + (black * multipliers.b_w);

    document.querySelector('.count > .black').textContent = black;
    document.querySelector('.count > .total-value').textContent = color + black;
    document.querySelector(".total-price > .black").textContent = `${out} грн`;
    document.querySelector(".total-price > .total-value").textContent = `${total} грн`;
})