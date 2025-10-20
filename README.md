# Yugrow Careers Consulting Website

A modern, responsive website for Yugrow Careers Consulting - a career coaching and training brand based in Africa.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with orange and white color scheme
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with Next.js 15 and optimized for search engines
- **Accessible**: Follows accessibility best practices
- **Fast Loading**: Optimized for performance with lazy loading and modern web standards

## 📱 Pages

- **Home**: Hero section, program previews, booking integration, testimonials
- **YuGrow**: 1-on-1 career coaching with process steps and package tiers
- **WeGrow**: Group training programs with cohort details and learning outcomes
- **AllGrow**: Social impact programs with mission and donation integration
- **About Us**: Founder profile, company story, testimonials, speaking engagements
- **Contact Us**: Contact form, contact information, FAQ, and map

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion (ready for implementation)
- **Forms**: React Hook Form (ready for implementation)
- **CMS**: Sanity.io or Strapi (ready for integration)
- **Booking**: Cal.com or Calendly (ready for integration)
- **Hosting**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd yugrow-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About Us page
│   ├── allgrow/           # AllGrow program page
│   ├── contact/           # Contact Us page
│   ├── wegrow/            # WeGrow program page
│   ├── yugrow/            # YuGrow program page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── footer.tsx        # Footer component
│   └── navigation.tsx    # Navigation component
└── lib/                  # Utility functions
    └── utils.ts          # Utility functions
```

## 🎨 Design System

### Colors

- **Primary Orange**: #f97316 (motivation, energy)
- **White**: #ffffff (clarity & growth)
- **Black**: #0a0a0a (professionalism & confidence)
- **Gray**: Various shades for text and backgrounds

### Typography

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Components

- Custom button variants with orange primary styling
- Card components for program showcases
- Form components with consistent styling
- Responsive navigation with mobile menu

## 🔧 Customization

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/navigation.tsx`

### Styling

- Modify `src/app/globals.css` for global styles
- Use Tailwind CSS classes for component styling
- Custom CSS variables are defined in `:root`

### Content Management

- Replace placeholder content with actual content
- Add real images to `public/images/`
- Update contact information and links

## 📈 Performance Optimization

- Images are optimized with Next.js Image component
- CSS is purged with Tailwind CSS
- Components are lazy-loaded where appropriate
- SEO meta tags are included on all pages

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📞 Integration Ready

The website is prepared for integration with:

- **Booking Systems**: Cal.com, Calendly
- **CMS**: Sanity.io, Strapi
- **Email**: Resend, SendGrid
- **Analytics**: Google Analytics, Vercel Analytics
- **Payments**: Flutterwave, Paystack (for donations)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Yugrow Careers Consulting.

## 📞 Support

For support or questions, contact:

- Email: hello@yugrowcareers.com
- Website: [yugrowcareers.com](https://yugrowcareers.com)

---

Built with ❤️ for Yugrow Careers Consulting
