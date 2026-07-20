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

    // Putar musik
    music.play();

    // Efek fade
    cover.style.opacity = "0";

    cover.style.transition = "1.2s";

    setTimeout(function(){

        cover.style.display = "none";

        mainContent.scrollIntoView({

            behavior:"smooth"

        });

    },1200);

});
