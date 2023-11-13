let colors=["black","silver","gray","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","aliceblue","antiquewhite","whitesmoke","yellowgreen"];

const color=document.querySelector(".color")
btn.addEventListener("click",function(){
    let number=getrandom()
    document.body.style.background=colors[number]
    color.textContent=colors[number]
})
function getrandom(){
    return Math.floor(Math.random()*colors.length)
}