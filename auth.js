// File: auth.js

// ==== LOGIC REGISTRASI (signup.html) ====
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;
        const conf = document.getElementById("confirmPassword").value;

        if(pass !== conf){
            alert("Konfirmasi Password tidak cocok!");
            return;
        }

        // Simpan data di Local Storage
        localStorage.setItem("userEmail", email); 
        localStorage.setItem("userPassword", pass);

        alert("Akun berhasil dibuat! Silakan login.");
        window.location.href = "login.html"; 
    });
}


// File: auth.js (Perbaikan Redirect Paling Agresif)

// ... (Bagian Registrasi tidak perlu diubah) ...

// ==== LOGIC LOGIN (login.html) ====
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("username").value; 
        const pass = document.getElementById("password").value; 

        const storedEmail = localStorage.getItem("userEmail");
        const storedPass = localStorage.getItem("userPassword");

        if (email === storedEmail && pass === storedPass && storedEmail) {
            
            alert("Berhasil login!"); 
            
            // Menggunakan window.location.replace() untuk memaksa browser memuat halaman baru
            // Ini lebih kuat daripada href, dan mencegah pengguna kembali ke halaman login via tombol 'back'
            window.location.replace("index.html"); 
            
        } else {
            alert("Email atau password salah. Pastikan Anda sudah registrasi.");
        }
    });
}