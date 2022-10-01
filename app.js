let back = document.getElementById("back")
let next = document.getElementById("next")
let img = document.getElementById("img")
next.addEventListener("click", () =>{
    img.scrollBy(400, 0);
})
back.addEventListener("click", () =>{
    img.scrollBy(-400, 0); 
})
