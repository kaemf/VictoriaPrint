async function captureAndCopyToClipboard() {
    const element = document.getElementById("targetElement");
    if (!element) return;

    const canvas = await html2canvas(element);
    canvas.toBlob(async (blob) => {
        try {
            await navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob })
            ]);
            
            popup.style.opacity = 1;
            popup.style.visibility = "visible";
            popupContent.style.transform = 'scale(1)';
            popupContent.style.opacity = 1;

            success.style.display = 'block';

            setTimeout(() => {
                popupContent.style.transform = 'scale(0)';
                popupContent.style.opacity = 0;
                success.style.display = 'none';
            }, 1100);

            setTimeout(() => {
                popup.style.opacity = 0;
                popup.style.visibility = "hidden";
            }, 1200);
        } catch (err) {
            console.error("Ошибка копирования:", err);
        }
    });
}