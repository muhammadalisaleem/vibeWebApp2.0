# VIBE - Civic Engagement Platform

**VIBE** (Volunteer, Inspire, Build, and Empower) is a web-based civic engagement platform targeted at Pakistan's youth (15-29). A gamified hub connecting users to verified, geo-tagged civic opportunities, rewarding participation with VIBE Coins redeemable for real-world perks.

## Features

- 🏠 **Home Dashboard** - Welcome screen with stats, progress tracking, and urgent emergency cards
- 📱 **Community Feed** - Share stories and see community updates
- 💰 **VIBE Coins** - Earn and redeem coins for rewards
- 🤖 **AI Assistant** - Get help with civic actions, drafting letters, and policy analysis
- 📅 **Events** - Browse and join civic opportunities by category
- 👤 **Profile** - Track your achievements, badges, and civic CV

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 (dark theme)
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Data Fetching**: React Query (@tanstack/react-query)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project with Authentication, Firestore, and Storage enabled

### Installation

1. **Clone the repository**
   ```bash
   cd vibe-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Firebase credentials in `.env.local`:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Seed mock data (optional)**
   
   For development, you can seed Firestore with mock data:
   ```bash
   # First install ts-node if needed
   npm install -D ts-node
   
   # Run the seed script
   npx ts-node scripts/seedFirestore.ts
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
vibe-web/
├── app/
│   ├── (tabs)/              # Route group for tab navigation
│   │   ├── layout.tsx       # Shared layout with navigation
│   │   ├── page.tsx         # Home tab (/)
│   │   ├── feed/            # Feed tab (/feed)
│   │   ├── vibe/            # VIBE Coins tab (/vibe)
│   │   ├── ai/              # AI Assistant tab (/ai)
│   │   ├── events/          # Events tab (/events)
│   │   └── you/             # Profile tab (/you)
│   ├── layout.tsx           # Root layout with providers
│   └── globals.css          # Global styles with theme
├── components/
│   ├── Navigation/
│   │   ├── Header.tsx       # Top navigation header
│   │   ├── Sidebar.tsx      # Desktop sidebar navigation
│   │   └── BottomNav.tsx    # Mobile bottom navigation
│   └── ui/
│       ├── Card.tsx         # Reusable card component
│       └── Button.tsx       # Reusable button component
├── hooks/
│   └── useUser.ts           # React Query hook for user data
├── lib/
│   ├── firebase.ts          # Firebase configuration
│   ├── types.ts             # TypeScript type definitions
│   └── mockData.ts          # Mock data for development
├── providers/
│   └── Providers.tsx        # React Query provider
└── scripts/
    └── seedFirestore.ts     # Script to seed Firestore with mock data
```

## Design System

### Colors

- **Background**: Black (#000000)
- **Primary**: Purple (#7C3AED)
- **CTA/Coins**: Orange (#FF6B35)
- **Text**: White/Grey (#FFFFFF / #9CA3AF)
- **Cards**: Dark grey (#111111)

### Responsive Design

- **Mobile-first**: Bottom navigation bar for mobile devices
- **Desktop**: Sidebar navigation for screens ≥768px
- All components are fully responsive

## Data Models

### Firestore Collections

- **users**: User profiles with coins, streaks, badges, hours, events
- **events**: Civic opportunities with category, location, date, RSVP count
- **stories**: Community posts with text, images, likes
- **rewards**: Redeemable items with cost and category
- **emergencies**: Urgent civic needs with progress tracking

## Development

- **Mock Data**: Currently using mock data via React Query hooks
- **Firebase Integration**: Ready for production - replace mock data with Firestore queries
- **Scalability**: Designed to migrate from Firestore to PostgreSQL when needed

## Deployment

This project is ready to deploy on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## License

Private project for VIBE platform.
