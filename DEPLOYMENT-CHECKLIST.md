# Phase 1 Monetization - Deployment Checklist

**Date:** 2026-02-12
**Status:** Ready for Implementation

---

## Implementation Status

### ✅ Already Complete (Background Agents)

- [x] Projectors recommendation page (`/src/app/projectors/page.tsx`)
- [x] Support/Ko-fi page (`/src/app/support/page.tsx`)
- [x] Privacy policy page (`/src/app/privacy/page.tsx`)
- [x] SupportButton component (`/src/components/SupportButton.tsx`)
- [x] Homepage projector CTA section
- [x] Navigation and footer updates
- [x] Survey page (`/public/survey.html`)
- [x] Documentation (KOFI-SETUP.md, AMAZON-ASSOCIATES-SIGNUP.md, TIKTOK-VIDEO-SCRIPTS.md, etc.)

### 🔄 To Complete Now

#### 1. Update Placeholder Values

**Ko-fi Username**
- [ ] File: `/src/components/SupportButton.tsx`
- [ ] Line 4: Replace `'YOUR_KOFI_USERNAME'` with actual username
- [ ] Options:
  - Use `'projectorwindows'` (recommended)
  - Or create Ko-fi account first and get username
  - Or use temporary placeholder for now, update later

**Amazon Associates ID**
- [ ] File: `/src/app/projectors/page.tsx`
- [ ] Replace all 6 instances of `tag=YOUR_ASSOCIATE_ID`
- [ ] Options:
  - Apply to Amazon Associates now (requires deployed site)
  - Use temporary placeholder for now
  - Update after approval

#### 2. Add Survey Banner to Homepage

- [ ] Add survey CTA banner to homepage
- [ ] Encourage user feedback for feature prioritization
- [ ] Non-intrusive placement

#### 3. Deploy to Netlify

- [ ] Commit all changes
- [ ] Push to GitHub
- [ ] Verify Netlify auto-deploy
- [ ] Test all pages

#### 4. Post-Deployment Verification

- [ ] Test `/projectors` page
- [ ] Test `/support` page
- [ ] Test `/privacy` page
- [ ] Test `/survey.html` page
- [ ] Test all navigation links
- [ ] Test Ko-fi button (after username update)
- [ ] Test Amazon affiliate links (after ID update)
- [ ] Mobile responsive check

---

## Next Week Actions

### External Account Setup

**Ko-fi (30-60 minutes)**
- [ ] Sign up at https://ko-fi.com/
- [ ] Choose username (recommend: `projectorwindows`)
- [ ] Set up profile with bio and images
- [ ] Connect PayPal or Stripe
- [ ] Update site with real username
- [ ] Re-deploy

**Amazon Associates (Application)**
- [ ] Apply at https://affiliate-program.amazon.co.uk/
- [ ] Site must be live with privacy policy ✅ (done)
- [ ] Wait for approval (1-3 days)
- [ ] Update site with real Associate ID
- [ ] Re-deploy

**TikTok Account**
- [ ] Create @projector_windows account
- [ ] Film first 3 videos (scripts in TIKTOK-VIDEO-SCRIPTS.md)
- [ ] Post 3-5x per week
- [ ] Link to site in bio

---

## Week 2-4: Marketing & Monitoring

### Social Sharing
- [ ] Post to r/projectors
- [ ] Post to r/DnD
- [ ] Post to r/hometheater
- [ ] Share on LinkedIn
- [ ] Share on Twitter/X

### Analytics Monitoring
- [ ] Check Heap Analytics for traffic
- [ ] Monitor Amazon Associates clicks
- [ ] Monitor Ko-fi donations
- [ ] Check TikTok analytics
- [ ] Review survey responses

### Survey Analysis
- [ ] Collect 50+ survey responses
- [ ] Analyze feature requests
- [ ] Identify pricing sweet spot
- [ ] Plan Phase 2 features based on feedback

---

## Revenue Targets

**Month 1:** £35-170
- Amazon Affiliates: £20-120
- Ko-fi Donations: £15-50

**Month 3:** £150-400
- Amazon Affiliates: £100-300
- Ko-fi Donations: £50-100

**Month 6:** £600-1,500
- Amazon Affiliates: £200-500
- Ko-fi Donations: £100-200
- Premium Features: £300-800

---

## Files Modified/Created

### Created
- `/src/app/projectors/page.tsx`
- `/src/app/support/page.tsx`
- `/src/app/privacy/page.tsx`
- `/src/components/SupportButton.tsx`
- `/public/survey.html`

### Modified
- `/src/app/page.tsx` (added projector CTA)
- `/src/app/layout.tsx` (added nav/footer links)

### Documentation
- `AMAZON-ASSOCIATES-SIGNUP.md`
- `KOFI-SETUP.md`
- `TIKTOK-VIDEO-SCRIPTS.md`
- `SURVEY-*.md` (multiple)
- `PHASE-1-SUMMARY.md`
- `DEPLOY.md`
- `QUICK-START.md`
- `README-PHASE1.md`
- `DEPLOYMENT-CHECKLIST.md` (this file)

---

## Success Metrics

### Week 1
- [ ] Site deployed with all features
- [ ] All pages load correctly
- [ ] No broken links
- [ ] Mobile responsive

### Week 2
- [ ] First TikTok video posted
- [ ] First affiliate link click
- [ ] First Ko-fi donation
- [ ] 20+ survey responses

### Month 1
- [ ] 5+ affiliate sales
- [ ] 5+ Ko-fi donations
- [ ] 1 viral TikTok video (100k+ views)
- [ ] 500+ site visits
- [ ] 50+ survey responses

---

## Rollback Plan

If issues arise:
1. Check Netlify deploy logs
2. Revert to previous deploy in Netlify dashboard
3. Or: `git revert HEAD && git push`

---

**Next Action:** Update placeholder values and deploy

**Time Estimate:** 30-60 minutes for deployment
