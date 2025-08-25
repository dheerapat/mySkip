new MutationObserver(() => {
    const skipButton = document.querySelector(".ytp-skip-ad-button");

    skipButton?.click()
}).observe(document.body, {
    childList: true,
    subtree: true
});
