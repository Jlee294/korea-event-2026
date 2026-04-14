/* ============================================
   K-Medical 2026 — Main JavaScript
   ============================================ */

'use strict';

// ---- Language Data ----
const TRANSLATIONS = {
  en: {
    // Nav
    'nav-program': 'Program',
    'nav-speakers': 'Speakers',
    'nav-venues': 'Venues',
    'nav-about': 'About',
    'nav-register': 'Register',

    // Hero
    'hero-badge': 'Global KOL Partnership 2026',
    'hero-title-1': 'KSAPS-VSAPS Global KOL',
    'hero-title-2': 'Exchange & K-Medical',
    'hero-title-highlight': 'Summer Camp 2026',
    'hero-desc': 'The official partnership event for disseminating advanced techniques and Korean medical devices from Korean KOL practitioners to local medical professionals.',
    'hero-cta-register': 'Pre-Register Now',
    'hero-cta-program': 'View Full Program',
    'hero-next-label': 'Next Event',
    'hero-next-date': '2026.08.28 Ho Chi Minh',
    'hero-progress-label': 'Registration Open',
    'hero-progress-note': '75% of clinical seats reserved',
    'stat-1-label': 'Medical Brands',
    'stat-2-label': 'KOL Speakers',
    'stat-3-label': 'Events in 2026',

    // About
    'about-tag': 'About Project',
    'about-title': 'Driving Real Export Results & Building the K-Medical Standard',
    'about-desc': 'Through global exchange, we establish Korean medical technology leadership and accelerate the entry of certified Korean medical devices into world markets.',
    'step-1-title': '[Lecture] Trust',
    'step-1-desc': 'Building theoretical foundations in the latest aesthetic medicine knowledge from Korea\'s top KOLs.',
    'step-2-title': '[Demo] Visualizing',
    'step-2-desc': 'Sophisticated surgical technique demonstration and visual proof via UHD ultra-high-definition live broadcast.',
    'step-3-title': '[Exhibition] Touching',
    'step-3-desc': 'An opportunity to see the performance and design of devices firsthand at the K-Innovation Exhibition Hall.',
    'step-4-title': '[Hands-on] Closing',
    'step-4-desc': 'Converting to purchase through direct device operation experience and closing real business deals.',

    // Events
    'events-tag': 'Key Events Schedule',
    'event1-tag': 'Event 01',
    'event1-title': 'VSAPS-KSAPS Summer Camp + Media Conference',
    'event1-date': '2026.08.28 – 08.30',
    'event1-loc': 'Ho Chi Minh, Vietnam',
    'feat1-1-title': 'Media Conference',
    'feat1-1-desc': 'K-Medical Vision Declaration and brand reinforcement targeting global media',
    'feat1-2-title': 'Advanced Workshop',
    'feat1-2-desc': 'In-depth academic discussions and advanced surgical technique intensive sessions',
    'feat1-3-title': 'Hands-on Session',
    'feat1-3-desc': 'Practical program where local practitioners directly handle and test devices',

    'event2-tag': 'Event 02',
    'event2-title': 'KSAPS-VSAPS KOL Exchange Event',
    'event2-date': '2026.10.30 – 11.01',
    'event2-loc': '175 Military Hospital, Vietnam',
    'feat2-1-title': 'Live Demo (UHD)',
    'feat2-1-desc': 'Real-time surgical delivery via ultra-high-definition live broadcast',
    'feat2-2-title': 'B2B Matching',
    'feat2-2-desc': '1:1 business consultations and contract support between manufacturers and local buyers',
    'feat2-3-title': 'K-Innovation Exhibition',
    'feat2-3-desc': 'Integrated showcase of the latest cutting-edge medical device product lineup',
    'feat2-4-title': 'Academic Sessions',
    'feat2-4-desc': 'Academic exchange and clinical case sharing among expert groups',

    // Pavilion
    'pavilion-tag': 'K-Innovation Pavilion',
    'pavilion-title': 'K-Innovation Pavilion',
    'pavilion-desc': 'Experience Korea\'s leading medical device brands, recognized by the world, all in one place.',
    'kmaster-title': 'K-Master Zone',
    'kmaster-desc': 'A media gallery zone where you can experience brand history and technology at a glance through the Digital Wall.',
    'exp-zone-title': 'Experience Zone',
    'exp-zone-desc': 'Test the actual clinical feel of each device through device-specific simulations.',

    // Registration
    'reg-tag': 'Registration',
    'reg-title': 'Join the K-Medical Global Network',
    'reg-desc': 'Register now to secure your spot at Korea\'s premier global medical KOL exchange events. Limited clinical seats available for 2026.',
    'reg-input-placeholder': 'Your email address',
    'reg-btn': 'Pre-Register',
    'reg-note': 'Free registration · No spam · Unsubscribe anytime',

    // Footer
    'footer-brand-desc': '2026 Medical Device Global Education & Training Support Project\nExcellence in Aesthetic Medical Education.',
    'footer-partners': 'Partners',
    'footer-links': 'Quick Links',
    'footer-support': 'Support',
    'partner-ksaps': 'KSAPS',
    'partner-vsaps': 'VSAPS',
    'partner-bundang': 'Bundang SNU Hospital',
    'partner-175': '175 Military Hospital',
    'link-terms': 'Terms of Service',
    'link-privacy': 'Privacy Policy',
    'link-schedule': 'Full Schedule',
    'link-global': 'Global Partners',
    'btn-contact': 'Contact Us',
    'footer-copy': '© 2026 K-Medical Global. Excellence in Aesthetic Medical Education.',
  },
  ko: {
    // Nav
    'nav-program': 'Program',
    'nav-speakers': 'Speakers',
    'nav-venues': 'Venues',
    'nav-about': 'About',
    'nav-register': '등록하기',

    // Hero
    'hero-badge': 'Global KOL Partnership 2026',
    'hero-title-1': 'KSAPS-VSAPS 글로벌 KOL',
    'hero-title-2': '교류 행사 & K-Medical',
    'hero-title-highlight': '서머캠프 2026',
    'hero-desc': '한국 KOL 의료진의 고급 술기 및 국산 의료기기를 현지 의료진에게 전파하는 공식 파트너십 행사입니다.',
    'hero-cta-register': '사전 등록하기',
    'hero-cta-program': '프로그램 자세히 보기',
    'hero-next-label': 'Next Event',
    'hero-next-date': '2026.08.28 Ho Chi Minh',
    'hero-progress-label': 'Registration Open',
    'hero-progress-note': '임상 좌석 75% 예약 완료',
    'stat-1-label': '참여 브랜드',
    'stat-2-label': 'KOL 연사',
    'stat-3-label': '2026 행사 수',

    // About
    'about-tag': 'About Project',
    'about-title': '실질적인 수출 성과 창출 및 K-Medical Standard 구축',
    'about-desc': '글로벌 교류를 통해 한국의 의료 기술 리더십을 확립하고, 검증된 국산 의료기기의 세계 시장 진출을 가속화합니다.',
    'step-1-title': '[강의] 이론적 신뢰',
    'step-1-desc': '한국 최고의 KOL들이 전하는 최신 미용성형 지식과 이론적 기반 구축 (Trust).',
    'step-2-title': '[데모] 시각적 증명',
    'step-2-desc': 'UHD 초고화질 실시간 중계를 통한 정교한 술기 시연 및 시각적 입증 (Visualizing).',
    'step-3-title': '[전시] 직접 확인',
    'step-3-desc': 'K-Innovation 전시관에서 장비의 성능과 디자인을 직접 확인하는 기회 (Touching).',
    'step-4-title': '[핸즈온] 체득 구매',
    'step-4-desc': '직접적인 장비 조작 경험을 통한 구매 전환 및 실질적 비즈니스 체결 (Closing).',

    // Events
    'events-tag': '주요 행사 일정',
    'event1-tag': 'Event 01',
    'event1-title': 'VSAPS-KSAPS 서머캠프 + 미디어 컨퍼런스',
    'event1-date': '2026.08.28 – 08.30',
    'event1-loc': '호치민, 베트남',
    'feat1-1-title': '미디어 컨퍼런스',
    'feat1-1-desc': '글로벌 미디어 대상 K-Medical 비전 선포 및 브랜드 강화',
    'feat1-2-title': '고급 워크숍',
    'feat1-2-desc': '심도 있는 학술 토론 및 전문 술기 심화 교육 세션',
    'feat1-3-title': '핸즈온 세션',
    'feat1-3-desc': '현지 의료진이 직접 장비를 다뤄보는 실습 중심 프로그램',

    'event2-tag': 'Event 02',
    'event2-title': 'KSAPS-VSAPS KOL 교류 행사',
    'event2-date': '2026.10.30 – 11.01',
    'event2-loc': '175군병원, 베트남',
    'feat2-1-title': 'Live Demo (UHD)',
    'feat2-1-desc': '초고해상도 실시간 중계를 통한 수술실 상황 생생 전달',
    'feat2-2-title': 'B2B 매칭',
    'feat2-2-desc': '제조사와 현지 바이어 간의 1:1 비즈니스 상담 및 계약 지원',
    'feat2-3-title': 'K-Innovation 전시',
    'feat2-3-desc': '최첨단 의료기기 신제품 라인업 통합 전시',
    'feat2-4-title': '학술 세션',
    'feat2-4-desc': '전문가 그룹의 학술 교류 및 임상 사례 공유',

    // Pavilion
    'pavilion-tag': 'K-Innovation 전시관',
    'pavilion-title': 'K-Innovation Pavilion',
    'pavilion-desc': '세계가 주목하는 대한민국 대표 의료기기 브랜드를 한자리에서 만나보십시오.',
    'kmaster-title': 'K-Master Zone',
    'kmaster-desc': 'Digital Wall을 통해 브랜드 히스토리와 기술력을 한눈에 체험하는 미디어 갤러리 존입니다.',
    'exp-zone-title': '체험 존 (Experience Zone)',
    'exp-zone-desc': '장비별 시뮬레이션을 통해 실제 임상 환경에서의 사용감을 실감나게 테스트할 수 있습니다.',

    // Registration
    'reg-tag': '사전 등록',
    'reg-title': 'K-Medical 글로벌 네트워크에 합류하세요',
    'reg-desc': '지금 등록하여 2026년 K-Medical 글로벌 KOL 교류 행사에 참여하세요. 임상 좌석이 한정되어 있습니다.',
    'reg-input-placeholder': '이메일 주소를 입력해 주세요',
    'reg-btn': '사전 등록',
    'reg-note': '무료 등록 · 스팸 없음 · 언제든지 취소 가능',

    // Footer
    'footer-brand-desc': '2026 의료기기 글로벌 교육·훈련 지원사업\n미용성형 의학 교육의 탁월함.',
    'footer-partners': 'Partners',
    'footer-links': '빠른 링크',
    'footer-support': '지원',
    'partner-ksaps': 'KSAPS (대한성형외과학회)',
    'partner-vsaps': 'VSAPS (베트남성형외과학회)',
    'partner-bundang': '분당서울대학교병원',
    'partner-175': '175군병원 (베트남)',
    'link-terms': '이용약관',
    'link-privacy': '개인정보처리방침',
    'link-schedule': '전체 일정 보기',
    'link-global': '글로벌 파트너',
    'btn-contact': '문의하기',
    'footer-copy': '© 2026 K-Medical Global. 미용성형 의학 교육의 탁월함.',
  }
};

