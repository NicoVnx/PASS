window.addEventListener("scroll", function(){

    const header = document.getElementById("header")
    header.classList.toggle("shadow", window.scrollY > 0)

})