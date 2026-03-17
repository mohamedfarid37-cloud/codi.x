
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
});

if (navToggle && nav) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.15});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-scroll]').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const target = document.querySelector(btn.dataset.scroll);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
