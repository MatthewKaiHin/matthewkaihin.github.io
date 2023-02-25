/* section display controller start */
function display_content(page) {
    var about_content = document.getElementById("about_section");
    var resume_content = document.getElementById("resume_section");
    var contact_content = document.getElementById("contact_section");

    if (page === "about") {
        about_content.style.display = "block";
        resume_content.style.display = "none";
        contact_content.style.display = "none";
    } else if (page === "resume") {
        about_content.style.display = "none"
        resume_content.style.display = "block";
        contact_content.style.display = "none";
    } else if (page === "contact") {
        about_content.style.display = "none"
        resume_content.style.display = "none";
        contact_content.style.display = "block";
    };
};
/* section display controller end */

/* display alert box start */
function alert_modal() {
    var modal = document.getElementById("about_modal");
    modal.style.display = "block";

    document.getElementById("close").addEventListener("click", function(){
        modal.style.display = "none";
    });
};
/* display alert box end */

/* audio auto play start */
function audio_play() {
    var audio = document.getElementById("about_audio");
    audio.muted = false;
    audio.play();
};

function audio_pause() {
    var audio = document.getElementById("about_audio");
    audio.muted = true;
    audio.pause();
};
/* audio auto play end */