# Portfolyo Projesi — Devam Notları

Son güncelleme: Eylül 2026

## Proje Özeti
Umut Taşkın'ın kişisel web portfolyosu. Vanilla HTML/CSS/JS ile yapıldı,
tamamen lokalde çalışıyor (`index.html` dosyasını tarayıcıda açmak yeterli).

## Kişi Bilgileri (siteye işlendi)
- **Ad Soyad:** Umut Taşkın
- **Unvan:** Full-Stack Developer
- **Eğitim (CV'den, Anadolu Üniv. Açıköğretim):** Yapay Zeka Destekli Kodlama (Önlisans, devam ediyor),
  Bilgisayar Programcılığı (Önlisans, 2026), Halkla İlişkiler ve Tanıtım (Önlisans, 2024)
- **Deneyim (CV'den):** Yazılım Geliştirme & Destek (Pyramid HBYS), Donanım Uzmanı,
  SGK Faturalama Uzmanı (Medicalpark), Satış Temsilcisi (A Medikal)
- **Hakkımda:** Yazılım ve donanım alanında bilgi ve tecrübe sahibi; Flutter geliştirme
- **E-posta:** umut-taskin@hotmail.com (hero ikonu, iletişim kartı ve formda kullanılıyor)

## Önemli
- "Hakkımda" bölümü CV'den ("UMUT TAŞKIN CV.docx") düzenlendi: yeni metinler (TR/EN),
  beceri chip'leri (Flutter, Dart, HTML/CSS, JS, Git, Donanım), iş deneyimi kartları ve
  3. eğitim kartı (Yapay Zeka Destekli Kodlama — devam ediyor) eklendi. Yıllar i18n
  sözlüğünde (js/i18n.js) tutuluyor; yeni pozisyon eklenecekse ORADAN düzenlenmeli.

## Dosya Yapısı
```
Portfolyo/
├── index.html          → tüm bölümler (navbar, hero, hakkımda, projeler, iletişim, footer)
├── css/style.css       → tema sistemi (CSS değişkenleri), responsive tasarım
├── js/theme.js         → koyu/açık tema toggle (localStorage: "theme", varsayılan koyu)
├── js/i18n.js          → TR/EN sözlük (TRANSLATIONS) + applyLang() fonksiyonu
└── js/main.js          → proje kartları, mobil menü, scroll animasyonları, form
```

## Tasarım Kararları
- Tema: CSS custom properties, `<html data-theme>` üzerinde; tercih localStorage'da
- Dil: `data-i18n` / `data-i18n-placeholder` attribute'ları üzerinden çeviri; localStorage'da ("lang")
- Fontlar: Space Grotesk (başlıklar), Inter (gövde) — Google Fonts
- Vurgu rengi: mor-mavi gradient (#6d5cff → #38bdf8)
- Scroll animasyonları IntersectionObserver ile (.reveal → .in-view)

## Projeler (Proje Kısımları)
1. **DreamAI** — AI destekli rüya tabirleri uygulaması (Flutter/Firebase/AI).
   Görseller: `Proje1 resimler/` klasöründen 6 görsel (splash, header, objects,
   header_moon, header_text, favicon). Ana görsel `splash.png`, altındaki küçük
   önizlemelere (`.gallery-thumb`) tıklayınca ana görsel değişiyor. `contribution: true`
   olduğu için kartta "Katkıda Bulunan" rozeti gösteriliyor. GitHub/demo hâlâ `#`.
2. **Project Nightmare** — Kabustan uyanma temalı korku mobil oyunu (Flutter/Game/Mobile).
   Görseller: `Proje2 resimler/` (main1, enter2, nightmare3, room4 — dosya sonundaki
   rakama göre sıralı). Rol: Yapımcı & Geliştirici (rozet yok, tamamen kendisine ait).
   GitHub/demo hâlâ `#`.
3. **Notella** — Alışveriş listesi ve ilaç hatırlatıcı mobil uygulaması (Flutter/Mobile/Productivity).
   Görseller: `Proje3 resimler/` (main1, pazarlist2, tumlisteler3, urunekle4,
   clockalarm5, profil6 — rakama göre sıralı). Alarm sistemi "yakında" geliyor, gelişim aşamasında.
   Rol: Yapımcı & Geliştirici. GitHub/demo hâlâ `#`.

## Yapılacaklar (devam ederken)
1. **GitHub / demo linkleri:** Tüm projelerdeki `github`/`demo` alanları (js/main.js) hâlâ `#`.
   Gerçek adresler verilince doldurulacak.
2. **GitHub / LinkedIn linkleri:** `index.html` içinde `href="#"` placeholder'lar
   (hero sosyal ikonlar + iletişim bölümü) gerçek adreslerle bağlanacak.
3. **Opsiyonel fikirler:** blog, siteyi yayına alma (örn. GitHub Pages), form için
   Formspree gibi bir backend çözümü. (Form şu an mailto ile e-posta uygulamasını açıyor.
   Deneyim/Yetenek bölümü zaten CV eklendiği için YAPILDI sayılır.)

## Bilinen Not
- İlk kurulumda `revealObserver` tanımlanmadan kullanıldığı için içerikler görünmüyordu;
  gözlemci artık ilk kullanımdan önce oluşturuluyor (js/main.js başı). Bu sırayı bozma.
- Proje kartına görsel desteği (`p.image`), galeri (`p.images`), "Katkıda Bulunan"
  rozeti (`p.contribution`) ve lightbox (tıklayınca tam ekran görüntüleme) eklendi.
  Ayrıca sayfa alt sağında "Yukarı çık" ok butonu (`.back-to-top`, 400px kayınca görünür).
  `p.images` verilirse altına tıklanabilir mini galeri oluşur; ana görsele veya bir
  önizlemeye tıklanınca lightbox açılır (ok tuşları/Esc gezinme). Yalnızca `p.image`
  verilirse tek görsel, ikisi de verilmezse eski harf thumbnail'ı kullanılır.
  `header_text.png` 420px'e küçültüldü; galeride `fit` sınıfı ile `object-fit: contain`
  uygulanıyor (geniş transparan görseller taşmadan sığıyor).
