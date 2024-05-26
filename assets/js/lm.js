window.addEventListener("load", updateBackgroundPosition);
window.addEventListener("resize", updateBackgroundPosition);
window.addEventListener("scroll", updateBackgroundPosition);

function updateBackgroundPosition() {
    const bgSvg = document.querySelector(".eye");

    const windowTop = window.scrollY;
    const elementTop = bgSvg.offsetTop;
    const leftPosition = windowTop - elementTop;

    bgSvg.style.backgroundPosition = `left ${leftPosition}px center`;
}
