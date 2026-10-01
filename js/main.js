var PROJECTS = [
  {
    title: "DreamAI",
    titleEn: "DreamAI",
    desc: {
      tr: "AI destekli rüya tabirleri uygulaması. Ücretsiz/Ücretli kullanım, detaylı rüya analizleri, rüya analizi hakkında görseller, favori rüyalar bölümü ve daha fazlası.",
      en: "An AI-powered dream interpretation app with free/paid usage, detailed dream analyses, visuals about dream analysis, a favorites section and more."
    },
    tags: ["Flutter", "Firebase", "AI"],
    github: "#",
    demo: "#",
    image: "Proje1 resimler/splash.png",
    images: [
      "Proje1 resimler/splash.png",
      "Proje1 resimler/header.png",
      "Proje1 resimler/objects.png",
      "Proje1 resimler/header_moon.png",
      "Proje1 resimler/header_text.png",
      "Proje1 resimler/favicon.png"
    ],
    contribution: true
  },
  {
    title: "Project Nightmare",
    titleEn: "Project Nightmare",
    desc: {
      tr: "Belirli kurallar içerisinde kabustan uyanmaya çalışma mücadelesi; heyecanlı ve korkulu bir mobil oyun. Projenin yapımcısı ve geliştiricisiyim.",
      en: "A thrilling and scary mobile game where you struggle to wake up from a nightmare under specific rules. I'm the producer and developer of the project."
    },
    tags: ["Flutter", "Game", "Mobile"],
    github: "#",
    demo: "#",
    images: [
      "Proje2 resimler/main1.jpeg",
      "Proje2 resimler/enter2.jpeg",
      "Proje2 resimler/nightmare3.jpeg",
      "Proje2 resimler/room4.jpeg"
    ]
  },
  {
    title: "Notella",
    titleEn: "Notella",
    desc: {
      tr: "Günlük hayatta kolaylıkla kullanabileceğiniz Flutter tabanlı bir mobil uygulama. Pazar, market ve mağaza alışveriş listesi hazırlama ve hatırlatıcısı ile ilaç kullananlar için tarih/saat bazlı ilaç listesi ve hatırlatıcı içeriyor. Kendine özgü alarm/hatırlatıcı sistemi yakında geliyor; yeni özelliklerle gelişim aşamasındadır. Projenin yapımcısı ve geliştiricisiyim.",
      en: "A Flutter-based mobile app you can easily use in daily life. It includes shopping list creation and reminders (bazaar, market, store) plus date/time based medication lists and reminders. A custom alarm/reminder system is coming soon; it's still in development with new features on the way. I'm the producer and developer of the project."
    },
    tags: ["Flutter", "Mobile", "Productivity"],
    github: "#",
    demo: "#",
    images: [
      "Proje3 resimler/main1.jpeg",
      "Proje3 resimler/pazarlist2.jpeg",
      "Proje3 resimler/tumlisteler3.jpeg",
      "Proje3 resimler/urunekle4.jpeg",
      "Proje3 resimler/clockalarm5.jpeg",
      "Proje3 resimler/profil6.jpeg"
    ]
  }
];

