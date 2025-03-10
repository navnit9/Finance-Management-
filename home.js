document.getElementById("scroll-button").addEventListener("click", function() {
    document.getElementById("target-section").scrollIntoView({
        behavior: "smooth"
    });
});
document.getElementById("scroll").addEventListener("click", function() {
    document.getElementById("target").scrollIntoView({
        behavior: "smooth"
    });
});