// ====== Cart System ======
let cart = [];
let total = 0;

// فتح وغلق الكارت
function toggleCart() {
    document.getElementById("cart").classList.toggle("open");
}

// ----- تحديث عرض الكارت -----
function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // مسح الموجود
    total = 0; // إعادة حساب المجموع

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            ${item.name} - ${item.size} - ${item.price} EGP
            <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
        `;
        cartItemsContainer.appendChild(div);
    });

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total + " EGP";
}

// ----- إضافة منتج مع مقاس -----
function addToCartWithSize(name, price, sizeId) {
    const size = document.getElementById(sizeId).value;
    cart.push({ name, price, size });
    updateCart();
}

// ----- إضافة منتج One Size -----
function addToCartOneSize(name, price) {
    cart.push({ name, price, size: "One Size" });
    updateCart();
}

// ----- إزالة منتج من الكارت -----
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// ====== Slider Functions ======
function nextSlide(btn) {
    const img = btn.parentElement.querySelector(".slider-img");
    const images = img.dataset.images.split(",");
    let index = images.indexOf(img.src.split("/").pop());
    index = (index + 1) % images.length;
    img.src = "images/" + images[index];
}

function prevSlide(btn) {
    const img = btn.parentElement.querySelector(".slider-img");
    const images = img.dataset.images.split(",");
    let index = images.indexOf(img.src.split("/").pop());
    index = (index - 1 + images.length) % images.length;
    img.src = "images/" + images[index];
}
