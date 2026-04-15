/* ═══════════════════════════════════════════════════════════════
   CHURCH 244 — Main JavaScript
   Scroll animations, navigation, particles, counters
   ═══════════════════════════════════════════════════════════════ */

import './style.css';

// ── DOM Ready ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initParticles();
  initCountUp();
  initSmoothScroll();
  initSermons();
  initEvents();
  initContactForm();
});

// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════
function initNavigation() {
  const nav = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  // Scroll effect
  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  
  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
  
  // Close mobile nav on link click
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ═══════════════════════════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════════════════════════
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger the reveal animations
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );
  
  // Add stagger delays to grouped elements
  const groups = document.querySelectorAll('.about__grid, .services__grid, .community__grid, .sermons__grid, .events__grid');
  groups.forEach(group => {
    const items = group.querySelectorAll('.reveal');
    items.forEach((item, i) => {
      item.dataset.delay = i * 100;
    });
  });
  
  reveals.forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════════════════════════
// PARTICLES
// ═══════════════════════════════════════════════════════════════
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero__particle';
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${6 + Math.random() * 8}s`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.width = `${1 + Math.random() * 3}px`;
    particle.style.height = particle.style.width;
    particle.style.opacity = 0;
    
    // Vary colors between gold and white
    const colors = ['#d4a853', '#e8c97a', '#ffffff', '#d4a853'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(particle);
  }
}

// ═══════════════════════════════════════════════════════════════
// COUNT UP ANIMATION
// ═══════════════════════════════════════════════════════════════
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const duration = 2000;
          const start = performance.now();
          
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            
            el.textContent = current.toLocaleString();
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = target.toLocaleString();
            }
          };
          
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  
  counters.forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════════════════════════
// SMOOTH SCROLL
// ═══════════════════════════════════════════════════════════════
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
    });
  });
}

// ═══════════════════════════════════════════════════════════════
// SERMONS (YouTube RSS via Netlify Function)
// ═══════════════════════════════════════════════════════════════
function initSermons() {
  const grid = document.getElementById('sermonsGrid');
  const modal = document.getElementById('sermonModal');
  const backdrop = document.getElementById('sermonModalBackdrop');
  const closeBtn = document.getElementById('sermonModalClose');
  const iframe = document.getElementById('sermonIframe');
  const modalTitle = document.getElementById('sermonModalTitle');
  
  if (!grid) return;

  // For local dev, use the YouTube RSS directly as a fallback
  // In production on Netlify, the serverless function handles this
  const CHANNEL_ID = 'UCsx6xOBAhNqtGU1Aq_NQCdA';
  const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
  const FUNCTION_URL = '/.netlify/functions/sermons';

  async function fetchSermons() {
    try {
      // Try the Netlify function first
      let sermons;
      try {
        const res = await fetch(FUNCTION_URL);
        if (res.ok) {
          const data = await res.json();
          sermons = data.sermons;
        }
      } catch {
        // Netlify function not available (local dev) — parse RSS directly via CORS proxy
      }

      // Fallback: parse RSS client-side (for local testing)
      if (!sermons) {
        try {
          const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(RSS_URL)}`);
          const xml = await res.text();
          sermons = parseRSS(xml);
        } catch {
          // If even the proxy fails, show static fallback
          sermons = [];
        }
      }

      renderSermons(sermons);
    } catch (err) {
      console.error('Failed to fetch sermons:', err);
      grid.innerHTML = '<p style="text-align:center;color:var(--c-text-muted);grid-column:1/-1;">Unable to load sermons. <a href="https://youtube.com/@church244" target="_blank">Watch on YouTube →</a></p>';
    }
  }

  function parseRSS(xml) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'text/xml');
    const entries = doc.querySelectorAll('entry');
    const sermons = [];

    entries.forEach((entry, i) => {
      if (i >= 6) return;
      const videoId = entry.querySelector('videoId')?.textContent || '';
      const title = entry.querySelector('title')?.textContent || 'Untitled';
      const published = entry.querySelector('published')?.textContent || '';
      sermons.push({
        videoId,
        title,
        published,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      });
    });

    return sermons;
  }

  function renderSermons(sermons) {
    if (!sermons || sermons.length === 0) {
      grid.innerHTML = '<p style="text-align:center;color:var(--c-text-muted);grid-column:1/-1;">No sermons available yet. <a href="https://youtube.com/@church244" target="_blank">Watch on YouTube →</a></p>';
      return;
    }

    grid.innerHTML = sermons.map(s => {
      const date = new Date(s.published);
      const dateStr = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

      return `
        <div class="sermons__card reveal" data-video-id="${s.videoId}" data-title="${s.title.replace(/"/g, '&quot;')}">
          <div class="sermons__card-thumb">
            <img src="${s.thumbnail}" alt="${s.title.replace(/"/g, '&quot;')}" loading="lazy" />
            <div class="sermons__card-play">
              <div class="sermons__card-play-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>
          </div>
          <div class="sermons__card-body">
            <div class="sermons__card-date">${dateStr}</div>
            <h3 class="sermons__card-title">${s.title}</h3>
          </div>
        </div>
      `;
    }).join('');

    // Observe new reveal elements
    grid.querySelectorAll('.reveal').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });

    // Click to open modal
    grid.querySelectorAll('.sermons__card').forEach(card => {
      card.addEventListener('click', () => {
        const videoId = card.dataset.videoId;
        const title = card.dataset.title;
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modalTitle.textContent = title;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  // Modal close handlers
  function closeModal() {
    modal.classList.remove('active');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  fetchSermons();
}

// ═══════════════════════════════════════════════════════════════
// EVENTS (JSON-driven)
// ═══════════════════════════════════════════════════════════════
function initEvents() {
  const grid = document.getElementById('eventsGrid');
  const emptyState = document.getElementById('eventsEmpty');
  if (!grid) return;

  async function fetchEvents() {
    try {
      const res = await fetch('/data/events.json');
      const events = await res.json();

      // For recurring events, project them into the future
      const now = new Date();
      now.setHours(0, 0, 0, 0);

      const upcomingEvents = events.map(event => {
        let eventDate = new Date(event.date + 'T00:00:00');

        // For recurring events, find the next occurrence
        if (event.recurring && eventDate < now) {
          const dayOfWeek = eventDate.getDay();
          const today = new Date();
          let daysUntil = dayOfWeek - today.getDay();
          if (daysUntil <= 0) daysUntil += 7;
          eventDate = new Date(today);
          eventDate.setDate(eventDate.getDate() + daysUntil);
        }

        return { ...event, _date: eventDate };
      }).filter(e => e._date >= now)
        .sort((a, b) => a._date - b._date);

      renderEvents(upcomingEvents);
    } catch (err) {
      console.error('Failed to fetch events:', err);
      if (emptyState) emptyState.style.display = 'block';
    }
  }

  function renderEvents(events) {
    if (!events || events.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    // Remove empty state
    if (emptyState) emptyState.style.display = 'none';

    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const html = events.map(event => {
      const date = event._date;
      const month = months[date.getMonth()];
      const day = date.getDate();
      const registerLink = event.registerUrl 
        ? `<a href="${event.registerUrl}" target="_blank" rel="noopener noreferrer" class="events__card-link">Register →</a>` 
        : '';

      return `
        <div class="events__card reveal">
          <div class="events__card-date">
            <span class="events__card-month">${month}</span>
            <span class="events__card-day">${day}</span>
          </div>
          <div class="events__card-body">
            <h3 class="events__card-title">${event.title}</h3>
            <div class="events__card-time">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${event.time}
            </div>
            <p class="events__card-desc">${event.description}</p>
            ${registerLink}
          </div>
        </div>
      `;
    }).join('');

    grid.innerHTML = html;

    // Observe new reveal elements
    grid.querySelectorAll('.reveal').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  }

  fetchEvents();
}

// ═══════════════════════════════════════════════════════════════
// CONTACT FORM (Netlify Forms)
// ═══════════════════════════════════════════════════════════════
function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  const submitBtn = document.getElementById('contactSubmit');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Show loading state
    const textEl = submitBtn.querySelector('.contact__submit-text');
    const loadingEl = submitBtn.querySelector('.contact__submit-loading');
    textEl.style.display = 'none';
    loadingEl.style.display = 'inline-flex';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (res.ok) {
        form.style.display = 'none';
        success.style.display = 'block';
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error('Form error:', err);
      alert('Something went wrong. Please try again or call us at (601) 317-1482.');
      textEl.style.display = 'inline';
      loadingEl.style.display = 'none';
      submitBtn.disabled = false;
    }
  });
}
