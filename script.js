// // main data for the site - keeping it all here for now, can move to json later
// const services = [
//   {icon:'🔍', title:'SEO Optimization', desc:'Improve your Google ranking and increase organic traffic.', color:'#dbeafe', fg:'#2563eb'},
//   {icon:'📣', title:'Social Media Marketing', desc:'Reach more customers through Facebook, Instagram & LinkedIn.', color:'#ede9fe', fg:'#7c3aed'},
//   {icon:'📈', title:'Google Ads', desc:'Generate high quality leads using paid advertising.', color:'#e0e7ff', fg:'#4f46e5'},
//   {icon:'💻', title:'Website Development', desc:'Modern, responsive & SEO friendly websites.', color:'#fce7f3', fg:'#db2777'},
//   {icon:'✉️', title:'Email Marketing', desc:'Convert visitors into loyal customers.', color:'#e0e7ff', fg:'#4f46e5'},
//   {icon:'🎯', title:'Brand Strategy', desc:'Create a powerful brand identity.', color:'#dcfce7', fg:'#16a34a'},
// ];

// const portfolioItems = [
//   {title:'SEO Campaign', cat:'SEO', color:'#2563eb', icon:'🔍'},
//   {title:'Social Media Growth', cat:'Marketing', color:'#7c3aed', icon:'📱'},
//   {title:'E-commerce Website', cat:'Website', color:'#0891b2', icon:'🛒'},
//   {title:'Brand Identity', cat:'Branding', color:'#16a34a', icon:'🎨'},
//   {title:'Google Ads Campaign', cat:'Marketing', color:'#ea580c', icon:'📢'},
//   {title:'Business Website', cat:'Website', color:'#4f46e5', icon:'💼'},
// ];

// const blogPosts = [
//   {title:'10 SEO Tips to Rank Higher in 2025', date:'May 10, 2025', color:'#166534', icon:'🔍'},
//   {title:'How Social Media Marketing Boosts Sales', date:'May 08, 2025', color:'#1e40af', icon:'📱'},
//   {title:'Google Ads Mistakes You Should Avoid', date:'May 05, 2025', color:'#b45309', icon:'⚠️'},
//   {title:'Website Speed Best Practices', date:'May 03, 2025', color:'#065f46', icon:'⚡'},
//   {title:'Content Marketing Strategy for 2025', date:'May 01, 2025', color:'#4c1d95', icon:'📝'},
//   {title:'Email Marketing Tips That Convert', date:'Apr 28, 2025', color:'#7f1d1d', icon:'✉️'},
// ];

// const faqs = [
//   {q:'What services do you offer?', a:'We offer SEO, Social Media Marketing, Google Ads, Website Development, Email Marketing and Brand Strategy.'},
//   {q:'How can I start a project?', a:'Simply fill out our contact form or click Get Started, and our team will reach out within 24 hours.'},
//   {q:'How long does it take to see results?', a:'Most clients start seeing measurable results within 4-8 weeks depending on the service.'},
//   {q:'Do you provide support?', a:'Yes, we provide 24/7 support and dedicated account managers for every client.'},
// ];

// const testimonials = [
//   {name:'James Smith', role:'CEO, Tech Solutions', text:'MarketPro team helped us grow our business massively. Their strategies are result oriented and highly professional.', rating:5, avatar:'👨‍💼'},
//   {name:'Sarah Khan', role:'Founder, StyleHub', text:'Amazing communication and real results within weeks. Highly recommend their SEO team!', rating:5, avatar:'👩‍💼'},
//   {name:'Ali Raza', role:'Marketing Head, ShopEasy', text:'Our website traffic doubled after working with MarketPro. Truly professional agency.', rating:4, avatar:'🧑‍💼'},
// ];

// const progressData = [
//   {label:'SEO Optimization', value:95},
//   {label:'Google Ads', value:90},
//   {label:'Social Media Marketing', value:92},
//   {label:'Website Development', value:97},
// ];

// const $  = (sel) => document.querySelector(sel);
// const $$ = (sel) => document.querySelectorAll(sel);

