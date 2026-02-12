# Projector Windows - Phase 1 Monetization

## Overview

Phase 1 adds three quick-win monetization strategies to Projector Windows:

1. **Amazon Affiliate Links** - Recommended projectors page with commission on sales
2. **Ko-fi Donations** - Voluntary support from users who love the tool
3. **TikTok Content Strategy** - Drive traffic and affiliate sales via social media

**Status:** ✅ Code Complete | 🔄 Awaiting External Setup
**Expected Revenue (Month 1):** £35-170

---

## New Pages

### 1. Recommended Projectors (`/projectors`)

![Projectors Page Preview]

**Features:**
- 6 curated projector recommendations
- Organized by price tier: Budget (£300-600), Mid-Range (£600-1000), Premium (£900+)
- Detailed specs and features for each
- Amazon affiliate links (1-3% commission)
- Buying guide and setup tips
- Clear affiliate disclosure

**Revenue Model:**
- £400 average projector price × 1-3% commission = £4-12 per sale
- Target: 5-10 sales/month = £20-120/month

**Products Featured:**
- Budget: XGIMI MoGo 2 Pro (£349), Anker Nebula Capsule 3 (£449)
- Mid-Range: BenQ GV31 (£599), XGIMI Horizon Pro (£849)
- Premium: Epson EF-12 (£899), XGIMI Aura (£2,299)

---

### 2. Support Page (`/support`)

![Support Page Preview]

**Features:**
- Explanation of why support matters (hosting, features, maintenance)
- Supporter benefits by tier:
  - £3 - Thank you + name in supporters list
  - £5+ - Premium theme access (coming soon)
  - £10+ - All premium themes + priority support
- Roadmap for future features
- FAQ section
- Ko-fi integration

**Revenue Model:**
- Target: 5-10 supporters/month
- Average donation: £3-5
- Expected: £15-50/month

---

### 3. Privacy Policy (`/privacy`)

![Privacy Policy Preview]

**Features:**
- GDPR compliant
- Required for Amazon Associates approval
- Covers all third-party services:
  - Heap Analytics
  - YouTube API
  - Amazon Associates
  - Ko-fi payments
- Clear, user-friendly language

**Purpose:**
- Legal requirement for affiliate program
- Builds trust with users
- Professional presentation

---

## Updated Pages

### Homepage
**Added:**
- Prominent "Need a Projector?" CTA section
- Links to new projectors page
- Clean integration with existing design

### Navigation Bar
**Added:**
- "Projectors" link (desktop only, to avoid mobile clutter)
- "Support" button (Ko-fi style)
- Updated mobile responsive layout

### Footer
**Added:**
- Quick links: Projectors, Support, Privacy
- Ko-fi support button
- Better responsive layout for mobile

---

## New Components

### `SupportButton`

Three variants for different contexts:
- **Nav:** Small button for top navigation
- **Hero:** Large call-to-action button
- **Footer:** Medium button for footer

