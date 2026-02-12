# Survey Integration Guide

## Overview

The Projector Windows monetization survey is a self-contained HTML page located at `/public/survey.html`. It collects user feedback on:

- Current usage patterns
- Desired premium features
- Pricing preferences
- Content partnership interest
- Open-ended feedback

## Access the Survey

**Live URL:** https://projector-windows.netlify.app/survey.html

## Current Implementation

The survey currently stores responses in **browser localStorage** and logs them to the console. This is a functional MVP that works without a backend.

### Collecting Responses (Current Method)

Responses are automatically saved to the browser's localStorage with the key `projectorWindowsSurveys`.

**To export survey data:**

1. Open the survey page
2. Open browser DevTools (F12 or Cmd+Option+I)
3. Go to Console tab
4. Run: `exportSurveyData()`
5. Copy the JSON array output
6. Save to a file for analysis

**To view localStorage directly:**

1. Open DevTools
2. Go to Application tab (Chrome) or Storage tab (Firefox)
3. Navigate to Local Storage → https://projector-windows.netlify.app
4. Find the `projectorWindowsSurveys` key

## Backend Integration Options

### Option 1: Google Forms Backend (Recommended for MVP)

The simplest approach is to modify the survey to POST to a Google Form.

**Steps:**
1. Create a Google Form with matching questions
2. Get the form's action URL and field IDs
3. Update the JavaScript in survey.html to POST to Google's endpoint

**Pros:**
- Free
- No server needed
- Automatic spreadsheet export
- Easy data analysis

**Cons:**
- Requires Google account
- Less customization

### Option 2: Netlify Forms (Zero Config)

Netlify provides built-in form handling.

**Steps:**
1. Add `netlify` attribute to the form tag
2. Add hidden input: `<input type="hidden" name="form-name" value="monetization-survey">`
3. Responses appear in Netlify dashboard

**Pros:**
- Zero configuration
- Free tier includes 100 submissions/month
- Built into existing hosting

**Cons:**
- Limited free tier
- Less flexible data export

### Option 3: Simple Backend API

For full control, create a simple API endpoint.

**Example with Next.js API route:**

```javascript
// /src/app/api/survey/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Store in database (Drizzle ORM is already set up)
  // Or send to Google Sheets API
  // Or email to yourself

  console.log('Survey response:', data);

  return NextResponse.json({
    success: true,
    surveyId: data.surveyId
  });
}
```

Then update the survey's JavaScript:

```javascript
fetch('https://projector-windows.netlify.app/api/survey', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## Sharing the Survey

### 1. Add to Main Site

Add a banner or button on the homepage linking to `/survey.html`.

**Example banner code:**
```html
<div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 16px; text-align: center; border-radius: 8px; margin-bottom: 20px;">
  <strong style="color: #0c0a09;">Help shape the future of Projector Windows!</strong>
  <a href="/survey.html" style="color: #0c0a09; text-decoration: underline; margin-left: 12px;">Take our 5-minute survey</a>
</div>
```

### 2. Social Media

**TikTok/Instagram:**
- "Link in bio" → https://projector-windows.netlify.app/survey.html
- Story/Reel CTA: "Help us build better features - survey link in bio"

**Reddit:**
- Post in r/DnD, r/DMAcademy, r/CozyPlaces
- Title: "I built a free projector window tool - would love your feedback on premium features"
- Include survey link

**GitHub:**
- Add to README.md
- Pin a GitHub Discussion thread with survey link

### 3. Email Signature

If you've collected emails from users:
```
P.S. We'd love your input on Projector Windows' future - take our quick survey:
https://projector-windows.netlify.app/survey.html
```

## Data Analysis

Once you've collected responses, analyze by:

1. **Feature popularity:** Which features got the most votes?
2. **Pricing sweet spot:** What price point has the best conversion potential?
3. **User segments:** D&D users vs. ambiance users - different willingness to pay?
4. **Top requests:** Common themes in open-ended responses?

### Quick Analysis Template

```
Total Responses: [N]

Top Use Cases:
- D&D/Gaming: [%]
- Ambiance: [%]
- Work/Study: [%]

Most Requested Features:
1. [Feature] - [count]
2. [Feature] - [count]
3. [Feature] - [count]

Pricing Preferences:
- One-time purchase: [%]
- Subscription: [%]
- Free/donations: [%]

D&D Bundle Price Range:
- $0-10: [%]
- $15-20: [%]
- $25+: [%]

Donation Support: [% willing]
Branded Content Interest: [% interested]
```

## Next Steps After Survey

1. **Quick wins (Week 1):**
   - Collect 50+ responses
   - Identify top 3 most-requested features
   - Determine pricing sweet spot

2. **Validation (Week 2-3):**
   - Build landing page for #1 feature
   - A/B test pricing
   - Gauge conversion interest

3. **MVP Build (Month 1-2):**
   - Implement most-requested premium feature
   - Set up payment system (Stripe)
   - Launch to survey respondents first (early-bird discount)

## Contact

For questions about the survey or integration, open an issue on GitHub or email [your email].

---

**Survey Version:** 1.0
**Last Updated:** 2026-02-12
