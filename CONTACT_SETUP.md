# Contact Form Setup Instructions

## Environment Variables Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Configure your SMTP settings in `.env.local`:

### Option A: Gmail (Recommended)
```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
```

**Gmail App Password Setup:**
1. Enable 2-Factor Authentication on your Google account
2. Go to [Google Account Settings](https://myaccount.google.com/) > Security > App passwords
3. Generate a new app password for "Mail"
4. Use the 16-character password as `SMTP_PASS`

### Option B: Custom SMTP
```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
```

## Features Implemented

### ✅ Part 1: Responsive Page Header Banner
- Full-width banner image using `/images/Jaleel Banner small.jpg`
- Responsive height: 22-28vh mobile, 28-36vh desktop
- Dark overlay gradient for better text contrast
- Proper spacing below sticky navigation
- Fade-in animation with Framer Motion

### ✅ Part 2: Social Media Icons
- Instagram and YouTube links with Lucide React icons
- Hover animations (scale + color transition)
- Modern, minimal design matching site aesthetic
- Links to official social media accounts

### ✅ Part 3: Enhanced Contact Form
- **Honeypot field** for spam protection (hidden input)
- **Server-side validation** for all inputs
- **Basic rate limiting** (5 requests per 15 minutes per IP)
- Input sanitization to prevent XSS attacks
- Email format validation

### ✅ Part 4: Email Integration
- **Nodemailer** integration with Gmail/SMTP support
- Sends to `jkotun48@gmail.com`
- Professional HTML email template
- Includes sender info, message, and timestamp
- Proper error handling and logging

### ✅ Part 5: Frontend Form Behavior
- Async form submission with fetch API
- Loading states with spinner animation
- Success/error message display with animations
- Form clearing after successful submission
- No page reload required
- Honeypot field silently discards spam

### ✅ Part 6: Code Quality
- Maintains Inter + Space Grotesk typography system
- Semantic HTML structure
- Mobile-responsive design
- Consistent with site's navy/gold color scheme
- Proper TypeScript types and error handling

## Testing the Contact Form

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (see above)

3. Start development server:
   ```bash
   npm run dev
   ```

4. Navigate to `/contact` and test the form

## Security Features

- **Rate Limiting**: Prevents spam (5 requests per 15 minutes)
- **Honeypot Field**: Catches automated bots
- **Input Sanitization**: Prevents XSS attacks
- **Email Validation**: Server-side email format checking
- **CSRF Protection**: Built into Next.js API routes

## Production Deployment

For production, consider:
- Using Redis for rate limiting instead of in-memory store
- Adding CAPTCHA for additional protection
- Setting up proper email service (SendGrid, AWS SES, etc.)
- Monitoring email delivery and bounce rates
