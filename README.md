# 🎨 Krishna Dotted Hover Art – Project Documentation

## 📁 Project Overview

This project creates a beautiful dotted visualization of the image `krishna.png`. When the user taps (mobile) or moves the cursor (desktop) over the canvas, the dots float subtly. A background chant also plays once the canvas is interacted with.

---

## 📄 `index.html`

Sets up the HTML canvas and links all required assets:

- Loads p5.js library
- Loads `sketch.js` and `krishna_dots.js` scripts
- Provides a full-screen `<canvas>` through p5.js
- Starts music interaction on click/tap

---

## 🎨 `style.css`

Applies global styling:

- Full viewport width/height
- Dark background
- Removes scrollbars
- Responsive layout
- Font styling with Georgia

---

## 🧠 `sketch.js`

Handles p5.js logic:

- `preload()`: loads the image (`krishna.png`)
- `setup()`: sets canvas size based on image and screen
- `draw()`: animates background, dots, and adds Sanskrit quote
- Interaction:
  - "Tap anywhere to begin"
  - Hides instruction after start
  - Plays `krishna_bg_music.mp3` once

---

## ⚙️ `krishna_dots.js`

Defines dot behavior and image reconstruction:

- `extractDotsFromImage(img)`:
  - Reads non-transparent pixels
  - Creates a `Dot` object for each visible pixel
- `Dot` class:
  - `origin`, `pos`, and `color` attributes
  - `update()`:
    - Returns dot to its origin
    - If interacting (touch or cursor), adds slight floating motion
  - `show(scale)`: draws each dot on canvas

---

## 📱 Responsiveness

- **Desktop**:
  - Cursor triggers floating dots
- **Mobile**:
  - Touch triggers the same animation
- Scale factor makes it fit any screen

---

## 🔊 Audio

- `krishna_bg_music.mp3` plays **once**
- Starts after first interaction (`mousePressed()`)

---

## ✅ Features Summary

| Feature            | Description                                  |
|--------------------|----------------------------------------------|
| Dotted Image       | Reconstructed using `p5.Vector` dots         |
| Music Interaction  | Plays once when canvas is touched/clicked    |
| Responsive Canvas  | Fits screen on both mobile and desktop       |
| Mobile Compatible  | Supports `touches[]` detection in p5.js      |
| Custom Animation   | Dots float gently on interaction             |

---

## 🧪 How It Works

1. `preload()` loads the image
2. `setup()` sets the canvas
3. Dots generated using non-transparent image pixels
4. On each `draw()`:
    - If cursor/touch active → dots float
    - Otherwise → return to origin
5. Audio plays once on interaction

---

## 🙏 Final Note

This project blends spiritual imagery, music, and interactive creative coding using p5.js, offering a soothing and artistic visual experience.
