// === CART SIDEBAR ===
const cartIcon = document.getElementById("cartIcon");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let totalHarga = 0;

// Buka/Tutup Panel Cart
cartIcon.addEventListener("click", function () {
    cartPanel.classList.toggle("open");
});

// Tambahkan ke Cart
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function () {
        const nama = this.getAttribute("data-name");
        const harga = parseInt(this.getAttribute("data-price"));

        const item = document.createElement("div");
        item.classList.add("cart-item");
        item.innerHTML = `
            <p>${nama} - Rp ${harga.toLocaleString()}</p>
            <button class="remove-btn">X</button>
        `;

        cartItems.appendChild(item);

        totalHarga += harga;
        cartTotal.innerText = "Rp " + totalHarga.toLocaleString();

        // 🔥 Simpan ke LocalStorage
        const data = JSON.parse(localStorage.getItem("cartData")) || [];
        data.push({ name: nama, price: harga });
        localStorage.setItem("cartData", JSON.stringify(data));

        // Hapus item dari panel saat X ditekan
        item.querySelector(".remove-btn").addEventListener("click", function () {
            item.remove();
            totalHarga -= harga;
            cartTotal.innerText = "Rp " + totalHarga.toLocaleString();
        });

        alert("Berhasil ditambahkan ke keranjang!");
    });
});

// === POPUP SHOP SAFE ===
const popupBox = document.getElementById("popupBox");
const popupOverlay = document.getElementById("popupOverlay");
const shopSafeBtn = document.getElementById("shopSafeBtn");
const closePopup = document.getElementById("closePopup");

shopSafeBtn.addEventListener("click", function () {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

closePopup.addEventListener("click", function () {
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});