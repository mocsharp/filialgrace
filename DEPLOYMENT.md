# GitHub Pages Deployment Instructions for filialgrace.org

This guide will help you deploy the Temple of Filial Grace website to GitHub Pages with a custom domain.

## Prerequisites

- GitHub account
- Repository with the website code
- Domain name (filialgrace.org)
- Access to domain DNS settings

## Step 1: Prepare the Repository

1. **Ensure your code is pushed to GitHub**:
   ```bash
   cd filialgrace-website
   git add .
   git commit -m "Initial commit - Temple of Filial Grace website"
   git push origin main
   ```

## Step 2: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/mocsharp/filialgrace`
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`

## Step 3: Configure Custom Domain in GitHub

1. Still in **Settings > Pages**
2. Under **Custom domain**, enter: `filialgrace.org`
3. Click **Save**
4. Wait for DNS check (this may take a few minutes to show a checkmark)
5. Once verified, check **Enforce HTTPS** (GitHub provides free SSL)

## Step 4: Configure DNS at Your Domain Provider

Log in to your domain registrar (where you bought filialgrace.org) and add these DNS records:

### For Apex Domain (filialgrace.org)

Add **4 A records** pointing to GitHub's servers:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### For WWW Subdomain (Optional but Recommended)

Add a **CNAME record**:

```
Type: CNAME
Name: www
Value: mocsharp.github.io
TTL: 3600
```

### Example DNS Configuration Screenshots

**For common DNS providers:**

#### Namecheap
- Go to Domain List > Manage > Advanced DNS
- Add the A records and CNAME record as shown above

#### GoDaddy
- Go to My Products > DNS > Manage Zones
- Add records in the DNS Management section

#### Cloudflare
- Go to DNS > Records
- Add the A and CNAME records
- **Important**: Set Proxy status to "DNS only" (gray cloud) initially

#### Google Domains / Google Cloud DNS
- Go to DNS settings
- Add custom resource records as shown above

## Step 5: Wait for DNS Propagation

DNS changes can take anywhere from **5 minutes to 48 hours** to propagate globally.

Check DNS propagation status:
- https://www.whatsmydns.net/ (enter filialgrace.org)
- You should see the GitHub IP addresses

## Step 6: Verify Deployment

1. **Check GitHub Actions**:
   - Go to repository > **Actions** tab
   - You should see a workflow run for "Deploy to GitHub Pages"
   - Wait for it to complete (green checkmark)

2. **Visit your website**:
   - http://filialgrace.org
   - https://filialgrace.org (once DNS is propagated and HTTPS is enabled)

## Step 7: Enable HTTPS

1. Once DNS is verified in GitHub Pages settings:
2. Check the box for **Enforce HTTPS**
3. GitHub will automatically provision an SSL certificate
4. This may take up to 1 hour

## Troubleshooting

### DNS Check Fails in GitHub

**Problem**: "DNS check unsuccessful" message

**Solutions**:
1. Wait 15-30 minutes and try again
2. Verify A records are correct (use `nslookup filialgrace.org`)
3. Remove and re-add the custom domain in GitHub settings
4. Check that you don't have conflicting DNS records (like old A records)

### Website Shows 404 Error

**Problem**: Site not found or GitHub 404 page

**Solutions**:
1. Check that the GitHub Actions workflow completed successfully
2. Verify the `public/CNAME` file contains `filialgrace.org`
3. Make sure the deployment created files in the `dist` folder
4. Re-run the workflow: Actions > Select workflow > Re-run jobs

### HTTPS Not Working

**Problem**: "Not Secure" or SSL certificate errors

**Solutions**:
1. Wait up to 1 hour after DNS propagation
2. Ensure "Enforce HTTPS" is checked in GitHub Pages settings
3. Try disabling and re-enabling the custom domain
4. Clear browser cache and try again

### Build Fails in GitHub Actions

**Problem**: Red X on Actions workflow

**Solutions**:
1. Check the Actions log for specific errors
2. Verify `package.json` and `package-lock.json` are committed
3. Ensure all dependencies are properly installed locally first
4. Check that the build works locally: `npm run build`

## Making Updates

After the initial deployment, updating the site is easy:

```bash
# Make your changes
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Actions will automatically rebuild and deploy within 2-3 minutes.

## Testing Before Deploy

Always test locally before pushing:

```bash
cd filialgrace-website
npm run build      # Test that build succeeds
npm run preview    # Preview the production build locally
```

## Custom Domain Best Practices

1. **Always use HTTPS** - It's free and automatic with GitHub Pages
2. **Set up both apex and www** - Helps with SEO and user accessibility
3. **Use a short TTL initially** (3600 seconds) - Makes changes easier
4. **Monitor uptime** - Use services like UptimeRobot.com (free)

## Support

If you encounter issues:

1. **GitHub Pages Documentation**: https://docs.github.com/en/pages
2. **Check Actions Logs**: Repository > Actions > Select failed run
3. **DNS Tools**: 
   - https://www.whatsmydns.net/
   - https://dnschecker.org/
4. **Contact**: info@filialgrace.org

## Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] Custom domain added in GitHub settings
- [ ] DNS A records configured
- [ ] DNS CNAME record configured (www)
- [ ] DNS propagation complete (check with whatsmydns.net)
- [ ] GitHub Actions workflow succeeded
- [ ] Website accessible at http://filialgrace.org
- [ ] HTTPS enabled and working
- [ ] Test all pages and language switching
- [ ] Verify Google Analytics is tracking

---

**Congratulations!** Your website is now live at https://filialgrace.org 🎉
