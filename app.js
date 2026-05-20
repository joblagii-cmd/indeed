// ===== SAMPLE JOB DATA =====
const JOBS = [
  { id: 1, title: 'Senior Software Engineer', company: 'Google', location: 'Mountain View, CA', type: 'Full-time', remote: true, salary: '$140,000 - $200,000', date: '2 hours ago', logo: 'G', logoColor: '#4285f4', category: 'technology', desc: 'Join our engineering team to build next-generation products used by billions of people worldwide. You will work on complex distributed systems.', requirements: ['5+ years of software engineering experience', 'Proficiency in Python, Java, or Go', 'Experience with distributed systems', 'Strong problem-solving skills'], responsibilities: ['Design and implement scalable systems', 'Collaborate with cross-functional teams', 'Mentor junior engineers', 'Participate in code reviews'] },
  { id: 2, title: 'Product Manager', company: 'Meta', location: 'Menlo Park, CA', type: 'Full-time', remote: false, salary: '$130,000 - $180,000', date: '4 hours ago', logo: 'M', logoColor: '#1877f2', category: 'technology', desc: 'Lead product strategy and development for our social platforms. Work with engineers, designers, and data scientists to ship impactful features.', requirements: ['3+ years of product management experience', 'Strong analytical and communication skills', 'Experience with A/B testing and metrics'], responsibilities: ['Define product vision and roadmap', 'Work with engineering teams', 'Analyze user feedback and data', 'Present to senior leadership'] },
  { id: 3, title: 'Registered Nurse - ICU', company: 'Johns Hopkins Hospital', location: 'Baltimore, MD', type: 'Full-time', remote: false, salary: '$75,000 - $95,000', date: '1 day ago', logo: 'J', logoColor: '#0066cc', category: 'healthcare', desc: 'Provide exceptional patient care in our Intensive Care Unit. Join a world-class team of healthcare professionals dedicated to excellence.', requirements: ['Active RN license in Maryland', 'BSN required', '2+ years ICU experience preferred', 'BLS and ACLS certification'], responsibilities: ['Provide direct patient care', 'Monitor and document patient conditions', 'Collaborate with physicians', 'Educate patients and families'] },
  { id: 4, title: 'Data Analyst', company: 'Amazon', location: 'Seattle, WA', type: 'Full-time', remote: true, salary: '$90,000 - $120,000', date: '3 hours ago', logo: 'A', logoColor: '#ff9900', category: 'technology', desc: 'Analyze complex datasets to drive business decisions. Build dashboards and reports to communicate insights to stakeholders across the organization.', requirements: ['Proficiency in SQL and Python', 'Experience with Tableau or Power BI', 'Strong statistical background', 'Excellent communication skills'], responsibilities: ['Analyze large datasets', 'Build automated reports', 'Present findings to leadership', 'Identify business opportunities'] },
  { id: 5, title: 'Marketing Manager', company: 'Nike', location: 'Beaverton, OR', type: 'Full-time', remote: false, salary: '$85,000 - $110,000', date: '5 hours ago', logo: 'N', logoColor: '#f5f5f5', category: 'marketing', desc: 'Lead marketing campaigns for our global brand. Drive creative strategy, manage agency relationships, and analyze campaign performance.', requirements: ['5+ years marketing experience', 'Experience with digital marketing', 'Strong creative and analytical skills', 'Brand management experience'], responsibilities: ['Develop marketing strategies', 'Manage campaign budgets', 'Lead cross-functional teams', 'Track and report on KPIs'] },
  { id: 6, title: 'UX Designer', company: 'Airbnb', location: 'San Francisco, CA', type: 'Full-time', remote: true, salary: '$110,000 - $145,000', date: '6 hours ago', logo: 'A', logoColor: '#ff5a5f', category: 'design', desc: 'Create exceptional user experiences for our global platform. Lead design projects from concept to launch working with product and engineering teams.', requirements: ['4+ years UX design experience', 'Proficiency in Figma', 'Strong portfolio demonstrating UX process', 'Experience with user research'], responsibilities: ['Lead design projects', 'Conduct user research', 'Create wireframes and prototypes', 'Collaborate with engineers'] },
  { id: 7, title: 'Financial Analyst', company: 'Goldman Sachs', location: 'New York, NY', type: 'Full-time', remote: false, salary: '$95,000 - $130,000', date: '1 day ago', logo: 'G', logoColor: '#336699', category: 'finance', desc: 'Analyze financial data and provide insights to support investment decisions. Work with senior bankers on complex financial models and valuations.', requirements: ['Bachelor\'s degree in Finance or Economics', '2+ years financial analysis experience', 'Proficiency in Excel and financial modeling', 'CFA or progress toward preferred'], responsibilities: ['Build financial models', 'Prepare investment analyses', 'Monitor market trends', 'Support client presentations'] },
  { id: 8, title: 'DevOps Engineer', company: 'Netflix', location: 'Los Gatos, CA', type: 'Full-time', remote: true, salary: '$150,000 - $200,000', date: '2 days ago', logo: 'N', logoColor: '#e50914', category: 'technology', desc: 'Build and maintain the infrastructure that powers Netflix for 200M+ subscribers worldwide. Work on cutting-edge cloud technologies at massive scale.', requirements: ['5+ years DevOps experience', 'Strong AWS or GCP experience', 'Proficiency in Terraform and Kubernetes', 'Experience with CI/CD pipelines'], responsibilities: ['Manage cloud infrastructure', 'Automate deployment pipelines', 'Ensure system reliability', 'Respond to incidents'] },
  { id: 9, title: 'Sales Representative', company: 'Salesforce', location: 'Chicago, IL', type: 'Full-time', remote: false, salary: '$60,000 - $100,000 + Commission', date: '3 days ago', logo: 'S', logoColor: '#00a1e0', category: 'sales', desc: 'Drive new business and expand existing accounts for our CRM platform. Join a high-performance sales team with excellent earning potential.', requirements: ['2+ years B2B sales experience', 'Track record of quota attainment', 'Strong communication skills', 'Salesforce certification a plus'], responsibilities: ['Prospect and qualify leads', 'Conduct product demos', 'Negotiate and close deals', 'Manage customer relationships'] },
  { id: 10, title: 'Elementary School Teacher', company: 'NYC Department of Education', location: 'New York, NY', type: 'Full-time', remote: false, salary: '$60,000 - $80,000', date: '4 days ago', logo: 'E', logoColor: '#4caf50', category: 'education', desc: 'Shape the minds of the next generation. We are seeking passionate educators to join our diverse school community in New York City.', requirements: ['New York State Teaching License', 'Bachelor\'s degree in Education', 'Experience with diverse learners preferred', 'Strong classroom management skills'], responsibilities: ['Plan and deliver lessons', 'Assess student progress', 'Communicate with parents', 'Participate in school events'] },
  { id: 11, title: 'Cybersecurity Analyst', company: 'Microsoft', location: 'Redmond, WA', type: 'Full-time', remote: true, salary: '$110,000 - $150,000', date: '1 day ago', logo: 'M', logoColor: '#00a4ef', category: 'technology', desc: 'Protect our global infrastructure from cyber threats. Analyze security incidents, develop mitigation strategies, and strengthen our security posture.', requirements: ['3+ years cybersecurity experience', 'CISSP or CISM certification preferred', 'Experience with SIEM tools', 'Strong incident response skills'], responsibilities: ['Monitor security alerts', 'Investigate incidents', 'Develop security policies', 'Conduct risk assessments'] },
  { id: 12, title: 'Supply Chain Manager', company: 'Walmart', location: 'Bentonville, AR', type: 'Full-time', remote: false, salary: '$80,000 - $110,000', date: '5 days ago', logo: 'W', logoColor: '#0071ce', category: 'operations', desc: 'Manage end-to-end supply chain operations for one of the world\'s largest retailers. Optimize logistics, inventory, and vendor relationships.', requirements: ['5+ years supply chain experience', 'Six Sigma or PMP certification preferred', 'Experience with SAP or Oracle', 'Strong negotiation skills'], responsibilities: ['Oversee logistics operations', 'Manage vendor relationships', 'Optimize inventory levels', 'Reduce operational costs'] },
];

