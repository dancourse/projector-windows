# Survey Launch Checklist

Complete these tasks to successfully launch the Projector Windows monetization survey.

**Survey URL:** https://projector-windows.netlify.app/survey.html

---

## Pre-Launch (5 minutes)

- [ ] **Test the survey yourself**
  - Open: https://projector-windows.netlify.app/survey.html
  - Fill it out completely
  - Verify "Thank You" message appears
  - Check DevTools Console for logged response

- [ ] **Verify export function works**
  - Open DevTools (F12) > Console
  - Run: `exportSurveyData()`
  - Verify JSON array is returned

- [ ] **Test on mobile**
  - Open survey on phone
  - Verify all inputs work
  - Check submit button

---

## Launch Day (1-2 hours)

### GitHub (15 minutes)
- [ ] **Create GitHub Discussion**
  - Copy template from `SURVEY-SHARING-TEMPLATES.md`
  - Post in Discussions
  - Pin to top

- [ ] **Verify README update**
  - Check README shows survey link
  - Commit if needed: `git add README.md && git commit -m "Add survey link"`

### Social Media (30 minutes)
- [ ] **Reddit posts**
  - r/DnD (use D&D-focused template)
  - r/DMAcademy (use D&D-focused template)
  - r/CozyPlaces (use cozy-focused template)
  - r/projectors (if exists)

- [ ] **Twitter/X**
  - Tweet with survey link
  - Pin tweet to profile

- [ ] **TikTok/Instagram** (if applicable)
  - Add survey link to bio
  - Post story with link sticker
  - Optional: Create Reel using template

### Homepage Banner (15 minutes) - OPTIONAL
- [ ] **Add survey banner**
  - Copy HTML from `SURVEY-SHARING-TEMPLATES.md`
  - Add to main page component
  - Test locally: `npm run dev`
  - Deploy: `git commit && git push`

### Other Channels (30 minutes)
- [ ] **Discord servers** (if active in communities)
  - Post in relevant D&D servers
  - Share in maker/indie hacker communities

- [ ] **Email** (if you have user list)
  - Send using template from `SURVEY-SHARING-TEMPLATES.md`

---

## Week 1 Follow-up (30 minutes)

### Day 3
- [ ] **Check response count**
  - Run: `exportSurveyData()` in console
  - Target: 10-20 responses

- [ ] **Boost low-performing channels**
  - Reply to Reddit comments
  - Re-share on Twitter
  - Add to more Discord servers

### Day 7
- [ ] **Week 1 review**
  - Export responses: `exportSurveyData()`
  - Save to `survey-responses.json`
  - Run: `node analyze-survey.js`
  - Review preliminary insights

- [ ] **Course correct**
  - If low response rate, share more aggressively
  - If high response rate, start early analysis

---

## Week 2 Analysis (2 hours)

### Day 10
- [ ] **Export all responses**
  - Run: `exportSurveyData()`
  - Save to: `survey-responses.json`

- [ ] **Run analysis**
  - Execute: `node analyze-survey.js`
  - Review: `survey-analysis-summary.json`

- [ ] **Identify key insights**
  - Top 3 most-requested features
  - Pricing sweet spot
  - User segmentation (D&D vs. ambiance)
  - Quick win opportunities

### Day 14
- [ ] **Share results** (optional but recommended)
  - Post summary to GitHub Discussion
  - Thank respondents
  - Preview what you'll build next

---

## Week 3 Action (4-8 hours)

Based on survey results:

- [ ] **Feature prioritization**
  - Rank features by demand
  - Estimate effort for top 3
  - Pick #1 to build first

- [ ] **Create feature landing page**
  - Show mockups/screenshots
  - Test pricing
  - Collect pre-orders/waitlist

- [ ] **Implement quick wins**
  - If donation interest is high: Add Ko-fi button
  - If affiliate interest is high: Join Amazon Associates
  - See `MONETIZATION.md` for details

- [ ] **Begin MVP development**
  - Build #1 most-requested feature
  - Aim for 2-3 week MVP
  - Launch to survey respondents first

---

## Success Metrics

### Response Goals
- [x] **Day 1:** 5+ responses (survey works)
- [ ] **Day 3:** 15+ responses (validation)
- [ ] **Week 1:** 30+ responses (early insights)
- [ ] **Week 2:** 50+ responses (statistical significance)
- [ ] **Week 3:** 100+ responses (high confidence)

### Quality Checks
- [ ] At least 50% complete all required fields
- [ ] At least 30% provide email for follow-up
- [ ] Open-ended responses are substantive (not just "idk")

---

## Quick Commands Reference

```bash
# Test survey locally
open public/survey.html

# Export responses (run in browser console)
exportSurveyData()

# Save responses (copy console output to file)
echo '[...]' > survey-responses.json

# Analyze responses
node analyze-survey.js

# View summary
cat survey-analysis-summary.json

# Deploy changes
git add . && git commit -m "Add survey" && git push
```

---

## Files You Need

All documentation is ready:

1. **SURVEY-QUICKSTART.md** - Quick setup guide
2. **SURVEY-INTEGRATION.md** - Technical integration
3. **SURVEY-SHARING-TEMPLATES.md** - Copy-paste templates
4. **SURVEY-COMPLETE.md** - Full overview
5. **SURVEY-ACTION-CHECKLIST.md** - This file

---

## Troubleshooting

### Survey not loading
- Check: https://projector-windows.netlify.app/survey.html
- Verify file exists: `ls public/survey.html`
- Redeploy if needed: `git push`

### No responses showing up
- Responses are per-browser in localStorage
- Check the browser where users submitted
- Consider backend integration (see `SURVEY-INTEGRATION.md`)

### Need to modify survey
- Edit: `public/survey.html`
- Test locally: `open public/survey.html`
- Deploy: `git add public/survey.html && git commit && git push`

---

## Support

Questions or issues?
- Review `SURVEY-QUICKSTART.md` for quick setup
- Check `SURVEY-INTEGRATION.md` for technical details
- Use templates in `SURVEY-SHARING-TEMPLATES.md`

---

## Timeline Summary

- **Day 0 (Today):** Launch survey, share everywhere
- **Day 3:** Check responses, boost promotion
- **Day 7:** Week 1 review, preliminary analysis
- **Day 14:** Full analysis, identify priorities
- **Day 21:** Create landing page, begin MVP
- **Day 30:** Launch MVP to survey respondents

---

**Current Status:** Survey ready to launch
**Next Action:** Check the boxes above!

**Goal:** Get 50-100 responses, validate demand, build what users actually want.

---

**Created:** 2026-02-12
**Version:** 1.0
