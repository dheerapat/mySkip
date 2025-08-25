# Shut The F* Up  
*Ad silence, not ad wars.*  

**Shut The F\* Up** is a lightweight browser extension that automatically **mutes YouTube ads** until the main video content resumes.  

Instead of fighting YouTube’s ever-evolving ad-block detection, this extension takes a different approach:  
👉 Let YouTube play the ads — but in silence.  

This way, you can keep your focus without annoying interruptions, whether you’re studying, coding, or working in deep flow.  

---

## ✨ Features
- 🔇 Automatically mutes YouTube videos **only during ads**  
- 🔊 Restores sound as soon as the main content begins  
- 🕊️ Peaceful, unobtrusive approach — no ad-block arms race  
- 🎧 Perfect for long work sessions: ads become moments of silence instead of disruption  

---

## 📦 Installation
1. Clone or download this repository.  
2. Open Chrome (or any Chromium-based browser) and go to `chrome://extensions/`.  
3. Enable **Developer mode** (toggle in the top-right).  
4. Click **Load unpacked** and select the project folder.  
5. Open YouTube and enjoy automatic ad muting.  

---

## 🛠️ How It Works
- YouTube always includes an invisible `div.video-ads` in its pages.  
- This extension watches that element.  
- If it has child elements (real ad playing), the video is muted.  
- When ads disappear, sound is restored automatically.  

---

## 💡 Philosophy
Instead of blocking ads entirely, **Shut The F* Up** embraces a quieter path:  
- Ads are allowed to run, but you don’t have to listen.  
- Occasional long ads become rare moments of **silence and solitude**.  
- No broken playback, no arms race, just a smoother YouTube experience.  

---

## 🚀 Roadmap
- [ ] Add option to keep video muted if the user muted manually  
- [ ] Add toggle button in the browser toolbar  
- [ ] Support for other video platforms  

---

## 📝 License
MIT License.  