// ===== RENDER FUNCTIONS =====

function getJobCard(job) {
  return `
    <div class="job-card" onclick="window.location='job-detail.html?id=${job.id}'">
      <div class="job-card-header">
        <div class="company-avatar" style="background:${job.logoColor}22;color:${job.logoColor}">${job.logo}</div>
        <div class="job-card-info">
          <div class="job-title">${job.title}</div>
          <div class="job-company">${job.company} · ${job.location}</div>
        </div>
      </div>
      <div class="job-meta">
        <span class="job-tag">${job.type}</span>
        ${job.remote ? '<span class="job-tag remote">🌍 Remote</span>' : ''}
        <span class="job-tag salary">💰 ${job.salary}</span>
      </div>
      <p class="job-desc">${job.desc}</p>
      <div class="job-footer">
        <span class="job-date">⏰ ${job.date}</span>
        <a href="job-detail.html?id=${job.id}" class="btn btn-primary apply-btn">Apply Now</a>
      </div>
    </div>
  `;
}

function getJobListItem(job, active = false) {
  return `
    <div class="job-list-item ${active ? 'active' : ''}" onclick="selectJob(${job.id}, this)">
      <div class="jli-header">
        <div class="company-avatar" style="background:${job.logoColor}22;color:${job.logoColor};width:44px;height:44px">${job.logo}</div>
        <div>
          <div class="job-title" style="font-size:1rem">${job.title}</div>
          <div class="job-company">${job.company} · ${job.location}</div>
        </div>
      </div>
      <div class="jli-footer">
        <span class="job-tag">${job.type}</span>
        ${job.remote ? '<span class="job-tag remote">Remote</span>' : ''}
        <span class="job-tag salary">${job.salary}</span>
      </div>
      <div style="font-size:0.8rem;color:var(--text-muted);margin-top:8px">⏰ ${job.date}</div>
    </div>
  `;
}

