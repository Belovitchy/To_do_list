const buttons = document.querySelectorAll("a");

buttons.forEach(button => {
    button.addEventListener("mousedown", function () {
        this.style.transform = "scale(0.85)";
        this.style.transition = "transform 0.1s ease";
    });

    button.addEventListener("mouseup", function () {
        this.style.transform = "";
    });

    button.addEventListener("mouseleave", function () {
        this.style.transform = "";
    });
});

