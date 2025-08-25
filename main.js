// main.js (content script for YouTube only)
(function () {
  let currentUrl = location.href;
  let observer = null;

  function initObserver() {
    const video = document.querySelector('video');
    const adsContainer = document.querySelector('.video-ads');

    if (!video || !adsContainer) {
      console.log("Waiting for video or ads container...");
      return;
    }

    // Disconnect any old observer
    if (observer) observer.disconnect();

    observer = new MutationObserver(() => {
      const adIsPlaying = adsContainer.childElementCount > 0;

      if (adIsPlaying) {
        if (!video.muted) {
          video.muted = true;
          console.log("Ad playing: Muted video");
        }
      } else {
        if (video.muted) {
          video.muted = false;
          console.log("No ad: Unmuted video");
        }
      }
    });

    observer.observe(adsContainer, { childList: true, subtree: true });
    console.log("Observer attached");
  }

  // Detect URL changes (SPA navigation)
  const urlObserver = new MutationObserver(() => {
    if (currentUrl !== location.href) {
      currentUrl = location.href;
      console.log("URL changed:", currentUrl);
      setTimeout(initObserver, 1000); // slight delay to let DOM update
    }
  });

  urlObserver.observe(document.body, { childList: true, subtree: true });

  // Initialize on first load
  initObserver();
})();
