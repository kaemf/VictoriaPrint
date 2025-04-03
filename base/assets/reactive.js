colorInput.addEventListener("input", () => {
    const length = colorInput.value.length;
    const minWidth = 50;
    const maxWidth = 150;

    if (length >= 3) {
        colorInput.style.width = Math.min(minWidth + (length - 2) * 10, maxWidth) + "px";
    } else {
        colorInput.style.width = minWidth + "px";
    }
});