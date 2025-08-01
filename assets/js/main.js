// Main JavaScript file for JAECOO website
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
  
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      });
    }
  
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
        }
      });
    });
  
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
      }
  
      lastScrollTop = scrollTop;
    });
  
    // Hero indicators functionality
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicator');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    }
  
    if (slides.length > 0 && indicators.length > 0) {
      showSlide(currentSlide);
  
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
          currentSlide = index;
          showSlide(currentSlide);
        });
      });
  
      setInterval(function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }, 5000);
    }
  
    // Form validation (for contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        let isValid = true;
        const formData = new FormData(this);
        const requiredFields = ['name', 'email', 'message'];
  
        requiredFields.forEach(fieldName => {
          const field = this.querySelector(`[name="${fieldName}"]`);
          const value = formData.get(fieldName);
  
          if (!value || value.trim() === '') {
            showFieldError(field, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
            isValid = false;
          } else {
            clearFieldError(field);
          }
        });
  
        const emailField = this.querySelector('[name="email"]');
        const emailValue = formData.get('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (emailValue && !emailRegex.test(emailValue)) {
          showFieldError(emailField, 'Please enter a valid email address');
          isValid = false;
        }
  
        if (isValid) {
          showSuccessMessage('Thank you for your message! We will contact you soon.');
          this.reset();
        }
      });
    }
  
// === WhatsApp Form Handler ===
const whatsappForm = document.getElementById('whatsapp-form');
if (whatsappForm) {
  whatsappForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phoneInput = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const location = document.getElementById('location').value.trim();
    const message = document.getElementById('message').value.trim();

    const typeRadio = document.querySelector('input[name="type"]:checked');
    const type = typeRadio ? typeRadio.value : '';

    if (!name || !phoneInput || !subject || !location || !type || !message) {
      alert('Semua kolom wajib diisi!');
      return;
    }

    // Convert phone number to international format
    let phone = phoneInput;
    if (phone.startsWith('0')) {
      phone = '62' + phone.slice(1);
    } else if (phone.startsWith('+62')) {
      phone = phone.replace('+', '');
    }

    const whatsappNumber = '6281250249175'; 

    const fullMessage = 
    `Halo JAECOO Surabaya,\n` +
    `Nama: ${name}\n` +
    `No. HP: ${phoneInput}\n` +
    `Model: ${subject}\n` +
    `Lokasi: ${location}\n` +
    `Tipe Pesan: ${type}\n` +
    `Pesan: ${message}`;



    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  });
}

  
    // Language toggle functionality
    const langOptions = document.querySelectorAll('.lang-option, .lang-active');
    langOptions.forEach(option => {
      option.addEventListener('click', function () {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'en' ? 'id' : 'en';
  
        if (window.TranslationManager) {
          window.TranslationManager.applyTranslations(newLang);
        }
  
        const langActive = document.querySelector('.lang-active');
        const langOption = document.querySelector('.lang-option');
  
        if (langActive && langOption) {
          langActive.textContent = newLang.toUpperCase();
          langOption.textContent = currentLang.toUpperCase();
        }
      });
    });
  
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
  
    const animatedElements = document.querySelectorAll('.hero-content, .about-content, .j7-content, .jurassic-content');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });
  
    // Phone number click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
      link.addEventListener('click', function () {
        console.log('Phone number clicked:', this.href);
      });
    });
  
    // Error handling for external resources
    window.addEventListener('error', function (e) {
      console.error('Resource loading error:', e.filename, e.message);
    });
  
    // Handle offline/online status
    window.addEventListener('online', function () {
      console.log('Connection restored');
    });
  
    window.addEventListener('offline', function () {
      console.log('Connection lost');
    });
  
    // Utility functions for validation
    function showFieldError(field, message) {
      field.classList.add('error');
      let errorElement = field.parentNode.querySelector('.error-message');
  
      if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
      }
  
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  
    function clearFieldError(field) {
      field.classList.remove('error');
      const errorElement = field.parentNode.querySelector('.error-message');
      if (errorElement) {
        errorElement.style.display = 'none';
      }
    }
  
    function showSuccessMessage(message) {
      const successDiv = document.createElement('div');
      successDiv.className = 'success-message';
      successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #2c5f5d;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 1001;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      `;
      successDiv.textContent = message;
  
      document.body.appendChild(successDiv);
  
      setTimeout(() => {
        if (successDiv.parentNode) {
          successDiv.parentNode.removeChild(successDiv);
        }
      }, 5000);
    }
  });
  
  // Utility functions (outside DOMContentLoaded)
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
  
  window.JaecooUtils = {
    debounce,
    throttle
  };
  