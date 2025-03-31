async function captureAndCopyToClipboard() {
    const element = document.getElementById("targetElement");
    if (!element) return;

    const canvas = await html2canvas(element);
    canvas.toBlob(async (blob) => {
        try {
            await navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob })
            ]);
            alert("Скриншот скопирован в буфер обмена!");
        } catch (err) {
            console.error("Ошибка копирования:", err);
        }
    });
}