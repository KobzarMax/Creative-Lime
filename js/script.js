const header = document.querySelector('.announcent-bar')
const breakPoint = document.querySelector('.break')

document.addEventListener('scroll', animateNavnarOnScroll)

function animateNavnarOnScroll() {
  let totalHeight = header.clientHeight + breakPoint.clientHeight
  if (window.scrollY >= totalHeight) {
    header.classList.add("sticky");
    header.classList.add("top-0");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("top-0");
  }
}

const videoWrappers = document.querySelectorAll(".our-work-video-wrapper");

var videos = document.querySelectorAll("#videoTeaser");
videos.forEach(video => {
  video.addEventListener(
    'play', 
    function() { 
      video.play();
    },
    false);

  video.onclick = function() {
    if (video.paused) {
      video.play();  
      video.classList.add("play");
    } else {
      video.pause();
      video.classList.remove("play");
    }

    return false;
  };
})

videoWrappers.forEach(videoWrapper => {
  videoWrapper.addEventListener("click", function() {
    videoWrapper.classList.toggle("play");
  });
});