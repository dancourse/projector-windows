# Survey Quick Start Guide

Get the Projector Windows monetization survey up and running in 5 minutes.

## What's Been Created

1. **survey.html** - Self-contained survey page (`/public/survey.html`)
2. **SURVEY-INTEGRATION.md** - Technical integration guide
3. **SURVEY-SHARING-TEMPLATES.md** - Copy-paste templates for all platforms
4. **analyze-survey.js** - Data analysis script
5. **Updated README.md** - Added survey section

## Immediate Next Steps

### 1. Deploy (Already Done If Using Netlify)

The survey is in `/public/`, so it's automatically deployed at:
```
https://projector-windows.netlify.app/survey.html
```

Test it works:
```bash
curl -I https://projector-windows.netlify.app/survey.html
```

### 2. Add to Homepage (Optional but Recommended)

Add a banner to your main page promoting the survey.

Edit `/src/app/page.tsx` or equivalent and add:

```tsx
<div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 text-center rounded-lg mb-6 shadow-lg">
  <strong className="text-stone-900 text-lg">
    Help shape the future of Projector Windows!
  </strong>
  <a
    href="/survey.html"
    className="text-stone-900 underline ml-3 font-semibold hover:text-stone-800"
  >
    Take our 5-minute survey →
  </a>
</div>
```

### 3. Share the Survey

Use the templates in `SURVEY-SHARING-TEMPLATES.md`:

**Quick wins:**
- [ ] Post to GitHub (pin as discussion)
- [ ] Add to README (you're done!)
- [ ] Tweet/post on X
- [ ] Share in relevant Reddit communities
- [ ] Add to TikTok/Instagram bio if you have presence

**Goal:** 50-100 responses in Week 1

### 4. Collect Responses

Current setup stores responses in browser localStorage (works immediately, no backend needed).

**To view responses:**
1. Open https://projector-windows.netlify.app/survey.html
2. Open DevTools (F12)
3. Console tab
4. Run: `exportSurveyData()`
5. Copy the JSON output

**To save responses:**
```bash
# Create a file with the exported JSON
echo '[...]' > survey-responses.json

# Run analysis
node analyze-survey.js
```

### 5. Upgrade Backend (When Ready)

Once you're getting real traffic, upgrade from localStorage to a proper backend:

**Option A: Netlify Forms (Easiest)**
```html
<form netlify name="monetization-survey">
  <input type="hidden" name="form-name" value="monetization-survey">
  <!-- rest of form -->
</form>
```

**Option B: Google Forms**
- Create matching Google Form
- Update form action to POST to Google

**Option C: Custom API**
- Create `/src/app/api/survey/route.ts`
- Store in database or email to yourself

See `SURVEY-INTEGRATION.md` for full details.

## Testing the Survey

Before sharing widely, test the full flow:

```bash
# 1. Open survey in browser
open https://projector-windows.netlify.app/survey.html

# 2. Fill it out completely
# 3. Submit
# 4. Check DevTools > Console for the logged response
# 5. Run exportSurveyData() to verify it's saved
```

## Response Timeline

### Week 1: Launch & Share
- Deploy survey
- Share across all channels
- Target: 20-30 responses

### Week 2: Amplify
- Follow up in communities
- Add banner to homepage
- Target: 50+ total responses

### Week 3: Analyze
- Run analysis script
- Identify top 3 features
- Determine pricing sweet spot
- Share results with respondents

### Week 4: Validate
- Create landing page for #1 feature
- Test pricing with small audience
- Begin MVP planning

## Key Metrics to Watch

From the survey analysis, focus on:

1. **Feature Priority**: Top 3 most-requested features (build these first)
2. **Pricing Sweet Spot**: Where most users cluster
3. **User Segments**: D&D vs. ambiance vs. work (different needs/willingness to pay)
4. **Donation Interest**: Quick win opportunity

## Quick Commands

```bash
# View survey locally
open public/survey.html

# Export responses from browser console
exportSurveyData()

# Analyze responses
node analyze-survey.js

# View analysis summary
cat survey-analysis-summary.json
```

## Sharing Checklist

- [ ] Test survey works (fill it out yourself)
- [ ] Add banner to homepage (optional)
- [ ] Post to GitHub
- [ ] Share on Twitter/X
- [ ] Post to relevant Reddit communities
- [ ] Add to TikTok/Instagram if applicable
- [ ] Share in Discord servers (if active in relevant communities)
- [ ] Email existing users (if you have a list)

## Support

Questions or issues?
- Check `SURVEY-INTEGRATION.md` for technical details
- Check `SURVEY-SHARING-TEMPLATES.md` for copy-paste templates
- Open a GitHub issue

---

**Goal:** Get to 50-100 responses, analyze, build what users actually want.

**Remember:** This is validation BEFORE building. Don't spend weeks building features nobody wants. Let the survey guide you.

---

**Survey Status:** Ready to deploy
**Estimated Setup Time:** 5 minutes
**Time to First Response:** Immediately after sharing
