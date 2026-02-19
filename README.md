# Atikul Alam Shawon - Political Website

A modern, responsive political website built with React and Node.js for MP Atikul Alam Shawon.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean and professional interface
- **News & Updates**: Dynamic news section with detail pages
- **Gallery**: Photo gallery showcase
- **Contact Forms**: Integrated contact and message forms
- **Commitments Tracker**: Display of political commitments and achievements
- **Backend API**: Node.js/Express backend for form submissions

## 📁 Project Structure

```
.
├── frontend/          # React frontend application
│   ├── public/       # Static assets
│   ├── src/          # Source files
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── data/        # Data files
│   │   └── ...
│   └── package.json
├── backend/          # Node.js backend API
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   └── server.js
└── vercel.json       # Vercel deployment config
```

## 🛠️ Tech Stack

### Frontend
- React 18.2
- React Router v6
- CSS3 with custom styling
- Font Awesome icons

### Backend
- Node.js
- Express.js
- MongoDB/Mongoose
- JWT Authentication
- Bcrypt for password hashing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for backend)

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install

# Create .env file with:
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret

npm start
```

The backend will run on `http://localhost:5000`

## 🌐 Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Import from GitHub: `nanitex-official/Atikul-alam-shawon`
4. Vercel will auto-detect the configuration from `vercel.json`
5. Click "Deploy"

### Environment Variables (if using backend)

Add these in Vercel dashboard under Settings → Environment Variables:
- `MONGODB_URI`
- `JWT_SECRET`
- `NODE_ENV=production`

## 📝 Build Configuration

The `vercel.json` is configured to:
- Install dependencies from frontend folder
- Build the React app
- Serve static files from the build directory
- Handle client-side routing with rewrites

## 🎨 Customization

### Updating Content

Content is stored in `/frontend/src/data/`:
- `siteData.js` - Site-wide information
- `newsData.js` - News articles
- `commitmentsData.js` - Political commitments
- `videosData.js` - Video content

### Styling

Global styles: `/frontend/src/index.css`
Component styles: Individual CSS files next to components

### Images

Add images to `/frontend/public/assets/images/`

## 🔧 Available Scripts

### Root Level
- `npm run build` - Build frontend for production
- `npm start` - Start frontend development server
- `npm run dev` - Start frontend in development mode

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Backend
- `npm start` - Start server
- `npm run dev` - Start with nodemon (development)

## 📱 Key Features

### Frontend Components
- **Header**: Responsive navigation with mobile menu
- **Hero**: Full-screen hero section with image
- **About**: MP introduction section
- **Commitments**: Political achievements showcase
- **News**: News articles with detail pages
- **Gallery**: Photo gallery
- **Contact**: Contact information and forms
- **Footer**: Site footer with social links

### Backend API Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is licensed under the MIT License.

## 👥 Credits

**Developed by**: [NaniteX](https://nanitex.com)

**For**: Atikul Alam Shawon, MP

## 📞 Support

For issues or questions, please contact: support@nanitex.com

## 🔗 Links

- **Website**: [Live Site URL after deployment]
- **Repository**: https://github.com/nanitex-official/Atikul-alam-shawon
- **Developer**: https://nanitex.com

---

Made with ❤️ by NaniteX
