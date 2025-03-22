// @ts-check

const dateSpan = document.getElementById("year")

dateSpan && (dateSpan.innerText = String(new Date().getFullYear()));