// function renderServices(list){
//   const grid = $('#serviceGrid');
//   grid.innerHTML = list.map(s => `
//     <div class="service-card reveal">
//       <div class="ico" style="background:${s.color};color:${s.fg}">${s.icon}</div>
//       <h3>${s.title}</h3>
//       <p>${s.desc}</p>
//     </div>
//   `).join('');
// }
// renderServices(services);

// function debounce(fn, delay){
//   let timer;
//   return function(...args){
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// function handleServiceSearch(e){
//   const query = e.target.value.trim().toLowerCase();
//   const filtered = services.filter(s =>
//     s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query)
//   );
//   renderServices(filtered);
// }
// $('#serviceSearch').addEventListener('input', debounce(handleServiceSearch, 250));

// const categories = ['All', ...new Set(portfolioItems.map(p => p.cat))];

// function renderFilters(){
//   $('#filterBar').innerHTML = categories.map((c,i) =>
//     `<button class="filter-btn ${i===0 ? 'active':''}" data-cat="${c}">${c}</button>`
//   ).join('');
// }
// renderFilters();

// function renderPortfolio(cat){
//   cat = cat || 'All';
//   const grid = $('#portfolioGrid');
//   const items = cat === 'All' ? portfolioItems : portfolioItems.filter(p => p.cat === cat);
//   grid.innerHTML = items.map(p => `
//     <div class="port-card">
//       <div class="port-thumb" style="background:${p.color}">${p.icon}</div>
//       <div class="info"><h4>${p.title}</h4><span class="cat">${p.cat}</span></div>
//     </div>
//   `).join('');
//   $$('.port-card').forEach((card, index) => {
//     setTimeout(() => card.classList.add('show'), index * 100);
//   });
// }
// renderPortfolio();

// $('#filterBar').addEventListener('click', (e) => {
//   if(!e.target.classList.contains('filter-btn')) return;
//   $$('.filter-btn').forEach(b => b.classList.remove('active'));
//   e.target.classList.add('active');
//   renderPortfolio(e.target.dataset.cat);
// });

// function renderBlog(){
//   const grid = $('#blogGrid');
//   let html = '';
//   for(let i = 0; i < blogPosts.length; i++){
//     const b = blogPosts[i];
//     html += `
//       <div class="blog-card">
//         <div class="blog-thumb" style="background:${b.color}">${b.icon}</div>
//         <div class="info">
//           <small>${b.date}</small>
//           <h4>${b.title}</h4>
//           <button class="read-more" data-index="${i}">Read More →</button>
//         </div>
//       </div>`;
//   }
//   grid.innerHTML = html;
// }
// renderBlog();

// let readCount = 0;

// $('#blogGrid').addEventListener('click', (e) => {
//   if(!e.target.classList.contains('read-more')) return;
//   const idx = e.target.dataset.index;
//   readCount++;
//   showToast(`"${blogPosts[idx].title}" opened (${readCount} articles read)`);
// });

// function renderFaq(){
//   $('#faqWrap').innerHTML = faqs.map(f => `
//     <div class="faq-item">
//       <div class="faq-q"><span>${f.q}</span><span class="plus">+</span></div>
//       <div class="faq-a"><p>${f.a}</p></div>
//     </div>
//   `).join('');
// }
// renderFaq();

// $('#faqWrap').addEventListener('click', (e) => {
//   const question = e.target.closest('.faq-q');
//   if(!question) return;
//   const item = question.parentElement;
//   const isOpen = item.classList.contains('open');
//   $$('.faq-item').forEach(f => f.classList.remove('open'));
//   if(!isOpen) item.classList.add('open');
// });

// function renderProgress(){
//   $('#progressWrap').innerHTML = progressData.map(({label, value}) => `
//     <div class="progress-item">
//       <div class="top"><span>${label}</span><span>${value}%</span></div>
//       <div class="bar"><div class="bar-fill" data-value="${value}"></div></div>
//     </div>
//   `).join('');
// }
// renderProgress();