Styled to match Ko-fi brand colors (#FF5E5B).

---

## Documentation

### Implementation Guides

**1. Amazon Associates Signup** (`AMAZON-ASSOCIATES-SIGNUP.md`)
- Complete step-by-step application process
- Prerequisites and requirements
- UK-specific notes and commission rates
- Post-signup tasks and testing
- Troubleshooting common issues

**2. Ko-fi Setup** (`KOFI-SETUP.md`)
- Account creation walkthrough
- Profile optimization tips
- Payment method setup (PayPal/Stripe)
- Site integration instructions
- Marketing strategy and best practices

**3. TikTok Video Strategy** (`TIKTOK-VIDEO-SCRIPTS.md`)
- 3 complete video scripts with shot lists
- Posting strategy and timing
- 15+ additional video ideas
- Content calendar for first month
- Analytics tracking guide

### Quick Reference

**4. Phase 1 Summary** (`PHASE-1-SUMMARY.md`)
- Complete overview of all changes
- Action items checklist
- Expected results and metrics
- Files modified and created

**5. Deployment Guide** (`DEPLOY.md`)
- Pre-deployment checklist
- Three deployment options
- Post-deployment verification
- Troubleshooting guide
- Rollback instructions

**6. Quick Start** (`QUICK-START.md`)
- Ultra-condensed action list
- Priority order for tasks
- Time estimates
- Success metrics

---

## Technical Details

### Files Created
```
/src/app/projectors/page.tsx          - Projectors recommendations page
/src/app/support/page.tsx             - Ko-fi support page
/src/app/privacy/page.tsx             - Privacy policy
/src/components/SupportButton.tsx     - Ko-fi button component
```

### Files Modified
```
/src/app/page.tsx                     - Added projectors CTA
/src/app/layout.tsx                   - Updated nav and footer
```

### Documentation Files
```
AMAZON-ASSOCIATES-SIGNUP.md           - Amazon signup guide
KOFI-SETUP.md                         - Ko-fi setup guide
TIKTOK-VIDEO-SCRIPTS.md               - Video scripts and strategy
PHASE-1-SUMMARY.md                    - Complete overview
DEPLOY.md                             - Deployment guide
QUICK-START.md                        - Quick reference
README-PHASE1.md                      - This file
```

---

## Revenue Projections

### Month 1
- **Amazon Affiliates:** £20-120
- **Ko-fi Donations:** £15-50
- **Total:** £35-170

### Month 3 (with optimization)
- **Amazon Affiliates:** £100-300
- **Ko-fi Donations:** £50-100
- **Total:** £150-400

### Month 6 (with premium features)
- **Amazon Affiliates:** £200-500
- **Ko-fi Donations:** £100-200
- **Premium Features:** £300-800
- **Total:** £600-1,500

See `MONETIZATION.md` for full roadmap and Phase 2/3 plans.

---

## Traffic Strategy

### Current Traffic
- ~100-200 visits/month
- Mostly organic search and GitHub referrals

### Phase 1 Target
- 500-1,000 visits/month (5x growth)

### Traffic Sources

**1. TikTok (Primary Driver)**
- 3-5 videos per week
- Target: 1 viral video (100k+ views) per month
- Hook: Projector window trend, D&D setups, room transformations
- Link in bio drives traffic

**2. Reddit**
- r/projectors - Focus on tool + recommendations
- r/DnD - Focus on D&D use case
- r/hometheater - Setup guides
- r/CozyPlaces - Aesthetic angle

**3. Organic Search**
- Already ranking for "projector ambience"
- Target: "best projector for ambience", "D&D projector setup"
- Privacy policy and new content improves SEO

**4. Word of Mouth**
- Ko-fi supporters share naturally
- TikTok shares and duets
- Community recommendations

---

## Next Steps

### Immediate (You)
1. Sign up for Amazon Associates
2. Sign up for Ko-fi
3. Update placeholder IDs in code
4. Deploy to production

### Week 1
1. Create @projector_windows TikTok
2. Film first 3 videos
3. Post to Reddit communities

### Week 2-4
1. Post TikTok videos (3-5 per week)
2. Monitor analytics
3. Iterate based on performance

### Phase 2 (Months 2-3)
1. Curate premium video collections
2. Implement Stripe payments
3. Launch premium tier at £9.99

See `MONETIZATION.md` for full roadmap.

---

## Design Decisions

### Why These Projectors?
- Mix of price points (£349 - £2,299)
- All have good reviews and availability
- Suitable for ambience use case
- Range from portable to permanent installation

### Why Ko-fi vs Patreon?
- Zero platform fees (Ko-fi) vs 5-12% (Patreon)
- One-time donations easier than subscriptions
- Simpler for supporters
- Can add memberships later if needed

### Why TikTok vs YouTube?
- TikTok: Viral potential, younger audience, trend-aligned
- YouTube: Good for SEO, older audience, longer content
- Strategy: Start with TikTok, repurpose to YouTube Shorts

### Why These Features First?
- Lowest effort, fastest to revenue
- No complex development required
- Validates demand before building premium features
- Establishes revenue streams to fund Phase 2

---

## Metrics to Track

### Site Analytics (Heap)
- Page views per page
- Traffic sources
- Time on site
- Bounce rate

### Amazon Associates Dashboard
- Clicks on affiliate links
- Conversion rate
- Revenue per sale
- Best-performing products

### Ko-fi Dashboard
- Number of supporters
- Average donation
- Geographic breakdown
- Donation frequency

### TikTok Analytics
- Views per video
- Watch time percentage
- Profile visits
- Link clicks

---

## Risk Mitigation

### Amazon Associates Rejection
- **Risk:** Application rejected due to low traffic
- **Mitigation:** Privacy policy in place, wait for TikTok traffic boost, reapply

### No Donations
- **Risk:** Users don't donate via Ko-fi
- **Mitigation:** Support page explains value, small perks for £5+ donors

### TikTok Fails to Drive Traffic
- **Risk:** Videos don't go viral
- **Mitigation:** 15+ video ideas, iterate based on performance, supplement with Reddit

### Competitor Copies Idea
- **Risk:** Someone builds similar tool
- **Mitigation:** Curation is competitive advantage, focus on community and quality

---

## Success Indicators

**Week 1:**
- [ ] Site deployed with all new features
- [ ] Amazon Associates application submitted
- [ ] Ko-fi account created and live

**Week 2:**
- [ ] First TikTok video posted
- [ ] First affiliate link click
- [ ] First Ko-fi donation

**Month 1:**
- [ ] 5+ affiliate sales
- [ ] 5+ Ko-fi donations
- [ ] 1 viral TikTok video
- [ ] 500+ site visits

**Month 3:**
- [ ] £150+ revenue
- [ ] 1,000+ site visits/month
- [ ] 10+ TikTok videos posted
- [ ] Community growth on Reddit

---

## FAQ

**Q: Why not charge for the basic tool?**
A: Keeping it free drives adoption. Monetize power users and affiliate commissions instead.

**Q: Will ads be added?**
A: No. Ads ruin user experience. Focus on affiliate and premium features instead.

**Q: What if Amazon Associates gets banned?**
A: Diversify: Direct brand partnerships, TikTok Shop, alternative affiliate programs.

**Q: Is Phase 1 worth the effort?**
A: Yes. Even £50/month covers hosting. Validates monetization before building complex features.

---

## Contact

**Questions or issues?**
- Email: dan@smartforge.uk
- GitHub: https://github.com/dancourse/projector-windows

---

**Phase 1 Status:** ✅ Ready to Deploy

**Next Action:** Read `QUICK-START.md` and begin external signups.

**Time to First Revenue:** 1-2 weeks after setup complete.
