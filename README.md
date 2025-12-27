# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring 3D backgrounds powered by Three.js.

## 🚀 Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Three.js / React Three Fiber** - 3D Graphics
- **EmailJS** - Contact Form Integration
- **Lucide React** - Icons

## 📁 Project Structure

```
Portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Static assets
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Public assets
│   └── ...config files
└── README.md
```

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayushmaan19/Portfolio.git
   cd Portfolio/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your EmailJS credentials.

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔐 Environment Variables

Create a `.env` file in the `frontend` directory with:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_PUBLIC_KEY=your_emailjs_public_key
VITE_TEMPLATE_ADMIN=your_admin_template_id
VITE_TEMPLATE_AUTOREPLY=your_autoreply_template_id
```

Get your credentials from [EmailJS](https://www.emailjs.com/)

## 📄 License

MIT License

## 👤 Author

**Ayushmaan Yadav**
- GitHub: [@ayushmaan19](https://github.com/ayushmaan19)
- LinkedIn: [Ayushmaan Yadav](https://in.linkedin.com/in/ayushmaan-yadav-152b141b1)
