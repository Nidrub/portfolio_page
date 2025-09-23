const fadeInRightElements = document.querySelectorAll('.fade-in-right');
const fadeInUpElements = document.querySelectorAll('.fade-in-up');

//for any element that appears 20% of the element is on screen
const observer= new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
      }
    });
},{threshold: 0.5} );//trigger when 20% vis
// add the animations to all that have the fade in right effect
fadeInRightElements.forEach(el => observer.observe(el));
fadeInUpElements.forEach(el => observer.observe(el));