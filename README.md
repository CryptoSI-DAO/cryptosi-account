# CryptoSI DAO Account Portal

> Unified sign-up, login, and balance management for the entire CryptoSI DAO ecosystem.

## 🎯 Purpose

A single portal where users can:

- **Sign up / sign in** with unified Supabase auth
- **View balances** across all CryptoSI DAO apps
- **Top up** balances for any connected app
- **Access** every app in the ecosystem from one dashboard

## 🏗️ Architecture

| Tech | Version | Purpose |
|------|---------|---------|
| Next.js | 15.x | App framework (App Router) |
| React | 18.x | UI |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Supabase | SSR + JS | Auth + Database |
| Recharts | 2.15 | Charts (future) |
| Lucide React | 0.475 | Icons |

## 🚀 Connected Apps

| App | Description | Status |
|-----|-------------|--------|
| **Pump Minister** | AI-powered crypto price predictions | ✅ Live |
| **Bitpact** | Decentralized P2P Bitcoin trading | ✅ Live |
| **CaseLens** | Legal intelligence for crypto disputes | 🔜 Coming Soon |
| **Vibrant Dossier** | Rich media dossiers for crypto assets | 🔜 Coming Soon |
| **Headline Graphix** | Automated chart generation | 🔜 Coming Soon |

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page (app registry, features)
│   ├── layout.tsx            # Root layout with theme + fonts
│   ├── globals.css           # CSS variables (dark + light themes)
│   ├── login/page.tsx        # Login page
│   ├── signup/page.tsx       # Signup page
│   ├── dashboard/page.tsx    # User dashboard (balances, top-up)
│   └── apps/page.tsx         # App listing with details
├── components/
│   ├── app/
│   │   ├── header.tsx        # Shared header with nav + theme toggle
│   │   ├── footer.tsx        # Shared footer
│   │   └── theme-toggle.tsx  # Dark/light theme switcher
│   └── ui/
│       ├── button.tsx        # Button component
│       ├── card.tsx          # Card components
│       ├── input.tsx         # Input field
│       ├── label.tsx         # Form label
│       ├── badge.tsx         # Badge/pill component
│       ├── toast.tsx         # Toast notification primitives
│       └── toaster.tsx       # Toast container
├── hooks/
│   └── use-toast.ts          # Toast state management
└── lib/
    ├── supabase/
    │   ├── client.ts         # Browser Supabase client
    │   ├── server.ts         # Server Supabase client
    │   └── database.types.ts # Database type definitions
    └── utils.ts              # Utility functions (cn, formatCurrency)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- A Supabase project with auth enabled

### Installation

```bash
# Clone the repo
git clone https://github.com/CryptoSI-DAO/cryptosi-account.git
cd cryptosi-account

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Fill in your Supabase credentials
# NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Run development server
npm run dev
```

The app will be available at `http://localhost:3001`.

### Build for Production

```bash
npm run build
npm start
```

## 🔐 Authentication

This portal uses **Supabase Auth** with email/password. The same Supabase project can be shared across all CryptoSI DAO apps, enabling:

- Single sign-on across all apps
- Shared user profiles
- Unified session management

### Database Schema

Expected Supabase tables:

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  pumps INTEGER DEFAULT 0,
  credits INTEGER DEFAULT 0,
  reputation INTEGER DEFAULT 0,
  profile_picture_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Apps registry
CREATE TABLE public.apps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon_url TEXT,
  url TEXT NOT NULL,
  balance_label TEXT DEFAULT 'Credits',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Per-app balances
CREATE TABLE public.user_balances (
  user_id UUID REFERENCES public.users ON DELETE CASCADE,
  app_id UUID REFERENCES public.apps ON DELETE CASCADE,
  balance INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, app_id)
);
```

## 🎨 Theming

The portal supports **dark and light themes**:

- Default: Dark theme (matching CryptoSI brand — `#111111` background, `#e7f900` primary)
- Light theme: Warm off-white with brand-yellow accents
- Toggle via the sun/moon icon in the header
- Persists to `localStorage`

## 📋 Roadmap

- [x] Project scaffold (Next.js 15, Tailwind, Supabase)
- [x] Landing page with app registry
- [x] Login / Signup pages
- [x] Dashboard with balance cards
- [x] Dark/light theme support
- [ ] Wire Supabase auth (session management)
- [ ] Real balance fetching from database
- [ ] Cross-app top-up flow
- [ ] Admin panel (manage apps, view users)
- [ ] Activity log / transaction history
- [ ] Email verification flow
- [ ] Password reset flow

## 🌐 Deployment

Recommended: **Vercel** or any Next.js-compatible host.

```bash
# Vercel
npx vercel
```

For static export (if no server features needed):

```bash
# next.config.ts: add `output: "export"`
npm run build
# Deploy /out to any static host
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

Built with ❤️ by the CryptoSI DAO team.
