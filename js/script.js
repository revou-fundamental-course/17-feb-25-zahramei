function toggleOtherInput() {
    var select = document.getElementById("interest");
    var otherInputContainer = document.getElementById("otherInputContainer");

    if (select.value === "Others") {
        otherInputContainer.style.display = "block";
    } else {
        otherInputContainer.style.display = "none";
    }
}

function submitForm(event) {
    event.preventDefault(); // Mencegah halaman refresh saat submit
    alert("Terima kasih! Formulir Anda telah dikirim.");
}

function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");

    // Menutup menu jika salah satu item diklik
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}