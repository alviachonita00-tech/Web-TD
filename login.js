document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const storedEmail = localStorage.getItem("email");
    const storedPass = localStorage.getItem("password");

    if (email === storedEmail && pass === storedPass) {
        alert("Login berhasil!");
        window.location.href = "cart.html"; // MASUK OTOMATIS KE CART
    } else {
        alert("Email atau password salah");
    }
});