function renderProjects(lang) {
  var grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  var githubSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.69-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.11-.74.41-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.42.37.79 1.09.79 2.2v3.26c0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>';
  var demoSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

  PROJECTS.forEach(function (p) {
    var title = lang === 'en' && p.titleEn ? p.titleEn : p.title;
    var desc = p.desc[lang] || p.desc.tr;

    var badge = p.contribution
      ? '<span class="project-badge">' + (lang === 'en' ? 'Contribution' : 'Katkıda Bulunan') + '</span>'
      : '';

    var thumbs = p.images || (p.image ? [p.image] : []);
    var mainImage = thumbs[0] || '';
    var thumb;

    if (mainImage) {
      var gallery = thumbs.length > 1
        ? '<div class="project-gallery">' +
            thumbs.map(function (src) {
              var fit = src.indexOf('header_text') !== -1 ? ' fit' : '';
              return '<button type="button" class="gallery-thumb' + fit + (src === mainImage ? ' active' : '') + '" data-src="' + src + '" aria-label="' + title + '">' +
                '<img src="' + src + '" alt="' + title + '" loading="lazy"></button>';
            }).join('') +
          '</div>'
        : '';

      thumb = '<div class="project-thumb project-thumb-img project-thumb-main">' +
                '<img src="' + mainImage + '" alt="' + title + '" loading="lazy">' +
              '</div>' + gallery;
    } else {
      thumb = '<div class="project-thumb"><span>' + title.charAt(0) + '</span></div>';
    }

    var card = document.createElement('article');
    card.className = 'project-card reveal';
    card.innerHTML =
      '<div class="project-media">' + badge + thumb + '</div>' +
      '<div class="project-body">' +
        '<h3 class="project-title">' + title + '</h3>' +
        '<p class="project-desc">' + desc + '</p>' +
        '<div class="project-tags">' + p.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
        '<div class="project-links">' +
          '<a href="' + p.github + '" class="project-link" target="_blank" rel="noopener noreferrer">' + githubSvg + 'GitHub</a>' +
          '<a href="' + p.demo + '" class="project-link" target="_blank" rel="noopener noreferrer">' + demoSvg + (lang === 'en' ? 'Live Demo' : 'Canlı Demo') + '</a>' +
        '</div>' +
      '</div>';

    grid.appendChild(card);
  });

  grid.onclick = function (e) {
    var btn = e.target.closest('.gallery-thumb');
    var main = e.target.closest('.project-thumb-main img');

    if (btn) {
      var media = btn.closest('.project-media');
      var mainImg = media ? media.querySelector('.project-thumb-main img') : null;
      if (mainImg) mainImg.src = btn.getAttribute('data-src');
      if (media) {
        media.querySelectorAll('.gallery-thumb').forEach(function (b) {
          b.classList.toggle('active', b === btn);
        });
      }
      openLightbox(grid, btn);
      return;
    }

    if (main) openLightbox(grid, main);
  };

  observeReveals();
}

function openLightbox(grid, trigger) {
  var media = trigger.closest('.project-media');
  if (!media) return;

  var images = media.querySelectorAll('.project-thumb-main img, .gallery-thumb img');
  var imgs = Array.prototype.map.call(images, function (img) { return img.getAttribute('src'); });
  var currentSrc = trigger.getAttribute('src') || trigger.getAttribute('data-src');
  var index = imgs.indexOf(currentSrc);

  var lb = document.getElementById('lightbox');
  var lbImg = lb.querySelector('.lightbox-img');

  function show(position) {
    index = (position + imgs.length) % imgs.length;
    lbImg.src = imgs[index];
  }

  function close() {
    lb.classList.remove('open');
    document.body.classList.remove('lb-open');
    document.removeEventListener('keydown', onKey);
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  }

  lb.onclick = function (e) {
    if (e.target === lb || e.target === lbImg) close();
  };
  lb.querySelector('.lightbox-close').onclick = close;
  lb.querySelector('.lightbox-prev').onclick = function (e) { e.stopPropagation(); show(index - 1); };
  lb.querySelector('.lightbox-next').onclick = function (e) { e.stopPropagation(); show(index + 1); };

  show(index);
  lb.classList.add('open');
  document.body.classList.add('lb-open');
  document.addEventListener('keydown', onKey);
}

var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveals() {
  document.querySelectorAll('.reveal:not(.in-view)').forEach(function (el) {
    revealObserver.observe(el);
  });
}

var currentLang = localStorage.getItem('lang') || 'tr';
applyLang(currentLang);
renderProjects(currentLang);

document.getElementById('lang-tr').addEventListener('click', function () { setLang('tr'); });
document.getElementById('lang-en').addEventListener('click', function () { setLang('en'); });

function setLang(lang) {
  currentLang = lang;
  applyLang(lang);
  renderProjects(lang);
}

var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function () {
  var open = document.body.classList.toggle('menu-open');
  hamburger.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

var navbar = document.getElementById('navbar');
var backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', function () {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  backToTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

var sectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

['about', 'projects', 'contact'].forEach(function (id) {
  var el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('f-name').value.trim();
  var email = document.getElementById('f-email').value.trim();
  var message = document.getElementById('f-message').value.trim();

  var subject = encodeURIComponent('Portfolyo iletişim: ' + name);
  var body = encodeURIComponent(message + '\n\n' + name + ' <' + email + '>');

  window.location.href = 'mailto:umut-taskin@hotmail.com?subject=' + subject + '&body=' + body;
});
