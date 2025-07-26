# 🕉️ Krishna Dotted Art – Interactive p5.js Visualization

This is an interactive visualization project using [p5.js](https://p5js.org/) that turns an image of **Lord Krishna** into a **dotted particle art**, accompanied by **soothing background music** and interactive effects.

👉 **Live Demo**: [https://krishna.devopsbyganraj.cloud](https://krishna.devopsbyganraj.cloud)

---

## 📸 Features

- 🖼️ Lord Krishna's image rendered beautifully in **dots** using pixel data.
- 🕉️ **Spiritual Sanskrit title**: _"कृष्णं वन्दे जगद्गुरुम्"_ appears below the image.
- 🎶 Background **music auto-plays** after a user click.
- 💥 Clicking again causes a **particle explosion effect** on the dots.
- 💬 **Mouse hint** displayed on hover to guide user.
- 🔥 Clean animations and canvas rendering using `p5.js`.

---

## 🧱 Folder Structure

```
krishna_dotted_art/
│
├── index.html               # Main entry point
├── sketch.js                # p5.js logic: preload, draw, and interactivity
├── krishna_dots.js          # Dot particle logic and image processing
├── krishna.png              # The Krishna watercolor image (user uploaded)
├── krishna_bg_music.mp3     # Background music (user uploaded)
├── p5.min.js                # p5.js library (CDN or local)
└── CNAME                    # Custom domain mapping for GitHub Pages
```

---

## 🚀 Getting Started (Local Development)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/krishna-dotted-art.git
   cd krishna-dotted-art
   ```

2. Open `index.html` in your browser  
   _Note: Chrome may block local autoplay unless served via HTTP._

3. Or serve it via [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode.

---

## 🌐 Deployment on GitHub Pages

1. Push this project to a new public GitHub repo (e.g. `krishna-dotted-art`)
2. In repo:
   - Go to **Settings > Pages**
   - Set source to `main` branch, root (`/`)
3. Add `CNAME` file with content:
   ```
   krishna.devopsbyganraj.cloud
   ```
4. Configure **Cloudflare DNS**:
   - Add a **CNAME record**:
     ```
     Name: krishna
     Target: your-username.github.io
     ```
5. Within minutes, your site will be live at:
   ```
   https://krishna.devopsbyganraj.cloud
   ```

---

## ⚙️ Technologies Used

- 🎨 **p5.js** – Creative coding library for rendering and animation
- 🌐 **GitHub Pages** – Static site hosting
- 🔐 **Cloudflare** – DNS and HTTPS for custom domain
- 🎼 **MP3 Audio** – Played using `p5.Sound`

---

## ✨ Credits & Inspiration

- Image of Lord Krishna (artwork you uploaded)
- Background song from *Karthikeya 2* (clip used for demo)
- Inspired by dot-based art animations and the beauty of Sanatan Dharma

---

## 📜 License

This project is for educational and devotional purposes.  
You may customize or remix for your own visual/portfolio showcase.

---

**जय श्री कृष्णा 🙏**
