# 🌈 Rainbow Reader Bookmarklet

**Rainbow Reader** is here to add color to your life (and web pages)! One click and your boring text transforms into a neon explosion. 

## 💡 What Does It Do?

- **Rainbow Magic**: Makes your paragraphs pop with random neon colors.
- **Hover Glow**: Hover over text and see it *light up* like a retro arcade game.
- **Minimalistic (aka not annoying)**: Adds color without being overwhelming.

---

## 🌟 How to Use

### 1. **Drag this bookmarklet to your bookmarks bar:**

[**🌈 Rainbow Reader**](javascript:(function(){const colors = ['#FF69B4', '#FFD700', '#00FFFF', '#ADFF2F', '#FF4500', '#00FF7F', '#FF1493', '#8A2BE2', '#00CED1', '#FF6347'];const style = document.createElement('style');style.textContent = `%60 .rainbow-reader { transition: transform 0.3s ease, box-shadow 0.3s ease; display: inline-block; } .rainbow-reader:hover { transform: scale(1.1) rotate(-2deg); z-index: 9999; position: relative; box-shadow: 0 0 12px rgba(255, 255, 255, 0.4); } %60`;document.head.appendChild(style);document.querySelectorAll('p').forEach(p => { p.classList.add('rainbow-reader'); p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; p.style.color = colors[Math.floor(Math.random() * colors.length)]; p.style.padding = '0.5rem'; p.style.borderRadius = '10px'; p.style.fontFamily = 'monospace'; p.style.fontSize = '1rem'; p.style.marginBottom = '1rem'; });})())

### 2. **Click it, sit back, and watch the rainbow magic unfold.**

> 💡 Works best on text-heavy pages like [History of the Internet](https://en.wikipedia.org/wiki/History_of_the_Internet)

---

## 📸 Screenshots

Paste your GIFs or screenshots here:

![Demo Screenshot](demo.png)

---

## 🛠️ How it Works

It’s just some funky JavaScript that applies a bunch of random neon colors and a hover effect to paragraphs. No biggie.

---

## 🚀 Contributing

- Got an idea? Open an issue or PR. Or just say “Hey!”
- No promises we’ll take your PR seriously, but we’ll definitely look.

---

## 💖 Credits

- **Made by 🧚🏻‍♂️ chxshi**
- **Totally inspired by 80s neon and pizza.**

Check out the code on GitHub: [Rainbow Reader GitHub](https://github.com/NewSmoke38/rainbow-reader)

---

## 🌐 Demo Link: [Here, Eventually!]
