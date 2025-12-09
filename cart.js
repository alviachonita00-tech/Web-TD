// Ambil data keranjang dari LocalStorage
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
let total = 0;

const cartItems = document.getElementById("cartItems");
const totalHarga = document.getElementById("totalHarga");

// Muat isi keranjang di halaman
function loadCart() {
    cartItems.innerHTML = "";
    total = 0;

    cartData.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <p>${item.name} - Rp ${item.price.toLocaleString()}</p>
            <button class="remove-btn" data-index="${index}">X</button>
        `;
        cartItems.appendChild(div);
    });

    totalHarga.innerText = "Rp " + total.toLocaleString();
    setDeleteButtons();
}

// Tombol hapus item
function setDeleteButtons() {
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            
            cartData.splice(index, 1);
            localStorage.setItem("cartData", JSON.stringify(cartData));

            loadCart();
        });
    });
}

loadCart();

// === Checkout Handler ===
document.getElementById("checkoutBtn").addEventListener("click", function () {
    if(cartData.length === 0){
        alert("Keranjang masih kosong!");
        return;
    }

    alert("Checkout berhasil! Silakan lakukan pembayaran.");
    localStorage.removeItem("cartData");

    window.location.href = "payment.html";
});