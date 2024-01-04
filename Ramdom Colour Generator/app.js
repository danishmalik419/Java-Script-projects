// let hexcode = `#${Math.random().toString(16).slice(2,6).padEnd(8,0)}`;
// console.log(hexcode);
const getcolor = () =>{
    const randomNumber = Math.floor(Math.random()*1677215);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomCode,randomNumber);
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerText = randomCode;
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
getcolor();