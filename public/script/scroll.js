window.addEventListener("scroll", function(){

    const header = document.getElementById("main")
    header.classList.toggle("shadow", window.scrollY > 0)

})