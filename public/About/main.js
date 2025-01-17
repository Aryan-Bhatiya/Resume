function redirect(url){
    window.location.replace(url);
}

document.querySelector(".home").addEventListener("click", (e)=>{
    redirect("../Home/index.html");
})

document.querySelector(".about").addEventListener("click", (e)=>{
    redirect("../About/index.html");
})

document.querySelector(".contact").addEventListener("click", (e)=>{
    redirect("../Contact/index.html");
})

document.querySelector(".my-work").addEventListener("click", (e)=>{
    redirect("../MyWork/index.html");
})