function updateTitleIcon() {
  const icnTitle = document.getElementById("title-icon");
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    icnTitle.href = "Resources/Vectors/LogoRidotto_Light.svg";
  } else {
    icnTitle.href = "Resources/Vectors/LogoRidotto.svg";
  }
}

updateTitleIcon();    // Avvio della pagina web

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateTitleIcon);    // Aggiornamento automatico

const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}