document.addEventListener("DOMContentLoaded", function () {
    // Giriş Yap butonuna tıklanınca giriş ekranını aç
    document.getElementById("open-login").addEventListener("click", function () {
        document.getElementById("login-modal").style.display = "block";
    });

    // Giriş ekranı kapatma butonu
    document.getElementById("close-login-modal").addEventListener("click", function () {
        document.getElementById("login-modal").style.display = "none";
    });

    // Boş bir yere tıklanınca giriş ekranını kapatma
    window.addEventListener("click", function (event) {
        let loginModal = document.getElementById("login-modal");
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    // Kayıt ol butonuna tıklanınca kayıt sayfasına yönlendirme (Giriş ekranından kayıt ekranına geçiş)
    document.getElementById("show-register").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("login-modal").style.display = "none";
        alert("Kayıt ol sayfasına yönlendirilecek!"); // Şu an yönlendirme yerine alert var, gerekirse kayıt modalı eklenir
    });
});
