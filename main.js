// main.js (content script for YouTube only)
(function () {
  function checkAds() {
    const adsContainer = document.querySelector('.video-ads');
    const video = document.querySelector('video');

    if (video && adsContainer) {
      const adIsPlaying = adsContainer.childElementCount > 0;

      if (adIsPlaying) {
        // Mute if ad is playing
        if (!video.muted) {
          video.muted = true;
          console.log("Ad playing: Muted video");
        }
      } else {
        // Unmute if ad stopped
        if (video.muted) {
          video.muted = false;
          console.log("No ad: Unmuted video");
        }
      }
    }
  }

  // Run every second
  setInterval(checkAds, 1000);
})();
