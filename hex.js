const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color=document.querySelector(".color")

btn.addEventListener("click",function(){
    let hexcode="#"
    for(let x=0; x<6; x++){
        hexcode += hex[getrandom()]
    }
        document.body.style.backgroundColor=hexcode
        color.textContent=hexcode
})
function getrandom(){
    return Math.floor(Math.random()*hex.length)
}