// let testiIndex = 0;
// function renderTestimonial(){
//   const t = testimonials[testiIndex];
//   const starsHtml = '⭐'.repeat(t.rating);
//   $('#testiCard').innerHTML = `
//     <div class="stars">${starsHtml}</div>
//     <p>"${t.text}"</p>
//     <div class="testi-user">
//       <div class="avatar">${t.avatar}</div>
//       <div><b>${t.name}</b><br><small style="color:var(--text-soft)">${t.role}</small></div>
//     </div>
//   `;
// }
// renderTestimonial();

// $('#nextTesti').addEventListener('click', () => {
//   testiIndex = (testiIndex + 1) % testimonials.length;
//   renderTestimonial();
// });
// $('#prevTesti').addEventListener('click', () => {
//   testiIndex = (testiIndex - 1 + testimonials.length) % testimonials.length;
//   renderTestimonial();
// });

// function animateCounter(el){
//   const target = Number(el.dataset.target);
//   let current = 0;
//   const step = Math.ceil(target / 50) || 1;
//   const interval = setInterval(() => {
//     current += step;
//     if(current >= target){
//       current = target;
//       clearInterval(interval);
//     }
//     el.textContent = current + '+';
//   }, 30);
// }

// const counterObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       animateCounter(entry.target);
//       counterObserver.unobserve(entry.target);
//     }
//   });
// }, {threshold:0.4});
// $$('.counter, .counter2').forEach(el => counterObserver.observe(el));

// const barObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.style.width = entry.target.dataset.value + '%';
//       barObserver.unobserve(entry.target);
//     }
//   });
// }, {threshold:0.3});
// $$('.bar-fill').forEach(el => barObserver.observe(el));

// const revealObserver = new IntersectionObserver((entries) => {
//   entries.forEach(e => e.isIntersecting && e.target.classList.add('in'));
// }, {threshold:0.15});
// $$('.reveal').forEach(el => revealObserver.observe(el));

// const html = document.documentElement;
// const themeBtn = $('#themeToggle');

// function applyTheme(theme){
//   html.setAttribute('data-theme', theme);
//   themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
//   localStorage.setItem('marketpro-theme', theme);
// }

// const savedTheme = localStorage.getItem('marketpro-theme') || 'light';
// applyTheme(savedTheme);

// themeBtn.addEventListener('click', () => {
//   const current = html.getAttribute('data-theme');
//   applyTheme(current === 'light' ? 'dark' : 'light');
// });

// $('#hamburger').addEventListener('click', () => {
//   $('#navLinks').classList.toggle('open');
// });

// const sections = $$('section[id]');
// window.addEventListener('scroll', debounce(() => {
//   let currentId = 'home';
//   sections.forEach(sec => {
//     const rect = sec.getBoundingClientRect();
//     if(rect.top <= 120) currentId = sec.id;
//   });
//   $$('.nav-links a').forEach(a => {
//     a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
//   });
// }, 80));

// function validateField(id, errId, testFn){
//   const field = $('#' + id);
//   const isValid = testFn(field.value.trim());
//   field.classList.toggle('error', !isValid);
//   $('#' + errId).style.display = isValid ? 'none' : 'block';
//   return isValid;
// }

// function fakeApiCall(data){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(data.email.includes('@')) resolve({status:'ok'});
//       else reject(new Error('Invalid data'));
//     }, 1200);
//   });
// }

// $('#contactForm').addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const nameOk  = validateField('cName','errName', v => v.length >= 3);
//   const emailOk = validateField('cEmail','errEmail', v => emailRegex.test(v));
//   const msgOk   = validateField('cMsg','errMsg', v => v.length >= 10);

//   if(!nameOk || !emailOk || !msgOk){
//     showFormMsg('Please fix the highlighted fields.', 'error');
//     return;
//   }

//   const payload = {
//     name: $('#cName').value,
//     email: $('#cEmail').value,
//     phone: $('#cPhone').value,
//     message: $('#cMsg').value
//   };

//   const btn = $('#sendBtn');
//   const originalText = btn.textContent;
//   btn.textContent = 'Sending...';
//   btn.disabled = true;