// ---- State ----
let currentLang = localStorage.getItem('kmedical-lang') || 'ko';

// ---- DOM helpers ----
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ---- Apply translations ----
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kmedical-lang', lang);

  // Update all translatable elements
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = TRANSLATIONS[lang][key];
    if (text !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else if (el.getAttribute('data-i18n-html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update lang toggle buttons
  $$('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
}

// ---- Navbar scroll effect ----
function initNavbar() {
  const navbar = $('#navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger
  const hamburger = $('#nav-hamburger');
  const mobileNav = $('#nav-mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Close mobile nav on link click
  $$('.nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

// ---- Language toggle ----
function initLangToggle() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
    });
  });
}

// ---- Scroll reveal ----
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.reveal').forEach(el => io.observe(el));
}

// ---- Counter animation ----
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target, 10));
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  $$('[data-target]').forEach(el => io.observe(el));
}

// ---- Active nav link on scroll ----
function initActiveNav() {
  const sections = $$('section[id], header[id]');
  const navLinks = $$('.nav-links a, .nav-mobile a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
}

// ---- Registration form ----
function initRegistration() {
  const form = $('#reg-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    if (email) {
      // In production, connect to your API / Vercel serverless function
      alert(currentLang === 'ko'
        ? `등록 완료! ${email} 주소로 확인 이메일을 보내드리겠습니다.`
        : `Registration received! We'll send a confirmation to ${email}`
      );
      form.reset();
    }
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLangToggle();
  initScrollReveal();
  initCounters();
  initActiveNav();
  initRegistration();

  // Apply saved language
  applyLanguage(currentLang);
});
