// INSIDE:LAB - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  }, { passive: true });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  menuToggle.addEventListener('click', function() {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('active', menuOpen);
    
    // Animate hamburger
    const spans = menuToggle.querySelectorAll('span');
    if (menuOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close mobile menu on link click
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuOpen = false;
      mobileMenu.classList.remove('active');
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show toast
    toast.classList.add('show');
    
    // Reset form
    contactForm.reset();
    
    // Hide toast after 4 seconds
    setTimeout(function() {
      toast.classList.remove('show');
    }, 4000);
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  });

  // Add visible class style
  const style = document.createElement('style');
  style.textContent = `
    section.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

  // Parallax effect for hero background
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      heroBg.style.transform = `translateY(${rate}px) scale(1.1)`;
    }, { passive: true });
  }

  // Service cards hover effect
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Brands carousel pause on hover
  const brandsTrack = document.querySelector('.brands-track');
  if (brandsTrack) {
    brandsTrack.addEventListener('mouseenter', function() {
      this.style.animationPlayState = 'paused';
    });
    brandsTrack.addEventListener('mouseleave', function() {
      this.style.animationPlayState = 'running';
    });
  }

  // Button click feedback
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `;
      
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);

  // Lazy loading for images
  const images = document.querySelectorAll('img');
  const imageObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.onload = function() {
          img.style.opacity = '1';
        };
        
        if (img.complete) {
          img.style.opacity = '1';
        }
        
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });

  images.forEach(img => imageObserver.observe(img));

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    // Escape to close mobile menu
    if (e.key === 'Escape' && menuOpen) {
      menuOpen = false;
      mobileMenu.classList.remove('active');
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Performance: Disable complex animations on touch devices
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    const touchStyle = document.createElement('style');
    touchStyle.textContent = `
      .touch-device .brands-track {
        animation-duration: 60s !important;
      }
      .touch-device .whatsapp-pulse {
        display: none;
      }
    `;
    document.head.appendChild(touchStyle);
  }

  console.log('INSIDE:LAB - Website loaded successfully');
});

// Preload critical images
window.addEventListener('load', function() {
  const criticalImages = [
    'public/hero_event_crowd.jpg',
    'public/service_corporate.jpg',
    'public/service_wedding.jpg',
    'public/service_party.jpg'
  ];
  
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});

// Scroll Animations
(function() {
  const animatedElements = document.querySelectorAll('.fade-in-section, .slide-in-left, .slide-in-right, .scale-in, .service-card, .split-section, .split-content, .split-image, .feature-list li, .testimonial-content, .brand-card, .contact-card');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));
})();
