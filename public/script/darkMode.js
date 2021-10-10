const html = document.querySelector("html")
const checkbox = document.getElementById("switch")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    colorTxtHeader: getStyle(html, "--color-txtheader"),
    colorSub: getStyle(html, "--color-sub"),
    colorTxtOne: getStyle(html, "--color-txtone"),
    colorTxtTwo: getStyle(html, "--color-txttwo"),

    colorTxtHomeDest: getStyle(html, "--color-txthomedest"),
    colorBorder: getStyle(html, "--color-border"),

    bgFooter: getStyle(html, "--bg-footer"),
    footerTxt: getStyle(html, "--footer-txt"),
}

const darkMode = {
    bg: "rgb(19, 19, 19)",
    colorTxtHeader: "#f1f1f1",
    
    colorSub: "rgb(183, 183, 183)",
    colorTxtOne: "rgb(206, 206, 206)",
    colorTxtTwo: "rgb(222, 222, 222)",

    colorTxtHomeDest: "#88765b",
    colorBorder: "rgb(33, 33, 33)",

    bgFooter: "rgb(255, 253, 242)",
    footerTxt: "rgb(70, 70, 70)",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})