//   try{
//     await fakeApiCall(payload);
//     showFormMsg('Message sent successfully! We will contact you soon.', 'success');
//     $('#contactForm').reset();
//     showToast('Message sent to MarketPro team!');
//   }catch(err){
//     showFormMsg('Something went wrong: ' + err.message, 'error');
//   }finally{
//     btn.textContent = originalText;
//     btn.disabled = false;
//   }
// });

// function showFormMsg(text, type){
//   const box = $('#formMsg');
//   box.textContent = text;
//   box.className = 'form-msg ' + type;
// }

// $('#newsletterForm').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = $('#newsEmail').value.trim();
//   const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   showToast(ok ? 'Subscribed successfully!' : 'Please enter a valid email');
//   if(ok) $('#newsletterForm').reset();
// });

// let toastTimer;
// function showToast(message){
//   const toast = $('#toast');
//   toast.textContent = message;
//   toast.classList.add('show');
//   clearTimeout(toastTimer);
//   toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
// }  

// main data for the site - keeping it all here for now, can move to json later
// 

// main data for the site - keeping it all here for now, can move to json later
const services = [
  {icon:'🔍', title:'SEO Optimization', desc:'Improve your Google ranking and increase organic traffic.', color:'#dbeafe', fg:'#2563eb'},
  {icon:'📣', title:'Social Media Marketing', desc:'Reach more customers through Facebook, Instagram & LinkedIn.', color:'#ede9fe', fg:'#7c3aed'},
  {icon:'📈', title:'Google Ads', desc:'Generate high quality leads using paid advertising.', color:'#e0e7ff', fg:'#4f46e5'},
  {icon:'💻', title:'Website Development', desc:'Modern, responsive & SEO friendly websites.', color:'#fce7f3', fg:'#db2777'},
  {icon:'✉️', title:'Email Marketing', desc:'Convert visitors into loyal customers.', color:'#e0e7ff', fg:'#4f46e5'},
  {icon:'🎯', title:'Brand Strategy', desc:'Create a powerful brand identity.', color:'#dcfce7', fg:'#16a34a'},
];

