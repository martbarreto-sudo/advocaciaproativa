// NEXUM Público — interações leves: menu móvel, acordeão, reveal no scroll

(function () {
  'use strict';

  // ---- Mobile menu ----
  // A visibilidade é decidida pelo CSS a partir do atributo [hidden]; o JS não
  // escreve style inline, senão o menu sobrevive ao retorno para o desktop.
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');

  function setMenu(open) {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(menu.hidden);
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
  }

  // ---- Accordion (FAQ) ----
  var triggers = document.querySelectorAll('.acc-trigger');

  function openPanel(btn) {
    var panel = btn.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }

  triggers.forEach(function (btn) {
    var panel = btn.nextElementSibling;
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        panel.style.maxHeight = null;
      } else {
        openPanel(btn);
      }
    });
  });

  // max-height é fixado em px: sem recalcular, a resposta aberta fica cortada
  // ao girar o telefone ou quando a fonte web termina de carregar.
  function remeasureOpenPanels() {
    triggers.forEach(function (btn) {
      if (btn.getAttribute('aria-expanded') === 'true') {
        btn.nextElementSibling.style.maxHeight = 'none';
        openPanel(btn);
      }
    });
  }

  var remeasureTimer;
  window.addEventListener('resize', function () {
    clearTimeout(remeasureTimer);
    remeasureTimer = setTimeout(remeasureOpenPanels, 120);
  });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(remeasureOpenPanels);
  }

  // ---- Reveal on scroll ----
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }
})();
