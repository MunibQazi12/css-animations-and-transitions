
const eventListener = (className) => {
    const element = document.querySelectorAll(`${className}`);
    for (var i = 0; i < element.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = element[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            element[i].classList.add("active");
        } else {
            element[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", () => { eventListener('.LeftAnimation') }); 