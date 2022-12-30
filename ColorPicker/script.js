//Load the window 
window.onload = () => {
    main()
}

// Change color
const main = () => {
    const root = document.getElementById("root");
    const btn = document.getElementById("btn");
    const copyCode = document.getElementById("copyCode");
    

    btn.addEventListener("click", () =>{
        // const rgb = generateRGBColor();
        // root.style.backgroundColor = rgb;

        const hexCode = generateHexColor();
        root.style.backgroundColor = hexCode;

        showCode.value = hexCode;
    });

    // Copy hex code
    copyCode.addEventListener("click", () =>{
        const showCode = document.getElementById("showCode");

        showCode.select();
        console.log( showCode.select());
        showCode.setSelectionRange(0,99999);

        navigator.clipboard.writeText(showCode.value)
    })

}

// Generate rgb color
function generateRGBColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}

function generateHexColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}