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


var videos = document.querySelectorAll(".our-work-video-wrapper video");

videos.forEach((video) => {
  const wrap = video.parentElement;
  wrap.onclick = function () {
    if (video.paused) {
      video.play();  
      video.classList.add("play");
      wrap.classList.add("play");
    } else {
      video.pause();
      video.classList.remove("play");
      wrap.classList.remove("play");
    }
  }
})
