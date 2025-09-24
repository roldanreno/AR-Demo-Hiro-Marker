# AR Marker Demo - 8th Wall

AR application that detects a logo marker and displays a clickable link to www.demo.unreno.rocks

## Features

- ✅ Logo marker detection using AR.js
- ✅ 3D text overlay on marker
- ✅ Direct link to demo website
- ✅ Mobile-optimized interface
- ✅ Real-time marker tracking

## Requirements

- HTTPS connection (required for camera access)
- Mobile device with camera
- Printed marker (logo)
- Good lighting conditions

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Create marker pattern:**
   - Follow instructions in `/public/assets/README.md`
   - Generate `.patt` file from your logo
   - Place `pattern-logo.patt` in `/public/assets/`

3. **Start development server:**
```bash
npm run dev
```

4. **Access on mobile device:**
   - Open `https://[your-ip]:3000` on mobile
   - Accept camera permissions

## Usage

1. **Print your logo marker** (or use default Hiro marker)
2. **Open app** on mobile device
3. **Tap "Start AR"** button
4. **Point camera** at printed marker
5. **See 3D text** appear above marker
6. **Tap text** to visit www.demo.unreno.rocks

## Marker Setup

### Option 1: Use Your Logo
1. Go to [AR.js Marker Generator](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)
2. Upload your logo image (high contrast, square format)
3. Download generated `.patt` file
4. Rename to `pattern-logo.patt`
5. Place in `/public/assets/`

### Option 2: Use Default Hiro Marker
1. Download: [hiro.patt](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.patt)
2. Rename to `pattern-logo.patt`
3. Print marker: [hiro.png](https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png)

## Browser Compatibility

- ✅ Chrome Mobile (Android/iOS)
- ✅ Safari Mobile (iOS)
- ✅ Firefox Mobile (Android)
- ✅ Edge Mobile (Android)

## Project Structure

```
webxr_ar_demo/
├── src/
│   └── main.js              # AR marker detection logic
├── public/
│   └── assets/
│       ├── pattern-logo.patt # Marker pattern file
│       └── README.md        # Marker setup guide
├── index.html               # HTML with AR.js integration
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md               # This file
```

## Troubleshooting

**Marker not detected:**
- Ensure good lighting
- Keep marker flat and stable
- Check camera permissions
- Verify `.patt` file is in correct location

**Link not working:**
- Check console for errors
- Verify URL is correct
- Test on different devices

**Performance issues:**
- Use high-contrast markers
- Avoid complex logo designs
- Test in good lighting conditions
