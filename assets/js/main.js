/**
 * ونش الحربي لإنقاذ وسحب السيارات (Al Harbi Towing)
 * Master Client-Side JavaScript
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Mobile Drawer Navigation
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const backdrop = document.getElementById('backdrop');

    function openDrawer() {
      if (mobileDrawer) mobileDrawer.classList.add('open');
      if (backdrop) backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });

    // 2. FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item = this.parentElement;
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('open');

        // Close others
        document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove('open');
            const otherAns = openItem.querySelector('.faq-answer');
            if (otherAns) otherAns.style.display = 'none';
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          if (answer) answer.style.display = 'none';
        } else {
          item.classList.add('open');
          if (answer) answer.style.display = 'block';
        }
      });
    });

    // Initialize open FAQs
    document.querySelectorAll('.faq-item').forEach(function (item) {
      const answer = item.querySelector('.faq-answer');
      if (item.classList.contains('open')) {
        if (answer) answer.style.display = 'block';
      } else {
        if (answer) answer.style.display = 'none';
      }
    });

    // 3. Real Video Player Coordination
    const videos = document.querySelectorAll('video');
    videos.forEach(function (vid) {
      vid.addEventListener('play', function () {
        videos.forEach(function (otherVid) {
          if (otherVid !== vid && !otherVid.paused) {
            otherVid.pause();
          }
        });
      });
    });

    // 4. Dispatch Form Submission
    const dispatchForms = document.querySelectorAll('.dispatch-form');
    dispatchForms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        const phoneInput = form.querySelector('input[type="tel"]');
        if (phoneInput && phoneInput.value.trim().length < 9) {
          e.preventDefault();
          alert('يرجى إدخال رقم هاتف صحيح للتواصل معك فوراً.');
          phoneInput.focus();
          return;
        }
        // Let it submit or redirect to thank-you.html
      });
    });

    // 5. WhatsApp Selection Modal (Dual-Number Direct Choice)
    const whatsappModal = document.getElementById('whatsappModal');
    const waModalClose = document.getElementById('waModalClose');
    const waModalBackdrop = document.getElementById('waModalBackdrop');
    const floatingWhatsappBtn = document.getElementById('floatingWhatsappBtn');
    const bottomBarWhatsappBtn = document.getElementById('bottomBarWhatsappBtn');
    const waOpenTriggers = document.querySelectorAll('.open-wa-modal');

    function openWhatsappModal(e) {
      if (e) e.preventDefault();
      if (whatsappModal) {
        whatsappModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeWhatsappModal() {
      if (whatsappModal) {
        whatsappModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    if (floatingWhatsappBtn) floatingWhatsappBtn.addEventListener('click', openWhatsappModal);
    if (bottomBarWhatsappBtn) bottomBarWhatsappBtn.addEventListener('click', openWhatsappModal);
    waOpenTriggers.forEach(function (btn) {
      btn.addEventListener('click', openWhatsappModal);
    });

    if (waModalClose) waModalClose.addEventListener('click', closeWhatsappModal);
    if (waModalBackdrop) waModalBackdrop.addEventListener('click', closeWhatsappModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && whatsappModal && whatsappModal.classList.contains('active')) {
        closeWhatsappModal();
      }
    });
  });
})();

// Google Ads Click-to-Call Conversion Tracking
window.gtag_report_conversion = window.gtag_report_conversion || function(url) {
  console.log('gtag_report_conversion triggered for:', url);
  var callback = function () {
    if (typeof(url) != 'undefined' && url) {
      window.location = url;
    }
  };
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-18536608469',
      'event_callback': callback
    });
    setTimeout(callback, 500);
  } else {
    callback();
  }
  return false;
};
var gtag_report_conversion = window.gtag_report_conversion;