// added an "img" field for each portfolio item so cards can show real images
const portfolioItems = [
  {title:'SEO Campaign', cat:'SEO', img:'https://images.unsplash.com/photo-1571677246347-5040036b95cc?w=600&q=80'},
  {title:'Social Media Growth', cat:'Marketing', img:'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80'},
  {title:'E-commerce Website', cat:'Website', img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80'},
  {title:'Brand Identity', cat:'Branding', img:'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80'},
  {title:'Google Ads Campaign', cat:'Marketing', img:'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80'},
  {title:'Business Website', cat:'Website', img:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80'},
];

const blogPosts = [
  {title:'10 SEO Tips to Rank Higher in 2025', date:'May 10, 2025', img:'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80'},
  {title:'How Social Media Marketing Boosts Sales', date:'May 08, 2025', img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80'},
  {title:'Google Ads Mistakes You Should Avoid', date:'May 05, 2025', img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'},
  {title:'Website Speed Best Practices', date:'May 03, 2025', img:'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80'},
  {title:'Content Marketing Strategy for 2025', date:'May 01, 2025', img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80'},
  {title:'Email Marketing Tips That Convert', date:'Apr 28, 2025', img:'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80'},
];

const faqs = [
  {q:'What services do you offer?', a:'We offer SEO, Social Media Marketing, Google Ads, Website Development, Email Marketing and Brand Strategy.'},
  {q:'How can I start a project?', a:'Simply fill out our contact form or click Get Started, and our team will reach out within 24 hours.'},
  {q:'How long does it take to see results?', a:'Most clients start seeing measurable results within 4-8 weeks depending on the service.'},
  {q:'Do you provide support?', a:'Yes, we provide 24/7 support and dedicated account managers for every client.'},
];

const testimonials = [
  {name:'James Smith', role:'CEO, Tech Solutions', text:'MarketPro team helped us grow our business massively. Their strategies are result oriented and highly professional.', rating:5, avatar:'👨‍💼'},
  {name:'Sarah Khan', role:'Founder, StyleHub', text:'Amazing communication and real results within weeks. Highly recommend their SEO team!', rating:5, avatar:'👩‍💼'},
  {name:'Ali Raza', role:'Marketing Head, ShopEasy', text:'Our website traffic doubled after working with MarketPro. Truly professional agency.', rating:4, avatar:'🧑‍💼'},
];

const progressData = [
  {label:'SEO Optimization', value:95},
  {label:'Google Ads', value:90},
  {label:'Social Media Marketing', value:92},
  {label:'Website Development', value:97},
];

const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// moved this ABOVE renderServices (was defined near the bottom before) so that
// every render — including the ones triggered by the search box — can observe
// its own ".reveal" elements. Previously the observer only ever saw the cards
// that existed at the very first page load, so any card re-rendered later
// (like search results) kept opacity:0 from the .reveal CSS and never got the
// ".in" class added → they looked like nothing was showing up.
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('in'));
}, {threshold:0.15});

function renderServices(list){
  const grid = $('#serviceGrid');
  grid.innerHTML = list.map(s => `
    <div class="service-card reveal">
      <div class="ico" style="background:${s.color};color:${s.fg}">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
  // re-observe the freshly rendered cards every time (fixes the search bug)
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}
renderServices(services);

function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function handleServiceSearch(e){
  const query = e.target.value.trim().toLowerCase();
  const filtered = services.filter(s =>
    s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query)
  );
  renderServices(filtered);
}
$('#serviceSearch').addEventListener('input', debounce(handleServiceSearch, 250));

const categories = ['All', ...new Set(portfolioItems.map(p => p.cat))];

function renderFilters(){
  $('#filterBar').innerHTML = categories.map((c,i) =>
    `<button class="filter-btn ${i===0 ? 'active':''}" data-cat="${c}">${c}</button>`
  ).join('');
}
renderFilters();

function renderPortfolio(cat){
  cat = cat || 'All';
  const grid = $('#portfolioGrid');
  const items = cat === 'All' ? portfolioItems : portfolioItems.filter(p => p.cat === cat);
  grid.innerHTML = items.map(p => `
    <div class="port-card">
      <div class="port-thumb">
        <img src="${p.img}" alt="${p.title}" loading="lazy"
             style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">
      </div>
      <div class="info"><h4>${p.title}</h4><span class="cat">${p.cat}</span></div>
    </div>
  `).join('');
  $$('.port-card').forEach((card, index) => {
    setTimeout(() => card.classList.add('show'), index * 100);
  });
}
renderPortfolio();

$('#filterBar').addEventListener('click', (e) => {
  if(!e.target.classList.contains('filter-btn')) return;
  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderPortfolio(e.target.dataset.cat);
});

function renderBlog(){
  const grid = $('#blogGrid');
  let html = '';
  for(let i = 0; i < blogPosts.length; i++){
    const b = blogPosts[i];
    html += `
      <div class="blog-card">
        <div class="blog-thumb">
          <img src="${b.img}" alt="${b.title}" loading="lazy"
               style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit">
        </div>
        <div class="info">
          <small>${b.date}</small>
          <h4>${b.title}</h4>
          <button class="read-more" data-index="${i}">Read More →</button>
        </div>
      </div>`;
  }
  grid.innerHTML = html;
}
renderBlog();

let readCount = 0;

$('#blogGrid').addEventListener('click', (e) => {
  if(!e.target.classList.contains('read-more')) return;
  const idx = e.target.dataset.index;
  readCount++;
  showToast(`"${blogPosts[idx].title}" opened (${readCount} articles read)`);
});

function renderFaq(){
  $('#faqWrap').innerHTML = faqs.map(f => `
    <div class="faq-item">
      <div class="faq-q"><span>${f.q}</span><span class="plus">+</span></div>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join('');
}
renderFaq();

$('#faqWrap').addEventListener('click', (e) => {
  const question = e.target.closest('.faq-q');
  if(!question) return;
  const item = question.parentElement;
  const isOpen = item.classList.contains('open');
  $$('.faq-item').forEach(f => f.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
});

function renderProgress(){
  $('#progressWrap').innerHTML = progressData.map(({label, value}) => `
    <div class="progress-item">
      <div class="top"><span>${label}</span><span>${value}%</span></div>
      <div class="bar"><div class="bar-fill" data-value="${value}"></div></div>
    </div>
  `).join('');
}
renderProgress();

let testiIndex = 0;
function renderTestimonial(){
  const t = testimonials[testiIndex];
  const starsHtml = '⭐'.repeat(t.rating);
  $('#testiCard').innerHTML = `
    <div class="stars">${starsHtml}</div>
    <p>"${t.text}"</p>
    <div class="testi-user">
      <div class="avatar">${t.avatar}</div>
      <div><b>${t.name}</b><br><small style="color:var(--text-soft)">${t.role}</small></div>
    </div>
  `;
}
renderTestimonial();

$('#nextTesti').addEventListener('click', () => {
  testiIndex = (testiIndex + 1) % testimonials.length;
  renderTestimonial();
});
$('#prevTesti').addEventListener('click', () => {
  testiIndex = (testiIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial();
});

function animateCounter(el){
  const target = Number(el.dataset.target);
  let current = 0;
  const step = Math.ceil(target / 50) || 1;
  const interval = setInterval(() => {
    current += step;
    if(current >= target){
      current = target;
      clearInterval(interval);
    }
    el.textContent = current + '+';
  }, 30);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.4});
$$('.counter, .counter2').forEach(el => counterObserver.observe(el));

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.width = entry.target.dataset.value + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.3});
$$('.bar-fill').forEach(el => barObserver.observe(el));

const html = document.documentElement;
const themeBtn = $('#themeToggle');

function applyTheme(theme){
  html.setAttribute('data-theme', theme);
  themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('marketpro-theme', theme);
}

const savedTheme = localStorage.getItem('marketpro-theme') || 'light';
applyTheme(savedTheme);

themeBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'light' ? 'dark' : 'light');
});

