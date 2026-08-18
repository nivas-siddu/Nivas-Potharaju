// Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold:0.12});
  document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));

  // Safety net: guarantee visibility even if the observer never fires
  // (e.g. very tall viewport, slow layout, or unusual scroll behavior)
  window.addEventListener('load', ()=>{
    setTimeout(()=>{
      document.querySelectorAll('.fade-up:not(.in)').forEach(el=>el.classList.add('in'));
    }, 2200);
  });
