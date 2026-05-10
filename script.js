const toggleBtn = document.getElementById("dark-mode-toggle");
const bodyElement = document.body;

toggleBtn.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");
    
    if (bodyElement.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        bodyElement.classList.add("dark-mode");
    }
});

const myName = document.querySelector(".name");
const myDesc = document.querySelector(".description");

console.log(myName);
console.log(myDesc);