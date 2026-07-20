/* ==========================================
   ELEMENT
========================================== */

const openButton = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const music = document.getElementById("bgMusic");
const mainContent = document.getElementById("mainContent");
const guestName = document.getElementById("guestName");

/* ==========================================
   AMBIL NAMA TAMU DARI URL
========================================== */

const params = new URLSearchParams(window.location.search);
const namaTamu = params.get("to");

if (namaTamu) {
    guestName.textContent = decodeURIComponent(namaTamu);
}

/* ==========================================
   BUKA UNDANGAN
========================================== */

openButton.addEventListener("click", function () {

    alert("Tombol berhasil diklik!");

    music.play()
    .then(() => {
        console.log("Music Playing");
    })
    .catch((err) => {
        console.error(err);
        alert("Audio Error : " + err.message);
    });

    cover.style.opacity = "0";

    setTimeout(function () {

        cover.style.display = "none";

        mainContent.scrollIntoView({
            behavior: "smooth"
        });

    }, 1200);

});
