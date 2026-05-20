# JobsNow — Indeed-Style Job Portal

A complete job portal frontend inspired by Indeed. Built with pure HTML, CSS, and JavaScript. No framework needed. Deploy instantly on Vercel.

## Pages Included

| File | Page |
|------|------|
| `index.html` | Homepage with search, featured jobs, categories |
| `jobs.html` | Job search results with filters sidebar |
| `job-detail.html` | Individual job detail page |
| `signin.html` | Sign in page |
| `register.html` | Register page (Job Seeker & Employer tabs) |
| `style.css` | All styles |
| `app.js` | All JS logic + sample job data |

## Deploy on Vercel (3 Steps)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial job portal"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repo
4. Click "Deploy" — done!

### Step 3 — Add Your Domain
- In Vercel dashboard → Settings → Domains
- Add your custom domain

## Customization Guide

### Change Site Name
Search and replace `JobsNow` in all files with your brand name.

### Change Colors
In `style.css`, edit the `:root` variables:
```css
:root {
  --primary: #1a5ef5;   /* Main blue color */
  --accent: #f5a623;    /* Orange accent */
}
```

### Add Real Jobs
In `app.js`, edit the `JOBS` array. Each job object:
```js
{
  id: 1,
  title: 'Job Title',
  company: 'Company Name',
  location: 'City, State',
  type: 'Full-time',
  remote: true,
  salary: '$80,000 - $100,000',
  date: '2 hours ago',
  logo: 'G',             // First letter shown in avatar
  logoColor: '#4285f4',  // Avatar color
  category: 'technology',
  desc: 'Job description...',
  requirements: ['Req 1', 'Req 2'],
  responsibilities: ['Task 1', 'Task 2']
}
```

### Connect to a Real Backend
Replace the `JOBS` array with an API call:
```js
async function loadJobs() {
  const res = await fetch('https://your-api.com/jobs');
  const data = await res.json();
  return data;
}
```

## Features
- ✅ Responsive design (mobile friendly)
- ✅ Job search with keyword + location
- ✅ Filter sidebar (date, type, salary, experience, remote)
- ✅ 3-column job results layout
- ✅ Job detail side panel
- ✅ Category browsing
- ✅ Company listings
- ✅ Sign in / Register pages
- ✅ Employer / Job Seeker account types
- ✅ Google & LinkedIn social login buttons
- ✅ Pagination

## To Add Later
- Backend with Node.js / Python
- Real job data from APIs (Adzuna, JSearch RapidAPI)
- User authentication (Firebase / Supabase)
- Job application form
- Resume upload
- Email alerts
