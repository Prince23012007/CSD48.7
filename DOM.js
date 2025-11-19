document.getElementById("title").innerText = "My JavaScript Class"
document.getElementById("title").innerHTML = "<h4>Hey You!</h4>"

document.getElementById("send").innerText = "Send"
document.getElementById("send").innerHTML = "<radio>Forward</radio>"

document.getElementById("click").innerText = "Next Page"
document.getElementById("click").innerHTML = "<h1>The link to our YouTube</h1>"

document.body.style.backgroundColor = "pink";
let image = document.getElementById("image");
image.setAttribute("src", "shutterstock_368490641-min-1080x719.jpg")


//Events And Listerners
// Click, Double-Click



let dbtn = document.getElementById("Change");
dbtn.addEventListener("dblclick", () =>{
    // alert("I have been double click")
})


let btn = document.getElementById("Change");
btn.addEventListener("click", () =>{
    image.setAttribute("src", "BestPurple_CGC2662sq-1024x1024.jpg")
})

btn.addEventListener('click', () =>{
 document.getElementById("Change").innerText = "Move";
})









