const adminSelect = document.getElementById("adminSelect");
const admin1Card = document.getElementById("admin1-card");
const admin2Card = document.getElementById("admin2-card");

adminSelect.addEventListener("change", function () {

    admin1Card.classList.remove("active");
    admin2Card.classList.remove("active");

    if (this.value === "admin1") {
        admin1Card.classList.add("active");
    } 
    else if (this.value === "admin2") {
        admin2Card.classList.add("active");
    }

});