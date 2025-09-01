const video = document.getElementById("video");

// make every button play its video
document.querySelectorAll(".kanji-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const file = btn.dataset.file; // get the filename from the button
    video.src = "videos/" + file;
    video.play();
  });
});