function getJobDetailPanel(job) {
  return `
    <div class="jd-header">
      <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px">
        <div class="company-avatar" style="background:${job.logoColor}22;color:${job.logoColor};width:56px;height:56px;font-size:1.4rem">${job.logo}</div>
        <div>
          <div class="jd-title">${job.title}</div>
          <div class="jd-company">${job.company} · ${job.location}</div>
        </div>
      </div>
      <div class="jd-actions">
        <a href="job-detail.html?id=${job.id}" class="btn btn-primary">Apply Now</a>
        <button class="btn btn-outline" onclick="saveJob(${job.id})">Save</button>
      </div>
      <div class="jd-tags">
        <span class="job-tag">${job.type}</span>
        ${job.remote ? '<span class="job-tag remote">🌍 Remote</span>' : ''}
        <span class="job-tag salary">💰 ${job.salary}</span>
      </div>
    </div>
    <div class="jd-section">
      <h4>Job Description</h4>
      <p>${job.desc}</p>
    </div>
    <div class="jd-section">
      <h4>Requirements</h4>
      <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>
    <div class="jd-section">
      <h4>Responsibilities</h4>
      <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>
  `;
}

// ===== PAGE FUNCTIONS =====

function renderFeaturedJobs() {
  const el = document.getElementById('featuredJobs');
  if (!el) return;
  el.innerHTML = JOBS.slice(0, 6).map(getJobCard).join('');
}

