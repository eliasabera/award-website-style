const track = document.getElementById("image-track");
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};
window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const  nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  track.dataset.percentage = nextPercentage;

  track.style.transform = `translate(${percentage}%,-50%)`;

  //   for (const image of track.getElementsByClassName("image")) {
  //     image.style.objectPosition = `${nextPercentage + 100}% 50%`;
  //   }
};
window.onmouseup = (e) => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevpercentage = track.dataset.percentage;
};
