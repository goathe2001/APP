const arrows = document.querySelectorAll(".arrow");
for (let i = 0; i < arrows.length; ++i) {
    arrows[i].addEventListener("click", (e) => {
        // console.log("click");
        const targetParent = e.target.parentElement.parentElement;
        targetParent.classList.toggle("showMenu");
    });
}

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".bx-menu");

// add click event for sidebar button
sidebarBtn.addEventListener("click", (e) => {
    sidebar.classList.toggle("close");
});