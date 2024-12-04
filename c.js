const log = console.log;
const el = {
    id(id) {
        return document.getElementById(id);
    },
    s(sel) {
        return document.querySelector(sel)
    },
}

document.getElementById('dashboard-toggle').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents click from bubbling up
    const menu = document.getElementById('dashboard-menu');
    menu.classList.toggle('active');
});

// Close the sidebar if clicked outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('dashboard-menu');
    const dashboardToggle = document.getElementById('dashboard-toggle');
    if (!menu.contains(event.target) && event.target !== dashboardToggle) {
        menu.classList.remove('active');
    }

});

function bodySizer() {
    document.querySelector("body").style.setProperty("height", window.innerHeight + "px")
    document.querySelector("body").style.setProperty("width", window.innerWidth + "px")
}
bodySizer();
window.addEventListener("resize", bodySizer);


function removeBoxActive() {
    el.id("box-cont").childNodes.forEach(node => {
        node.classList?.remove("box-active")
    })
}
el.id("img-bg").addEventListener("click", removeBoxActive)

el.id("home-btn").addEventListener("click", () => {
    removeBoxActive()
    el.id("home").classList.add("box-active")
})
el.id("about-btn").addEventListener("click", () => {
    removeBoxActive()
    el.id("about").classList.add("box-active")
})
el.id("education-btn").addEventListener("click", () => {
    removeBoxActive()
    el.id("education").classList.add("box-active")
})
el.id("skill-btn").addEventListener("click", () => {
    removeBoxActive()
    el.id("skill").classList.add("box-active")
})
el.id("experience-btn").addEventListener("click", () => {
    removeBoxActive()
    el.id("experience").classList.add("box-active")
})