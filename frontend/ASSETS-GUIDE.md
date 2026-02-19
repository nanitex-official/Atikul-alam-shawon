# Assets Folder Structure

Place your assets in the `public/assets/` directory as shown below:

```
public/
└── assets/
    ├── images/
    │   ├── logo.png                    # Website logo (Header)
    │   ├── banner.jpg                  # Hero banner background
    │   ├── about-image.jpg            # About section image
    │   ├── candidate-full.jpg         # Full candidate photo
    │   ├── commitment-1.jpg           # নদীভাঙন ও বন্যা
    │   ├── commitment-2.jpg           # চিকিৎসা
    │   ├── commitment-3.jpg           # মাদকমুক্ত
    │   ├── commitment-4.jpg           # শিক্ষা ও নারী
    │   ├── commitment-5.jpg           # সবুজ পরিবেশ
    │   └── commitment-6.jpg           # ডিজিটাল সেবা
    │
    └── videos/
        ├── video1.mp4                 # Goal video 1
        ├── video2.mp4                 # Goal video 2
        ├── video3.mp4                 # Goal video 3
        ├── video4.mp4                 # Goal video 4
        ├── video5.mp4                 # Goal video 5
        └── video6.mp4                 # Goal video 6
```

## Image Recommendations

### Formats
- **Logo**: PNG (with transparency)
- **Photos**: JPG/JPEG
- **Graphics**: PNG

### Sizes
- **Logo**: 200x60px to 300x90px
- **Banner**: 1920x600px (landscape)
- **About Image**: 800x600px
- **Candidate Full**: 600x800px (portrait)
- **Commitment Cards**: 600x400px (4:3 ratio)

### Optimization
- Compress images before uploading
- Use tools like TinyPNG or ImageOptim
- Target: < 200KB per image

## Video Recommendations

### Format
- MP4 (H.264 codec)

### Dimensions
- 1280x720px (HD) or 1920x1080px (Full HD)

### File Size
- Target: < 10MB per video
- Use compression if needed

### Duration
- Recommended: 30 seconds to 2 minutes

## How to Add Assets

1. Create the folders if they don't exist:
   ```
   public/assets/images/
   public/assets/videos/
   ```

2. Copy your files into the appropriate folders

3. The app will automatically find them using the paths:
   - `/assets/images/filename.jpg`
   - `/assets/videos/filename.mp4`

## Using Custom Paths

If your assets are in different locations, update the paths in:
- `src/components/Hero.js` (banner)
- `src/components/About.js` (about image)
- `src/components/Header.js` (logo)
- `src/components/Commitments.js` (commitment images)
- `src/components/Videos.js` (video files)
- `src/pages/CandidateIntroduction.js` (candidate photo)
