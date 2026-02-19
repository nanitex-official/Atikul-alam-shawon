# MP Website - React Application

A modern React application for আতিকুল ইসলাম শাওন's political website, converted from static HTML.

## Features

- ✅ Modern React with Hooks
- ✅ React Router for navigation
- ✅ Fully responsive design
- ✅ Reusable components
- ✅ Clean and organized code structure
- ✅ Optimized performance

## Project Structure

```
react-app/
├── public/
│   ├── index.html
│   └── assets/
│       ├── images/
│       └── videos/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Commitments.js
│   │   ├── Commitments.css
│   │   ├── CommitmentCard.js
│   │   ├── CommitmentCard.css
│   │   ├── Videos.js
│   │   ├── Videos.css
│   │   ├── CallToAction.js
│   │   └── CallToAction.css
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── CandidateIntroduction.js
│   │   ├── CandidateIntroduction.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation

1. Install Node.js (v14 or higher) from https://nodejs.org/

2. Open terminal/command prompt and navigate to the project directory:
   ```bash
   cd "d:\MP website\react-app"
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build folder will contain optimized files ready for deployment.

## Assets Setup

### Images
Place your images in the `public/assets/images/` directory:
- `logo.png` - Website logo
- `banner.jpg` - Hero banner image
- `about-image.jpg` - About section image
- `candidate-full.jpg` - Full candidate image
- `commitment-1.jpg` to `commitment-6.jpg` - Commitment card images

### Videos
Place your videos in the `public/assets/videos/` directory:
- `video1.mp4` to `video6.mp4` - Goal videos

## Customization

### Colors
Main colors are defined in the CSS files. Primary color is `#00522E` (green).

### Content
- Update text content in component files
- Modify menu items in `Header.js`
- Update commitment data in `Commitments.js`
- Add candidate information in `CandidateIntroduction.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- CSS3
- HTML5

## Deployment

You can deploy this application to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Support

For any issues or questions, please contact the development team.

## License

© 2026 All Rights Reserved
