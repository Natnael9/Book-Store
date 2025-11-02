const body = document.querySelector("body"),
header = document.querySelector("header"),
SidebarOpen = document.getElementById("SidebarOpen"),
SidebarClose = document.getElementById("SidebarClose");

SidebarOpen.addEventListener("click" , () =>{
    body.classList.add("active");
})
SidebarClose.addEventListener("click" , () =>{
    body.classList.remove("active");
})
body.addEventListener("click", e=>{
    let clickedelement = e.target
    if( clickedelement !== header && !header.contains(clickedelement)){
        body.classList.remove("active");
    }  
})
