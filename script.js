document.addEventListener("DOMContentLoaded", function () {
    // Profil butonuna tıklanınca menüyü aç/kapat
    let profileButton = document.getElementById("profile-link");
    let profileMenu = document.getElementById("profile-menu");

    profileButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Sayfanın başka yerlerine tıklanmasını engelleme
        profileMenu.style.display = profileMenu.style.display === "block" ? "none" : "block";
    });

    // Boş bir yere tıklayınca profil menüsü kapanmalı
    document.addEventListener("click", function (event) {
        if (!profileMenu.contains(event.target) && event.target !== profileButton) {
            profileMenu.style.display = "none";
        }
    });

    // Giriş Yap Modal Açma
    let loginModal = document.getElementById("login-modal");
    let registerModal = document.getElementById("register-modal");
    let createAdModal = document.getElementById("create-ad-modal");

    let loginClose = document.getElementById("close-login-modal");
    let registerClose = document.getElementById("close-register-modal");
    let createAdClose = document.getElementById("close-create-ad-modal");

    profileButton.addEventListener("click", function () {
        loginModal.style.display = "block";
    });

    document.getElementById("create-ad-btn").addEventListener("click", function () {
        createAdModal.style.display = "block";
    });

    // Modal kapatma
    loginClose.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    registerClose.addEventListener("click", function () {
        registerModal.style.display = "none";
    });

    createAdClose.addEventListener("click", function () {
        createAdModal.style.display = "none";
    });

    // Boş bir yere tıklayınca modal kapatma
    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        } else if (event.target === registerModal) {
            registerModal.style.display = "none";
        } else if (event.target === createAdModal) {
            createAdModal.style.display = "none";
        }
    });

    // Kayıt Ol'a tıklanınca giriş modaldan kayıt modalına geç
    document.getElementById("show-register").addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "block";
    });
});
