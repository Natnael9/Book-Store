const body = document.querySelector("body"),
header = document.querySelector("header"),
SidebarOpen = document.getElementById("SidebarOpen"),
SidebarClose = document.getElementById("SidebarClose");

if (SidebarOpen) {
    SidebarOpen.addEventListener("click", () => {
        body.classList.add("active");
    });
}

if (SidebarClose) {
    SidebarClose.addEventListener("click", () => {
        body.classList.remove("active");
    });
}

if (body && header) {
    body.addEventListener("click", (e) => {
        const clickedelement = e.target;
        if (clickedelement !== header && !header.contains(clickedelement)) {
            body.classList.remove("active");
        }
    });
}

function highlightActiveNavItem() {
    const navList = document.querySelector("nav > ul");
    if (!navList) return;

    const topItems = navList.querySelectorAll(":scope > li");
    if (topItems.length < 4) return;

    const homeItem = topItems[0];
    const genresItem = topItems[1];
    const cartItem = topItems[2];
    const aboutItem = topItems[3];

    const genreItems = genresItem.querySelectorAll(".genra_dropdown li");
    const fileName = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

    if (fileName === "index.html") {
        homeItem.classList.add("active");
        return;
    }

    if (fileName === "mycart.html") {
        cartItem.classList.add("active");
        return;
    }

    if (fileName === "about.html") {
        aboutItem.classList.add("active");
        return;
    }

    const match = fileName.match(/^page_(\d+)\.html$/);
    if (!match) return;

    genresItem.classList.add("active");
    const pageNumber = Number(match[1]);
    const genreItem = genreItems[pageNumber - 1];
    if (genreItem) {
        genreItem.classList.add("active");
    }
}

highlightActiveNavItem();
