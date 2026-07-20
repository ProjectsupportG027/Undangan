alert("script.js berhasil dimuat");
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

if(namaTamu){

    guestName.innerHTML = decodeURIComponent(namaTamu);

}


/* ==========================================
   BUKA UNDANGAN
========================================== */

openButton.addEventListener("click", function(){

  music.play()
.then(() => {
    console.log("Music Playing");
})
.catch((err) => {
    console.error("Audio Error:", err);
    alert("Audio Error : " + err.message);
});
