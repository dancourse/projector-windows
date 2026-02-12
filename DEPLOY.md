# Deployment Guide - Phase 1 Monetization

## Pre-Deployment Checklist

### 1. Update Placeholder Values

**Before deploying, you MUST update these placeholder values:**

#### Amazon Associates ID
- [ ] Sign up for Amazon Associates
- [ ] Get your Associate ID (format: `yourname-21`)
- [ ] Update `/src/app/projectors/page.tsx`:
  - Find: `tag=YOUR_ASSOCIATE_ID`
  - Replace with: `tag=yourname-21` (your actual ID)
  - There are 6 instances to replace

#### Ko-fi Username
- [ ] Sign up for Ko-fi
- [ ] Choose your username (e.g., `projectorwindows`)
- [ ] Update `/src/components/SupportButton.tsx`:
  - Find: `const kofiUsername = 'YOUR_KOFI_USERNAME';`
  - Replace with: `const kofiUsername = 'projectorwindows';`

### 2. Test Locally (Optional)

```bash
cd /Users/dancourse/Claude/projector-windows
npm install
npm run dev
```

Visit http://localhost:3000 and test:
- /projectors page loads
- /support page loads
- /privacy page loads
- Navigation links work
- Support button works (after Ko-fi username update)

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)

If Netlify is connected to GitHub with auto-deploy:

```bash
cd /Users/dancourse/Claude/projector-windows
git add .
git commit -m "Add Phase 1 monetization: projectors, Ko-fi, privacy policy

- Add recommended projectors page with Amazon affiliate links
- Add Ko-fi donation support page
- Add privacy policy (required for Amazon Associates)
- Update navigation and footer with new links
- Add projector CTA section to homepage
"
git push origin main
```

Netlify will automatically:
1. Detect the push
2. Build the site
3. Deploy to production
4. Available at https://projector-windows.netlify.app

Monitor deployment at: https://app.netlify.com/sites/projector-windows/deploys

### Option 2: Manual Netlify Deployment

If auto-deploy isn't set up:

```bash
cd /Users/dancourse/Claude/projector-windows

# Build the site
npm run build

# Deploy to production
netlify deploy --prod
```

When prompted:
- Site: projector-windows
- Directory: .next

### Option 3: Deploy from Netlify Dashboard

1. Go to https://app.netlify.com/
2. Sites → projector-windows
3. Deploys tab
4. Click "Trigger deploy" → "Deploy site"

## Post-Deployment Verification

### Test These URLs:

- [ ] https://projector-windows.netlify.app/ (homepage)
- [ ] https://projector-windows.netlify.app/projectors
- [ ] https://projector-windows.netlify.app/support
- [ ] https://projector-windows.netlify.app/privacy
- [ ] https://projector-windows.netlify.app/favourites (existing)

### Test Functionality:

- [ ] Click "Projectors" link in nav (desktop)
- [ ] Click "Support" button in nav
- [ ] Click Ko-fi button (should open ko-fi.com/[username])
- [ ] Click Amazon affiliate links (should open Amazon with your tag)
- [ ] Click "Privacy" link in footer
- [ ] Mobile responsive on all pages

### Check Analytics:

- [ ] Heap Analytics tracking (already configured)
- [ ] Add UTM parameters to social shares:
  - `?utm_source=tiktok&utm_medium=social`
  - `?utm_source=reddit&utm_medium=social`

## Troubleshooting

### Build Fails

**Error: "sharp" build failed**
- This is a known warning, won't affect deployment
- Netlify will use its own sharp binary

**Error: TypeScript errors**
- Run `npm run build` locally to see errors
- Fix any import or type errors
- Push changes

### Pages Don't Load

**404 on new pages**
- Clear browser cache
- Check Netlify deploy logs
- Verify files are in `/src/app/` directory

**Styles look broken**
- Check Tailwind CSS is working
- Verify `globals.css` is imported
- Check browser console for errors

### Links Don't Work

**Ko-fi button does nothing**
- Verify username is updated in `SupportButton.tsx`
- Check browser console for errors

**Amazon links don't work**
- Verify Associate ID is correct
- Test link in private/incognito window
- Check Amazon Associates dashboard

## Next Steps After Deployment

### Week 1: Setup External Accounts

1. **Amazon Associates**
   - Apply now (needs live site with privacy policy)
   - Get approved (1-3 days)
   - Update affiliate links with real ID
   - Re-deploy

2. **Ko-fi**
   - Sign up
   - Set up profile
   - Connect payment method
   - Update site with username
   - Re-deploy

### Week 2: Create Content

3. **TikTok**
   - Create @projector_windows account
   - Film first 3 videos (see `TIKTOK-VIDEO-SCRIPTS.md`)
   - Schedule posts
   - Add links to bio

4. **Social Sharing**
   - Post to r/projectors
   - Post to r/DnD
   - Share on Twitter/X
   - LinkedIn post

### Week 3-4: Monitor & Optimize

5. **Analytics**
   - Check Heap Analytics for traffic
   - Monitor Amazon Associates clicks
   - Check Ko-fi donations
   - Track TikTok performance

6. **Iterate**
   - Adjust based on data
   - Update projector recommendations
   - Add more content
   - Respond to feedback

## Rollback Plan

If something breaks:

```bash
# Check recent deploys
netlify deploy:list

# Rollback to previous deploy
# (In Netlify dashboard: Deploys → Click previous deploy → "Publish deploy")
```

Or revert Git commit:

```bash
git log  # Find previous commit hash
git revert HEAD  # Revert last commit
git push
```

## Environment Variables

No environment variables needed for Phase 1.

Optional for future:
```bash
# .env.local (not committed to git)
NEXT_PUBLIC_KOFI_USERNAME=projectorwindows
AMAZON_ASSOCIATE_ID=yourname-21
```

## Support

**If you get stuck:**
- Check Netlify deploy logs
- Check browser console for errors
- Review `PHASE-1-SUMMARY.md` for details
- Contact: dan@smartforge.uk

---

**Ready to Deploy?**
1. Update placeholders (Associate ID, Ko-fi username)
2. Commit changes
3. Push to GitHub
4. Verify deployment
5. Test all new pages
6. Share on social media!

---

**Deployment Status:**
- [ ] Code ready
- [ ] Placeholders updated
- [ ] Committed to Git
- [ ] Pushed to GitHub
- [ ] Deployed to Netlify
- [ ] Verified working
- [ ] Amazon Associates applied
- [ ] Ko-fi set up
- [ ] TikTok account created
- [ ] First posts scheduled

**Time Estimate:** 1-2 hours (excluding external account approvals)
