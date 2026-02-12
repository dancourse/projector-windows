# Ko-fi Setup Checklist

**Platform:** https://ko-fi.com/
**Purpose:** Accept voluntary donations from users who love Projector Windows

---

## Why Ko-fi?

- Zero fees (Ko-fi doesn't take a cut, only payment processor fees ~2-5%)
- No subscriptions required (one-time donations)
- Simple, creator-friendly interface
- Trusted by creators worldwide
- Optional: Can set up membership tiers later

**Alternative:** Buy Me a Coffee (https://www.buymeacoffee.com/) - nearly identical, choose whichever you prefer

---

## Signup Process

### Step 1: Create Account
1. Go to https://ko-fi.com/
2. Click "Start a Page"
3. Sign up with:
   - Email (use dan@smartforge.uk or project email)
   - Or connect Google/Facebook account

### Step 2: Choose Username
- [ ] Pick username: `projectorwindows` or similar
- [ ] This becomes your URL: `ko-fi.com/projectorwindows`
- [ ] Username is permanent, choose carefully

### Step 3: Set Up Profile

**Display Name:**
```
Projector Windows
```

**Profile Photo:**
- Use the site logo (🪟) or projector icon
- Export from `/public/icon-192.png` or `/public/icon-512.png`

**Cover Photo:**
- Screenshot of the site in action
- Or a cozy ambience projection photo
- Size: 1920x400px recommended

**Bio:**
```
Creator of Projector Windows - the free tool for finding cosy ambience videos
perfect for your projector setup. Help me keep it running and support new features!

✨ 200+ curated themes
🎥 Free forever
❤️ Built with love for the projector window community
```

**Short Description (for button):**
```
Support Projector Windows development
```

### Step 4: Set Donation Amount

**Default donation:** £3 (price of a coffee in UK)

**Suggested amounts:**
- [ ] £3 - One coffee
- [ ] £5 - Premium theme access (future benefit)
- [ ] £10 - Super supporter
- [ ] £20 - Generous supporter

**Custom amount:** Enabled (let people donate any amount)

### Step 5: Connect Payment Method

Ko-fi supports:
- [ ] PayPal (recommended - fastest setup)
- [ ] Stripe (for direct bank deposit)

**PayPal Setup:**
1. Link existing PayPal account
2. Or create new business PayPal
3. Verify email
4. Done - ready to receive donations

**Stripe Setup (alternative):**
1. Create Stripe account at https://stripe.com/
2. Provide business details (Smart Forge LTD)
3. Add bank account for payouts
4. Connect to Ko-fi
5. Takes 2-3 business days to verify

### Step 6: Set Up Thank You Message

**Message after donation:**
```
Thank you so much for supporting Projector Windows! 🙏

Your donation helps cover hosting costs and supports the development of new features.

If you donated £5 or more and would like early access to premium themes when they launch,
please email dan@smartforge.uk with your Ko-fi username.

Keep creating magical ambience! ✨

Dan Course
Creator of Projector Windows
```

### Step 7: Enable Optional Features

**Gallery:**
- [ ] Add screenshots of the site
- [ ] Show different themes in action
- [ ] D&D setup photos

**Goals (optional):**
Create a funding goal to show progress:
- Goal: £50/month for hosting costs
- Or: £200 for premium features development

**Memberships (optional for later):**
Can add monthly subscription tiers later:
- £2/month - Supporter badge
- £5/month - All premium themes
- Skip for now, add after validating demand

---

## Integration with Projector Windows Site

### Update SupportButton Component

1. Replace placeholder in `/src/components/SupportButton.tsx`:

```typescript
const kofiUsername = 'YOUR_KOFI_USERNAME'; // Replace with actual Ko-fi username
```

With actual username:

```typescript
const kofiUsername = 'projectorwindows'; // Or whatever you chose
```

### Update Environment Variables (if needed)

Create `/Users/dancourse/Claude/projector-windows/.env.local`:

```bash
# Ko-fi Configuration
NEXT_PUBLIC_KOFI_USERNAME=projectorwindows
```

Then update component to use env var:

```typescript
const kofiUsername = process.env.NEXT_PUBLIC_KOFI_USERNAME || 'projectorwindows';
```

---

## Marketing the Support Option

### Where to Promote:

1. **Site Navigation** ✅ (already added)
   - Top nav: Support button
   - Footer: Support button and link

2. **Support Page** ✅ (already created)
   - Detailed explanation at `/support`
   - Benefits for supporters

3. **Social Media**
   - [ ] Add to TikTok bio
   - [ ] Mention in video descriptions
   - [ ] Pin comment with link

4. **GitHub Repo**
   - [ ] Add "Sponsor" button to README
   - [ ] Mention in project description

5. **Reddit/Community Posts**
   - [ ] Include link when sharing in r/projectors, r/DnD
   - [ ] Non-pushy mention

### Messaging Strategy:

**What Works:**
- "Keep this free tool running"
- "Help me add new features"
- "Support development"
- "Buy me a coffee if this helped you"

**What to Avoid:**
- Begging or guilt-tripping
- Paywalling basic features
- Aggressive CTAs

---

## First Month Checklist

### Week 1:
- [ ] Complete Ko-fi account setup
- [ ] Add profile photo and cover image
- [ ] Write compelling bio
- [ ] Connect PayPal or Stripe
- [ ] Test donation flow (donate £1 to yourself)
- [ ] Update site with real Ko-fi username
- [ ] Deploy updated site to Netlify

### Week 2:
- [ ] Add gallery images to Ko-fi
- [ ] Share Ko-fi link on social media
- [ ] Add Ko-fi button to GitHub README
- [ ] Post in relevant Reddit communities

### Week 3:
- [ ] Monitor first donations
- [ ] Send thank you emails to supporters
- [ ] Analyze Ko-fi analytics
- [ ] Adjust donation amounts if needed

### Week 4:
- [ ] Create monthly update for supporters
- [ ] Share progress on features
- [ ] Consider adding funding goal

---

## Ko-fi Best Practices

### Profile Optimization:
1. **Be transparent about costs**
   - List actual hosting expenses
   - Show what donations fund

2. **Offer small perks**
   - Early access to features
   - Name in supporters list
   - Special thank you

3. **Update regularly**
   - Post updates on Ko-fi
   - Show progress on funded features

4. **Thank every supporter**
   - Personal email or DM
   - Make them feel appreciated

### What Successful Creators Do:

**MyNoise.net (generates $75k/year from donations):**
- Clear explanation of costs
- Multiple donation tiers
- Unlock premium content for supporters
- Regular updates

**Indie game devs:**
- Behind-the-scenes content
- Early access to new features
- Direct communication with supporters

---

## Analytics & Tracking

### Ko-fi Dashboard Shows:
- Total donations
- Number of supporters
- Average donation amount
- Top supporters
- Geographic breakdown

### Success Metrics (First 3 Months):

**Month 1:**
- Goal: 5-10 supporters
- Target: £15-50 total

**Month 2:**
- Goal: 15-25 supporters
- Target: £50-100 total

**Month 3:**
- Goal: 25-50 supporters
- Target: £100-200 total

### What Indicates Success:
- Repeat donors (people coming back)
- Donations after TikTok posts (validates content value)
- Donations from Reddit/HN posts (engaged community)
- Unsolicited donations (word of mouth)

---

## Alternative: Buy Me a Coffee

If you prefer Buy Me a Coffee:

**Pros:**
- Nearly identical to Ko-fi
- Slightly more polished interface
- Built-in membership features

**Cons:**
- 5% platform fee (Ko-fi is 0%)
- Fewer customization options

**Process is the same:**
1. Sign up at https://www.buymeacoffee.com/
2. Create profile
3. Connect payment
4. Update site with username

---

## Tax & Legal Considerations

### UK Tax (if applicable):
- Donations under £1,000/year: likely no tax implications
- Over £1,000/year: may need to declare as income
- Consult accountant if donations become significant

### Smart Forge LTD:
If treating as business income:
- All donations are taxable income
- Can offset hosting/development expenses
- Keep records via Ko-fi dashboard
- Smart Forge LTD handles tax filings

---

## Next Steps (After Setup)

1. **Deploy site updates:**
   ```bash
   cd /Users/dancourse/Claude/projector-windows
   git add .
   git commit -m "Add Ko-fi support and projectors page"
   git push
   netlify deploy --prod
   ```

2. **Test Ko-fi flow:**
   - Make test donation
   - Verify payment received
   - Check thank you message displays

3. **Share first post:**
   - LinkedIn: "Launching Ko-fi for Projector Windows"
   - Twitter/X: "Supporting this free tool"
   - Reddit: Subtle mention in project posts

4. **Monitor results:**
   - Check Ko-fi dashboard weekly
   - Track correlation with TikTok posts
   - Adjust messaging as needed

---

**Estimated Time:**
- Initial setup: 30 minutes
- Profile optimization: 30 minutes
- Site integration: 5 minutes
- Testing: 10 minutes
- **Total: ~75 minutes**

**Expected First Month Revenue:**
- Conservative: £15-50
- Optimistic: £50-150
- If viral TikTok: £100-300

---

**Resources:**
- Ko-fi Help Center: https://help.ko-fi.com/
- Ko-fi Creator Guide: https://help.ko-fi.com/hc/en-us/categories/360000049415
- Payment Processing Times: 3-7 days (PayPal), 7-14 days (Stripe)

---

**Last Updated:** 2026-02-12
