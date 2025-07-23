// Translation data for English and Indonesian
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_models: "Models",
        nav_stories: "Stories",
        nav_super_hybrid: "Super Hybrid System",
        nav_find_dealer: "Find a Dealer",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "NEW LUXURY REIMAGINED",
        hero_subtitle: "Empowered for Adventure, and Enhanced with Intelligent Technology.",
        hero_button_j7: "JAECOO J7 SHS",
        hero_button_test: "BOOK TEST DRIVE",
        
        // J7 Section
        j7_title: "JAECOO J7",
        j7_button: "J7 SHS",
        
        // About Section
        about_text: "Combining refined and elegant design with extraordinary performance, JAECOO revolutionizes the urban market, setting new trends and dominating even the most extreme terrains.",
        about_button: "LEARN MORE",
        
        // Super Hybrid Section
        super_hybrid_button: "SUPER HYBRID SYSTEM",
        
        // Footer
        footer_legal_notice: "Legal Notice",
        footer_privacy: "Privacy Policy",
        footer_copyright: "COPYRIGHT © 2024 JAECOO INDONESIA",
        
        // Models
        model_j8_ardis: "JAECOO J8 ARDIS",
        model_j8_shs: "JAECOO J8 SHS ARDIS",
        model_j7_shs: "JAECOO J7 SHS"
    },
    id: {
        // Navigation
        nav_home: "Beranda",
        nav_models: "Model",
        nav_stories: "Cerita",
        nav_super_hybrid: "Sistem Super Hybrid",
        nav_find_dealer: "Temukan Dealer",
        nav_contact: "Kontak",
        
        // Hero Section
        hero_title: "KEMEWAHAN BARU YANG DIPERBARUI",
        hero_subtitle: "Diberdayakan untuk Petualangan, dan Diperkuat dengan Teknologi Cerdas.",
        hero_button_j7: "JAECOO J7 SHS",
        hero_button_test: "PESAN TEST DRIVE",
        
        // J7 Section
        j7_title: "JAECOO J7",
        j7_button: "J7 SHS",
        
        // About Section
        about_text: "Menggabungkan desain yang halus dan elegan dengan performa luar biasa, JAECOO merevolusi pasar perkotaan, menetapkan tren baru dan mendominasi bahkan medan paling ekstrem.",
        about_button: "PELAJARI LEBIH LANJUT",
        
        // Super Hybrid Section
        super_hybrid_button: "SISTEM SUPER HYBRID",
        
        // Footer
        footer_legal_notice: "Pemberitahuan Hukum",
        footer_privacy: "Kebijakan Privasi",
        footer_copyright: "HAK CIPTA © 2024 JAECOO INDONESIA",
        
        // Models
        model_j8_ardis: "JAECOO J8 ARDIS",
        model_j8_shs: "JAECOO J8 SHS ARDIS",
        model_j7_shs: "JAECOO J7 SHS"
    }
};

// Function to apply translations
function applyTranslations(lang) {
    document.documentElement.lang = lang;
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = translations[lang].nav_home;
        else if (href === 'models.html') link.textContent = translations[lang].nav_models;
        else if (href === 'stories.html') link.textContent = translations[lang].nav_stories;
        else if (href === 'super-hybrid.html') link.textContent = translations[lang].nav_super_hybrid;
        else if (href === 'find-dealer.html') link.textContent = translations[lang].nav_find_dealer;
        else if (href === 'contact.html') link.textContent = translations[lang].nav_contact;
    });
    
    // Update footer navigation
    document.querySelectorAll('.footer-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = translations[lang].nav_home.toUpperCase();
        else if (href === 'stories.html') link.textContent = translations[lang].nav_stories.toUpperCase();
        else if (href === 'super-hybrid.html') link.textContent = translations[lang].nav_super_hybrid.toUpperCase();
        else if (href === 'find-dealer.html') link.textContent = translations[lang].nav_find_dealer.toUpperCase();
        else if (href === 'contact.html') link.textContent = translations[lang].nav_contact.toUpperCase();
    });
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.textContent = translations[lang].hero_title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = translations[lang].hero_subtitle;
    
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons[0]) heroButtons[0].textContent = translations[lang].hero_button_j7;
    if (heroButtons[1]) heroButtons[1].textContent = translations[lang].hero_button_test;
    
    // Update J7 section
    const j7Title = document.querySelector('.j7-title');
    if (j7Title) j7Title.textContent = translations[lang].j7_title;
    
    const j7Button = document.querySelector('.j7-content .btn');
    if (j7Button) j7Button.textContent = translations[lang].j7_button;
    
    // Update about section
    const aboutText = document.querySelector('.about-text');
    if (aboutText) aboutText.textContent = translations[lang].about_text;
    
    const aboutButton = document.querySelector('.about-content .btn');
    if (aboutButton) aboutButton.textContent = translations[lang].about_button;
    
    // Update super hybrid section
    const superHybridButton = document.querySelector('.super-hybrid-content .btn');
    if (superHybridButton) superHybridButton.textContent = translations[lang].super_hybrid_button;
    
    // Update footer
    const legalLinks = document.querySelectorAll('.legal-link');
    if (legalLinks[0]) legalLinks[0].textContent = translations[lang].footer_legal_notice;
    if (legalLinks[1]) legalLinks[1].textContent = translations[lang].footer_privacy;
    
    const copyright = document.querySelector('.footer-copyright p');
    if (copyright) copyright.textContent = translations[lang].footer_copyright;
    
    // Update model cards
    const modelCards = document.querySelectorAll('.model-card h3');
    modelCards.forEach(card => {
        const text = card.textContent;
        if (text.includes('J8 ARDIS') && !text.includes('SHS')) {
            card.textContent = translations[lang].model_j8_ardis;
        } else if (text.includes('J8 SHS ARDIS')) {
            card.textContent = translations[lang].model_j8_shs;
        } else if (text.includes('J7 SHS')) {
            card.textContent = translations[lang].model_j7_shs;
        }
    });
    
    // Update language toggle UI
    const langActive = document.querySelector('.lang-active');
    const langOption = document.querySelector('.lang-option');
    
    if (langActive && langOption) {
        if (lang === 'en') {
            langActive.textContent = 'EN';
            langOption.textContent = 'ID';
        } else {
            langActive.textContent = 'ID';
            langOption.textContent = 'EN';
        }
    }
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language
function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    applyTranslations(savedLang);
    
    // Set up language toggle
    const langOptions = document.querySelectorAll('.lang-option, .lang-active');
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'en' ? 'id' : 'en';
            applyTranslations(newLang);
        });
    });
}

// Export for global use
window.TranslationManager = {
    applyTranslations,
    initLanguage
};