function renderJobsList(query = '', location = '') {
  const listEl = document.getElementById('jobsList');
  const countEl = document.getElementById('resultsCount');
  const panelEl = document.getElementById('jobDetailPanel');
  if (!listEl) return;

  let filtered = JOBS;
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(j =>
      j.title.toLowerCase().includes(q) ||
      j.company.toLowerCase().includes(q) ||
      j.category.toLowerCase().includes(q) ||
      j.desc.toLowerCase().includes(q)
    );
  }

  if (countEl) countEl.textContent = `${filtered.length} jobs found${query ? ` for "${query}"` : ''}${location ? ` in ${location}` : ''}`;

  if (filtered.length === 0) {
    listEl.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--text-muted)"><p style="font-size:1.1rem;font-weight:600">No jobs found</p><p>Try different keywords or location</p></div>';
    return;
  }

  listEl.innerHTML = filtered.map((j, i) => getJobListItem(j, i === 0)).join('');

  // Show first job in panel
  if (panelEl && filtered.length > 0) {
    panelEl.innerHTML = getJobDetailPanel(filtered[0]);
  }

  // Pagination
  const pagEl = document.getElementById('pagination');
  if (pagEl) {
    pagEl.innerHTML = [1,2,3,4,5].map(n =>
      `<button class="page-btn ${n===1?'active':''}" onclick="goPage(${n},this)">${n}</button>`
    ).join('') + '<button class="page-btn">→</button>';
  }
}

function selectJob(id, el) {
  document.querySelectorAll('.job-list-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  const job = JOBS.find(j => j.id === id);
  const panelEl = document.getElementById('jobDetailPanel');
  if (job && panelEl) panelEl.innerHTML = getJobDetailPanel(job);
}

function renderJobDetail(id) {
  const el = document.getElementById('jobDetailContent');
  if (!el) return;
  const job = JOBS.find(j => j.id === id) || JOBS[0];
  document.title = `${job.title} at ${job.company} — JobsNow`;
  el.innerHTML = `
    <div class="jdp-main">
      <div class="jdp-company-header">
        <div class="jdp-logo" style="background:${job.logoColor}22;color:${job.logoColor}">${job.logo}</div>
        <div>
          <div class="jdp-title">${job.title}</div>
          <div style="color:var(--text-muted)">${job.company} · ${job.location}</div>
        </div>
      </div>
      <div class="jd-tags" style="margin-bottom:24px">
        <span class="job-tag">${job.type}</span>
        ${job.remote ? '<span class="job-tag remote">🌍 Remote</span>' : ''}
        <span class="job-tag salary">💰 ${job.salary}</span>
        <span class="job-tag">⏰ ${job.date}</span>
      </div>
      <div class="jd-section">
        <h4>About the Role</h4>
        <p>${job.desc}</p>
      </div>
      <div class="jd-section">
        <h4>Requirements</h4>
        <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>
      <div class="jd-section">
        <h4>Responsibilities</h4>
        <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="jdp-sidebar">
      <h4 style="margin-bottom:16px;font-size:1rem">Apply for this Job</h4>
      <a href="signin.html" class="btn btn-primary btn-full" style="margin-bottom:12px">Apply Now</a>
      <button class="btn btn-outline btn-full" onclick="saveJob(${job.id})">Save Job</button>
      <div style="margin-top:24px;padding-top:20px;border-top:1px solid var(--border)">
        <h4 style="margin-bottom:12px;font-size:0.95rem">Job Details</h4>
        <div style="font-size:0.875rem;color:var(--text-muted);display:flex;flex-direction:column;gap:10px">
          <div><strong style="color:var(--text)">Salary:</strong> ${job.salary}</div>
          <div><strong style="color:var(--text)">Job Type:</strong> ${job.type}</div>
          <div><strong style="color:var(--text)">Location:</strong> ${job.location}</div>
          <div><strong style="color:var(--text)">Remote:</strong> ${job.remote ? 'Yes' : 'No'}</div>
          <div><strong style="color:var(--text)">Posted:</strong> ${job.date}</div>
        </div>
      </div>
    </div>
  `;
}

function renderSimilarJobs(id) {
  const el = document.getElementById('similarJobs');
  if (!el) return;
  const job = JOBS.find(j => j.id === id) || JOBS[0];
  const similar = JOBS.filter(j => j.id !== job.id && j.category === job.category).slice(0, 3);
  el.innerHTML = (similar.length ? similar : JOBS.slice(0, 3)).map(getJobCard).join('');
}

function saveJob(id) {
  alert('Sign in to save jobs!');
}

function goPage(n, el) {
  document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedJobs();
});
