var myvid = document.getElementByClass('myvideo');
var myvids = [
  "https://pixabay.com/videos/fire-flame-heat-light-up-9164/", 
  "https://pixabay.com/videos/flames-heat-warm-warmth-burn-oven-2336/"
  ];
var activeVideo = 0;

myvid.addEventListener('ended', function(e) {
  // update the new active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});