$('#hamburger').addEventListener('click', () => {
  $('#navLinks').classList.toggle('open');
});

const sections = $$('section[id]');
window.addEventListener('scroll', debounce(() => {
  let currentId = 'home';
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 120) currentId = sec.id;
  });
  $$('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
  });
}, 80));

function validateField(id, errId, testFn){
  const field = $('#' + id);
  const isValid = testFn(field.value.trim());
  field.classList.toggle('error', !isValid);
  $('#' + errId).style.display = isValid ? 'none' : 'block';
  return isValid;
}

function fakeApiCall(data){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(data.email.includes('@')) resolve({status:'ok'});
      else reject(new Error('Invalid data'));
    }, 1200);
  });
}

$('#contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameOk  = validateField('cName','errName', v => v.length >= 3);
  const emailOk = validateField('cEmail','errEmail', v => emailRegex.test(v));
  const msgOk   = validateField('cMsg','errMsg', v => v.length >= 10);

  if(!nameOk || !emailOk || !msgOk){
    showFormMsg('Please fix the highlighted fields.', 'error');
    return;
  }

  const payload = {
    name: $('#cName').value,
    email: $('#cEmail').value,
    phone: $('#cPhone').value,
    message: $('#cMsg').value
  };

  const btn = $('#sendBtn');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try{
    await fakeApiCall(payload);
    showFormMsg('Message sent successfully! We will contact you soon.', 'success');
    $('#contactForm').reset();
    showToast('Message sent to MarketPro team!');
  }catch(err){
    showFormMsg('Something went wrong: ' + err.message, 'error');
  }finally{
    btn.textContent = originalText;
    btn.disabled = false;
  }
});

function showFormMsg(text, type){
  const box = $('#formMsg');
  box.textContent = text;
  box.className = 'form-msg ' + type;
}

$('#newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = $('#newsEmail').value.trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  showToast(ok ? 'Subscribed successfully!' : 'Please enter a valid email');
  if(ok) $('#newsletterForm').reset();
});

let toastTimer;
function showToast(message){
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}