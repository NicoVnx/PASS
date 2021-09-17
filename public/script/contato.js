document.addEventListener("DOMContentLoaded", function () {
    const conti = document.querySelector("div.cont.i")
    const contii = document.querySelector("div.cont.ii")
    const btna = document.querySelector("button.avancar")
    const btnb = document.querySelector("button.voltar")

    
      btna.addEventListener("click", function (event) {
      conti.classList.add("hide")
        contii.classList.add("show")
        btnb.classList.remove("hide")})

      btnb.addEventListener("click", function (event) {
        conti.classList.remove("hide")
        contii.classList.remove("show")
        btnb.classList.add("hide")})
    });
      





