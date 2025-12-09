// Toggle FAQ Answer
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", function() {
        const answerBox = this.nextElementSibling;

        answerBox.style.display =
            answerBox.style.display === "block" ? "none" : "block";
    });
});