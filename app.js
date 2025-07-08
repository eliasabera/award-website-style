const track = document.getElementById("image-track");
window.onmousedown = e => {
    console.log(e.clientX)
    track.dataset.mouseDownAt = e.clientX;
}
window.onmousemove = e => {
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    console.log(mouseDelta)
}