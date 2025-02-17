# Modern CPA Website Template

A professional, responsive website template for CPA firms built with Next.js, TypeScript, and Tailwind CSS. This template provides a modern, sophisticated design that conveys trust and expertise while offering essential features for accounting firms.

## Features

- 🎨 Modern, professional design with smooth animations
- 📱 Fully responsive layout for all devices
- 🔒 Secure client portal with document management
- 📅 Appointment scheduling functionality
- 📄 Comprehensive service pages
- 👥 Team profiles and company information
- 📝 Blog/news section for tax updates
- 📬 Contact form with service selection
- 🔐 GDPR-compliant newsletter signup

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Form Handling**: React Hook Form (planned)
- **Authentication**: NextAuth.js (planned)
- **Database**: Prisma + PostgreSQL (planned)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cpa-website-template.git
   cd cpa-website-template
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portal/            # Client portal
│   ├── services/          # Services page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   ├── ui/               # UI components
│   └── home/             # Homepage components
└── styles/               # Global styles
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`. The default palette includes:

- Primary: Navy Blue (#1E3A8A)
- Secondary: Gray (#9CA3AF)
- Accents: Gold (#B7791F) and Green (#059669)

### Typography

The template uses:
- Playfair Display for headings
- Inter for body text

Fonts can be customized in `src/app/layout.tsx`.

## Deployment

This template can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Configure your environment variables
4. Deploy!

## Future Enhancements

- [ ] Add authentication system
- [ ] Implement document upload functionality
- [ ] Add appointment scheduling system
- [ ] Create blog/news section
- [ ] Add admin dashboard
- [ ] Implement email notifications
- [ ] Add analytics integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact us at support@example.com.

## Acknowledgments

- Design inspired by modern financial websites
- Icons provided by Heroicons
- UI components from Headless UI
